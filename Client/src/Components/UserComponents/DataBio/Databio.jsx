import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faDownload } from "@fortawesome/free-solid-svg-icons";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import style from "./Databio.module.css";
import Image1 from "../Bried/Bimages/img1.png"
import Image2 from "../Bried/Bimages/img2.png"
import Image3 from "../Bried/Bimages/img3.png"
import Image4 from "../Bried/Bimages/img4.png"
import Image5 from "../Bried/Bimages/img5.png"
import Image6 from "../Bried/Bimages/img6.png"
import Image7 from "../Bried/Bimages/img7.png"
import Image8 from "../Bried/Bimages/img8.png"
import Image9 from "../Bried/Bimages/img9.png"
import Image10 from "../Bried/Bimages/img10.png"

// const decryptMobileNumber = (encryptedMobno) => {
//   if (encryptedMobno) {
//     return atob(encryptedMobno);
//   }
//   return "N/A";
// };

const dummyData = [
    {
   
        id: 1,
          name: "Priya Kulkarni",
          age: 25,
          birthTime: "3:00pm",
          BloodGroup: "B+ve",
          caste: "Maratha",
          rashi: "Tula",
          height: "5ft 4in",
          city: "Akola",
          area: "Jatharpeth",
          mobileNo: btoa("+919865432178"),
          education: "MCom",
          occupation: "Professor",
          annualIncome: "6 LPA",
          motherName: "Sandhya Kulkarni",
          fatherName: "Prakash Kulkarni",
          imgSrc: Image1,
        },
        {
            id: 2,
            name: "Rutuja Deshmukh",
            age: 24,
            birthTime: "10:15am",
            bloodGroup: "O+ve",
            caste: "Maratha",
            rashi: "Karka",
            height: "5ft 6in",
            city: "Amravati",
            area: "Rajapeth",
            mobileNo: btoa("+918765432109"),
            education: "BE IT",
            occupation: "Software Developer",
            annualIncome: "9 LPA",
            motherName: "Vandana Deshmukh",
            fatherName: "Shankar Deshmukh",
            mobno: "+918734676522",
            imgSrc: Image2,
           
          },
  {
    id: 3,
    name: "Pooja Pramod Mamankar",
    age: "30",
    birth_time:"5.54am",
    bloodgroup: "B+ve",
    rashi:"Meen",
    caste: "Maratha",
    city: "New York",
    area: "Manhattan",
    height: "6ft",
    mobno: btoa("+917744875601"),
    imgSrc: Image3,
    education: "MBA",
    occupation: "Software Engineer",
    minIncome: "50000 LPA",
    motherName: "Jane Doe",
    
    fatherName: "Richard Doe",
  },

  {
    id: 4,
    name: "Pooja Pramod Mamankar",
    age: "30",
    birth_time:"5.54am",
    bloodgroup: "B+ve",
    rashi:"Meen",
    caste: "Maratha",
    city: "New York",
    area: "Manhattan",
    height: "6ft",
    mobno: btoa("+917744875601"),
    imgSrc: Image4,
    education: "MBA",
    occupation: "Software Engineer",
    minIncome: "50000 LPA",
    motherName: "Jane Doe",
    
    fatherName: "Richard Doe",
  },
  {
    id: 5,
    name: "Pooja Pramod Mamankar",
    age: "30",
    birth_time:"5.54am",
    bloodgroup: "B+ve",
    rashi:"Meen",
    caste: "Maratha",
    city: "New York",
    area: "Manhattan",
    height: "6ft",
    mobno: btoa("+917744875601"),
    imgSrc: Image5,
    education: "MBA",
    occupation: "Software Engineer",
    minIncome: "50000 LPA",
    motherName: "Jane Doe",
    
    fatherName: "Richard Doe",
  },
  {
    id: 6,
    name: "Pooja Pramod Mamankar",
    age: "30",
    birth_time:"5.54am",
    bloodgroup: "B+ve",
    rashi:"Meen",
    caste: "Maratha",
    city: "New York",
    area: "Manhattan",
    height: "6ft",
    mobno: btoa("+917744875601"),
    imgSrc: Image6,
    education: "MBA",
    occupation: "Software Engineer",
    minIncome: "50000 LPA",
    motherName: "Jane Doe",
    
    fatherName: "Richard Doe",
  },
  {
    id: 7,
    name: "Pooja Pramod Mamankar",
    age: "30",
    birth_time:"5.54am",
    bloodgroup: "B+ve",
    rashi:"Meen",
    caste: "Maratha",
    city: "New York",
    area: "Manhattan",
    height: "6ft",
    mobno: btoa("+917744875601"),
    imgSrc: Image7,
    education: "MBA",
    occupation: "Software Engineer",
    minIncome: "50000 LPA",
    motherName: "Jane Doe",
    
    fatherName: "Richard Doe",
  },
  {
    id: 8,
    name: "Pooja Pramod Mamankar",
    age: "30",
    birth_time:"5.54am",
    bloodgroup: "B+ve",
    rashi:"Meen",
    caste: "Maratha",
    city: "New York",
    area: "Manhattan",
    height: "6ft",
    mobno: btoa("+917744875601"),
    imgSrc: Image8,
    education: "MBA",
    occupation: "Software Engineer",
    minIncome: "50000 LPA",
    motherName: "Jane Doe",
    
    fatherName: "Richard Doe",
  },
  {
    id: 9,
    name: "Pooja Pramod Mamankar",
    age: "30",
    birth_time:"5.54am",
    bloodgroup: "B+ve",
    rashi:"Meen",
    caste: "Maratha",
    city: "New York",
    area: "Manhattan",
    height: "6ft",
    mobno: btoa("+917744875601"),
    imgSrc: Image9,
    education: "MBA",
    occupation: "Software Engineer",
    minIncome: "50000 LPA",
    motherName: "Jane Doe",
    
    fatherName: "Richard Doe",
  },
  {
    id: 10,
    name: "Pooja Pramod Mamankar",
    age: "30",
    birth_time:"5.54am",
    bloodgroup: "B+ve",
    rashi:"Meen",
    caste: "Maratha",
    city: "New York",
    area: "Manhattan",
    height: "6ft",
    mobno: btoa("+917744875601"),
    imgSrc: Image10,
    education: "MBA",
    occupation: "Software Engineer",
    minIncome: "50000 LPA",
    motherName: "Jane Doe",
    
    fatherName: "Richard Doe",
  },

  {
    id: 11,
    name: "Rahul Patil",
    age: 28,
    birthTime: "6:30am",
    bloodGroup: "B+ve",
    caste: "Maratha",
    rashi: "Kumbh",
    height: "5ft 9in",
    city: "Akola",
    area: "Ramdas Peth",
    mobileNo: "+919876543210",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc5S1hpfJHvHAMpk9mr-kqtHnz_ksyIcsoiQ&s",
    education: "MBA",
    occupation: "Sales Manager",
    annualIncome: "12 LPA",
    motherName: "Anjali Patil",
    fatherName: "Shivaji Patil",
  },
  {
    id: 12,
    name: "Vikas Deshmukh",
    age: 29,
    birthTime: "4:45am",
    bloodGroup: "O+ve",
    caste: "Maratha",
    rashi: "Vrushabh",
    height: "5ft 8in",
    city: "Amravati",
    area: "Gopal Nagar",
    mobileNo: "+918765432101",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFgFRUivNZJJw6kF3Nxv6fqibiovXM_BiTg&s",
    education: "BE Mechanical",
    occupation: "Mechanical Engineer",
    annualIncome: "10 LPA",
    motherName: "Madhavi Deshmukh",
    fatherName: "Ashok Deshmukh",
  },
  {
    id: 13,
    name: "Kunal Jadhav",
    age: 27,
    birthTime: "5:15am",
    bloodGroup: "A+ve",
    caste: "Maratha",
    rashi: "Makar",
    height: "6ft",
    city: "Akola",
    area: "Tilak Road",
    mobileNo: "+917876543210",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR78PRLIjGxzCAl4RCz7URy4aLTVi7SuAmMw&s",
    education: "CA",
    occupation: "Chartered Accountant",
    annualIncome: "14 LPA",
    motherName: "Sunita Jadhav",
    fatherName: "Rajendra Jadhav",
  },
  {
    id: 14,
    name: "Prashant Shinde",
    age: 30,
    birthTime: "7:00am",
    bloodGroup: "AB+ve",
    caste: "Maratha",
    rashi: "Meen",
    height: "5ft 11in",
    city: "Nagpur",
    area: "Civil Lines",
    mobileNo: "+918754321098",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLECGY_FMGBfv8UA51uTX2tNvWKp955QDfgg&s",
    education: "MBA Finance",
    occupation: "Bank Manager",
    annualIncome: "14 LPA",
    motherName: "Savita Shinde",
    fatherName: "Ganesh Shinde",
  },
  {
    id: 15,
    name: "Ajay Pawar",
    age: 26,
    birthTime: "3:30pm",
    bloodGroup: "B+ve",
    caste: "Maratha",
    rashi: "Dhanu",
    height: "5ft 7in",
    city: "Akola",
    area: "Ratanlal Plot",
    mobileNo: "+917654321987",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj_izEKjgsmg0_SJog-ojxBlMrUszajt3c8A&s",
    education: "BCom",
    occupation: "Accountant",
    annualIncome: "8 LPA",
    motherName: "Kanchan Pawar",
    fatherName: "Mahesh Pawar",
  },
  {
    id: 16,
    name: "Nilesh Gaikwad",
    age: 28,
    birthTime: "2:00am",
    bloodGroup: "O-ve",
    caste: "Maratha",
    rashi: "Tula",
    height: "5ft 10in",
    city: "Aurangabad",
    area: "Shahgunj",
    mobileNo: "+917856789654",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdyn82-QDQMmkMtaDyzWCBpseg6NFW4fbQTQ&s",
    education: "MTech",
    occupation: "Software Developer",
    annualIncome: "18 LPA",
    motherName: "Vaishali Gaikwad",
    fatherName: "Dilip Gaikwad",
  },
  {
    id: 17,
    name: "Sagar More",
    age: 31,
    birthTime: "8:15am",
    bloodGroup: "A-ve",
    caste: "Maratha",
    rashi: "Kanya",
    height: "5ft 6in",
    city: "Pune",
    area: "Kothrud",
    mobileNo: "+918976543210",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58Fw1WdHitumo4XX8mVCrQ3tXqh1QHFFRYA&s",
    education: "PhD",
    occupation: "Research Scientist",
    annualIncome: "20 LPA",
    motherName: "Neeta More",
    fatherName: "Ganpat More",
  },
  {
    id: 18,
    name: "Rohit Patil",
    age: 25,
    birthTime: "1:45pm",
    bloodGroup: "B+ve",
    caste: "Maratha",
    rashi: "Vrishchik",
    height: "5ft 8in",
    city: "Kolhapur",
    area: "Shivaji Peth",
    mobileNo: "+919876543221",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqfstK2iIEwMImy9tr7XKqGYTGtuUMDLANkr01MXewCiO4zAHrODGBG_Ralrnd4Qs-UB4&usqp=CAU",
    education: "BSc Agriculture",
    occupation: "Agricultural Officer",
    annualIncome: "9 LPA",
    motherName: "Meena Patil",
    fatherName: "Raghunath Patil",
  },
  {
    id: 19,
    name: "Santosh Desai",
    age: 29,
    birthTime: "6:00am",
    bloodGroup: "AB+ve",
    caste: "Maratha",
    rashi: "Simha",
    height: "5ft 9in",
    city: "Mumbai",
    area: "Dadar West",
    mobileNo: "+917654332198",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaI6TEra45AT0NVTI60fkZr_2WDerP1XXbw9rsxaPtcx5i7dqRK8e-TxSaBg13qQ0xc58&usqp=CAU",
    education: "LLB",
    occupation: "Lawyer",
    annualIncome: "16 LPA",
    motherName: "Saroj Desai",
    fatherName: "Vishvas Desai",
  },
  {
    id: 20,
    name: "Amol Kulkarni",
    age: 27,
    birthTime: "5:00pm",
    bloodGroup: "O+ve",
    caste: "Maratha",
    rashi: "Dhanu",
    height: "6ft 1in",
    city: "Solapur",
    area: "Jule Solapur",
    mobileNo: "+918765098765",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzpGYQANCS29qQvds3y5QYCjYE71tRhDR_KhgJ2fXCTNMEjhhpRBMhAkLYxW8n6E3bX2s&usqp=CAU",
    education: "MSc IT",
    occupation: "Data Scientist",
    annualIncome: "22 LPA",
    motherName: "Rekha Kulkarni",
    fatherName: "Shankar Kulkarni",
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
  <p>Mobile No: {biodata.mobno}</p>
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
