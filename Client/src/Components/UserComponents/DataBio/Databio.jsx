import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faDownload } from "@fortawesome/free-solid-svg-icons";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import style from "./Databio.module.css";

const decryptMobileNumber = (encryptedMobno) => {
  if (encryptedMobno) {
    return atob(encryptedMobno);
  }
  return "N/A";
};

const dummyData = [
  {
    id: 1,
    name: "John Doe",
    age: "30",
    birth_time:"5.54am",
    bloodgroup: "B+ve",
    rashi:"Meen",
    caste: "Maratha",
    city: "New York",
    area: "Manhattan",
    height: "6ft",
    mobno: btoa("+917744875601"),
    imgSrc: "https://cdn0.weddingwire.in/article/3713/3_2/1280/jpg/63173-marriage-images-rituals-wedding-photography-lead-image.webp",
    education: "MBA",
    occupation: "Software Engineer",
    minIncome: "50000 LPA",
    motherName: "Jane Doe",
    
    fatherName: "Richard Doe",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: "28",
    birth_time:"12.20pm",
    bloodgroup:"A+ve",
    rashi:"Kumbh",
    caste:"Jain",
    city: "Los Angeles",
    area: "Hollywood",
    height: "5ft 7in",
    mobno: btoa("+918734676522"),
    imgSrc: "https://wedding-photography.in/images/videography-photography/traditional-wedding-photography-photography1s.jpg",
    education: "Bachelors in Arts",
    occupation: "Artist",
    minIncome: "440000 LPA",
    motherName: "Emily Smith",
    fatherName: "Tom Smith",
  },

  {
    id: 3,
    name: "Jane Smith",
    age: "28",
    birth_time:"3.30am",
    bloodgroup:"AB+ve",
    rashi:"Vrushabh",
    caste:"Maratha Kunabi",
    city: "Los Angeles",
    area: "Hollywood",
    height: "5ft 7in",
    mobno: btoa("+918734676522"),
    imgSrc: "https://wedding-photography.in/images/videography-photography/traditional-wedding-photography-photography1s.jpg",
    education: "Bachelors in Arts",
    occupation: "Artist",
    minIncome: "250000 LPA",
    motherName: "Emily Smith",
    fatherName: "Tom Smith",
  },

  {
    id: 4,
    name: "Jane Smith",
    age: "28",
    birth_time:"8.20am",
    bloodgroup:"O+ve",
    rashi:"Mesh",
    caste:"Marwadi Jain",
    city: "Los Angeles",
    area: "Hollywood",
    height: "5ft 7in",
    mobno: btoa("+918734676522"),
    imgSrc: "https://wedding-photography.in/images/videography-photography/traditional-wedding-photography-photography1s.jpg",
    education: "Bachelors in Arts",
    occupation: "Artist",
    minIncome: "150000 LPA",
    motherName: "Emily Smith",
    fatherName: "Tom Smith",
  },
  
];

function BiodataPage() {
  const { id } = useParams();
  const [biodata, setBiodata] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const selectedBiodata = dummyData.find((data) => data.id === parseInt(id));
    setBiodata(selectedBiodata || null);
  }, [id]);

  const downloadPDF = async () => {
    setLoading(true);
    const pdfElement = document.getElementById("pdfContent");

    try {
      const canvas = await html2canvas(pdfElement, { scale: 2 }); // Higher scale for better quality
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = (canvas.height * pageWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
      pdf.save(`${biodata.name}_Biodata.pdf`);
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!biodata) {
    return <div className={style.loading}>Loading or No Data Found...</div>;
  }

  return (
    <div className={style.biodataContainer}>
      {loading && <div className={style.loadingOverlay}>Generating PDF...</div>}
      <div id="pdfContent" className={style.biodataCard}>
        <img
          src={biodata.imgSrc || "https://via.placeholder.com/450"}
          alt={biodata.name}
          className={style.biodataImg}
        />
       <div className={style.biodataInfo}>
  <div className={style.biodataInfoHeader}>
  <h2>
  <div className={style.nameVerifiedContainer}>
    {biodata.name}
    <FontAwesomeIcon icon={faCheckCircle} className={style.verifiedIcon} />
  </div>
  <button className={style.downloadBtn} onClick={downloadPDF}>
    Download PDF
    <FontAwesomeIcon icon="download" />
  </button>
</h2>

    
  </div>
  <p>Age: {biodata.age}</p>
  <p>Birth-Time: {biodata.birth_time}</p>
  <p>Blood Group: {biodata.bloodgroup}</p>
  <p>Caste: {biodata.caste}</p>
  <p>Rashi: {biodata.rashi}</p>
  <p>Height: {biodata.height}</p>
  <p>City: {biodata.city}</p>
  <p>Area: {biodata.area}</p>
  <p>Mobile No: {decryptMobileNumber(biodata.mobno)}</p>
  <p>Education: {biodata.education}</p>
  <p>Occupation: {biodata.occupation}</p>
  <p>Annualy Income: {biodata.minIncome}</p>
  <p>Mother's Name: {biodata.motherName}</p>
  <p>Father's Name: {biodata.fatherName}</p>
</div>
      </div>
      {/* <button className={style.downloadBtn} onClick={downloadPDF}>
        Download PDF
        <FontAwesomeIcon icon={faDownload} style={{ marginLeft: "8px" }} />
      </button> */}
    </div>
  );
}

export default BiodataPage;
