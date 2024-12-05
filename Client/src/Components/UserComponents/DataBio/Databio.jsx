import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Databio.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const decryptMobileNumber = (encryptedMobno) => {
    if (encryptedMobno) {
      return atob(encryptedMobno); 
    }
    return ''; 
  };
  


// Assuming dummyData is available or imported
const dummyData = [
  {
    id: 1,
    name: "John Doe",
    age: "30",
    bloodgroup:"B+ve",
    caste:"Maratha",
    city: "New York",
    area: "Manhattan",
    height: "6ft",
    mobno: btoa("+917744875601"),
    imgSrc: "https://cdn0.weddingwire.in/article/3713/3_2/1280/jpg/63173-marriage-images-rituals-wedding-photography-lead-image.webp",
    education: "MBA",
    occupation: "Software Engineer",
    motherName: "Jane Doe",
    fatherName: "Richard Doe",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: "28",
    bloodgroup:"A+ve",
    caste:"Jain",
    city: "Los Angeles",
    area: "Hollywood",
    height: "5ft 7in",
    mobno: btoa("+918734676522"),
    imgSrc: "https://wedding-photography.in/images/videography-photography/traditional-wedding-photography-photography1s.jpg",
    education: "Bachelors in Arts",
    occupation: "Artist",
    motherName: "Emily Smith",
    fatherName: "Tom Smith",
  },

  {
    id: 3,
    name: "Jane Smith",
    age: "28",
    bloodgroup:"AB+ve",
    caste:"Maratha Kunabi",
    city: "Los Angeles",
    area: "Hollywood",
    height: "5ft 7in",
    mobno: btoa("+918734676522"),
    imgSrc: "https://wedding-photography.in/images/videography-photography/traditional-wedding-photography-photography1s.jpg",
    education: "Bachelors in Arts",
    occupation: "Artist",
    motherName: "Emily Smith",
    fatherName: "Tom Smith",
  },

  {
    id: 4,
    name: "Jane Smith",
    age: "28",
    bloodgroup:"O+ve",
    caste:"Marwadi Jain",
    city: "Los Angeles",
    area: "Hollywood",
    height: "5ft 7in",
    mobno: btoa("+918734676522"),
    imgSrc: "https://wedding-photography.in/images/videography-photography/traditional-wedding-photography-photography1s.jpg",
    education: "Bachelors in Arts",
    occupation: "Artist",
    motherName: "Emily Smith",
    fatherName: "Tom Smith",
  },
  
];

function BiodataPage() {
  const { id } = useParams(); 
  const [biodata, setBiodata] = useState(null);

  useEffect(() => {
    const selectedBiodata = dummyData.find((data) => data.id === parseInt(id));
    setBiodata(selectedBiodata);
  }, [id]);

  if (!biodata) return <div>Loading...</div>;

  return (
    <div className={style.biodataContainer}>
      <div className={style.biodataCard}>
        <img src={biodata.imgSrc} alt={biodata.name} className={style.biodataImg} />
        <div className={style.biodataInfo}>
        <h2>
           
            {biodata.name}
            <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green", marginRight: "8px" }} />
          </h2>
         
          
          <p>Age: {biodata.age}</p>
          <p>Blood Group: {biodata.bloodgroup}</p>
          <p>Caste: {biodata.caste}</p>
          <p>Height: {biodata.height}</p>
          <p>City: {biodata.city}</p>
          <p>Area: {biodata.area}</p>
          <p>Mobile No: {decryptMobileNumber(biodata.mobno)}</p> {/* Decrypt mob no */}
          <p>Education: {biodata.education}</p>
          <p>Occupation: {biodata.occupation}</p>
          <p>Mother's Name: {biodata.motherName}</p>
          <p>Father's Name: {biodata.fatherName}</p>
        </div>
      </div>
    </div>
  );
}

export default BiodataPage;
