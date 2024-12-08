import style from "./BriedCard.module.css";
import { Link } from "react-router-dom";
import Ufilter from "../../UserComponents/Ufilter/Ufilter";
import Image1 from "./Bimages/img1.png"
import Image2 from "./Bimages/img2.png"
import Image3 from "./Bimages/img3.png"
import Image4 from "./Bimages/img4.png"
import Image5 from "./Bimages/img5.png"
import Image6 from "./Bimages/img6.png"
import Image7 from "./Bimages/img7.png"
import Image8 from "./Bimages/img8.png"
import Image9 from "./Bimages/img9.png"
import Image10 from "./Bimages/img10.png"

const encryptMobileNumber = (mobno) => {
  if (!mobno || typeof mobno !== "string") {
    return "Unavailable"; // Fallback for missing or invalid numbers
  }

  const firstPart = mobno.slice(0, -6);
  const lastPart = mobno.slice(-6);

  return `${firstPart}XXXXXX`; // Mask the last 6 digits with X
};


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
      mobileNo: +919865432178,
      education: "MCom",
      occupation: "Professor",
      annualIncome: "6 LPA",
      motherName: "Sandhya Kulkarni",
      fatherName: "Prakash Kulkarni",
      imgSrc: Image1,
    },
   
   

  {
    id: 2,
    name: "Jane Smith",
    age: "28",
    city: "Los Angeles",
    area: "Hollywood",
    height: "5ft 7in",
    mobno: "+918734676522",
    imgSrc: Image2,
    education: "Bachelors in Arts",
    occupation: "Artist",
    motherName: "Emily Smith",
    fatherName: "Tom Smith",
  },
  {
    id: 3,
    name: "Jane Smith",
    age: "28",
    city: "Los Angeles",
    area: "Hollywood",
    height: "5ft 7in",
    mobno: "+918734676522",
    imgSrc: Image3,
    education: "Bachelors in Arts",
    occupation: "Artist",
    motherName: "Emily Smith",
    fatherName: "Tom Smith",
  },
  {
    id: 4,
    name: "Jane Smith",
    age: "28",
    city: "Los Angeles",
    area: "Hollywood",
    height: "5ft 7in",
    mobno: "+918734676522",
    imgSrc: Image4,
    education: "Bachelors in Arts",
    occupation: "Artist",
    motherName: "Emily Smith",
    fatherName: "Tom Smith",
  },
  
  {
    id: 5,
    name: "Jane Smith",
    age: "28",
    city: "Los Angeles",
    area: "Hollywood",
    height: "5ft 7in",
    mobno: "+918734676522",
    imgSrc: Image5,
    education: "Bachelors in Arts",
    occupation: "Artist",
    motherName: "Emily Smith",
    fatherName: "Tom Smith",
  },
  {
    id: 6,
    name: "Jane Smith",
    age: "28",
    city: "Los Angeles",
    area: "Hollywood",
    height: "5ft 7in",
    mobno: "+918734676522",
    imgSrc: Image6,
    education: "Bachelors in Arts",
    occupation: "Artist",
    motherName: "Emily Smith",
    fatherName: "Tom Smith",
  },
  {
    id: 7,
    name: "Jane Smith",
    age: "28",
    city: "Los Angeles",
    area: "Hollywood",
    height: "5ft 7in",
    mobno: "+918734676522",
    imgSrc: Image7,
    education: "Bachelors in Arts",
    occupation: "Artist",
    motherName: "Emily Smith",
    fatherName: "Tom Smith",
  },
  {
    id: 8,
    name: "Jane Smith",
    age: "28",
    city: "Los Angeles",
    area: "Hollywood",
    height: "5ft 7in",
    mobno: "+918734676522",
    imgSrc: Image8,
    education: "Bachelors in Arts",
    occupation: "Artist",
    motherName: "Emily Smith",
    fatherName: "Tom Smith",
  },
  {
    id: 9,
    name: "Jane Smith",
    age: "28",
    city: "Los Angeles",
    area: "Hollywood",
    height: "5ft 7in",
    mobno: "+918734676522",
    imgSrc: Image9,
    education: "Bachelors in Arts",
    occupation: "Artist",
    motherName: "Emily Smith",
    fatherName: "Tom Smith",
  },
  {
    id: 10,
      name: "Priya Kulkarni",
      age: 25,
      birthTime: "3:00pm",
      BloodGroup: "B+ve",
      caste: "Maratha",
      rashi: "Tula",
      height: "5ft 4in",
      city: "Akola",
      area: "Jatharpeth",
      mobileNo: "+919865432178",
      education: "MCom",
      occupation: "Professor",
      annualIncome: "6 LPA",
      motherName: "Sandhya Kulkarni",
      fatherName: "Prakash Kulkarni",
      imgSrc: Image10,
  },

];

function BriedCard() {
  return (
    <div className={style.biodataContainer}>
      <Ufilter />

      <div className={style.BriedCardinfo}>
        {dummyData.map((data) => (
          <Link to={`/biodata/${data.id}`} key={data.id} className={style.cardLink}>
            <div className={style.card}>
              <div className={style.imgCard}>
                <img
                  src={data.imgSrc}
                  alt={data.name}
                  style={{ height: "250px", width: "285px", borderRadius: "20px", padding: "16px" }}
                />
              </div>
              <div className={style.cardinfo}>
                <p>Name: {data.name}</p>
                <p>Age: {data.age}</p>
                
                <p>City: {data.city}</p>
                <p>Area: {data.area}</p>
                <p>Height: {data.height}</p>
                <p>Mob No: {encryptMobileNumber(data.mobno)}</p> {/* Display encrypted mob no */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BriedCard;
