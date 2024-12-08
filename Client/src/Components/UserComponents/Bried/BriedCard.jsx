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

// const encryptMobileNumber = (mobileNo) => {
//   if (!mobileNo || typeof mobileNo !== "string") {
//     return "Unavailable"; // Fallback for missing or invalid numbers
//   }

//   const firstPart = mobileNo.slice(0, -6);
//   const lastPart = mobileNo.slice(-6);

//   return `${firstPart}XXXXXX`; // Mask the last 6 digits with X
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
      mobileNo: "+919865432178",
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
    mobileNo: "+918765432109",
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
    name: "Snehal Jadhav",
    age: 23,
    birthTime: "11:00am",
    bloodGroup: "A+ve",
    caste: "Maratha",
    rashi: "Vrushabh",
    height: "5ft 5in",
    city: "Akola",
    area: "Ranpise Nagar",
    mobileNo: "+917123456789",
    education: "BPharm",
    occupation: "Pharmacist",
    annualIncome: "7 LPA",
    motherName: "Usha Jadhav",
    fatherName: "Mohan Jadhav",
    mobno: "+918734676522",
    imgSrc: Image3,
   
  },
  {
    id: 4,
    name: "Aishwarya Patil",
    age: 24,
    birthTime: "4:00pm",
    bloodGroup: "AB-ve",
    caste: "Maratha",
    rashi: "Meen",
    height: "5ft 3in",
    mobno: "+918734676522",
    city: "Nagpur",
    area: "Shankar Nagar",
    mobileNo: "+918734567210",
    education: "MBA Marketing",
    occupation: "HR Manager",
    annualIncome: "12 LPA",
    motherName: "Sarita Patil",
    fatherName: "Ramesh Patil",
  
  imgSrc: Image4,
 
  },
  
  {
    id: 5,
    name: "Aishwarya Patil",
      age: 24,
      birthTime: "4:00pm",
      bloodGroup: "AB-ve",
      caste: "Maratha",
      rashi: "Meen",
      height: "5ft 3in",
      mobno: "+918734676522",
      city: "Nagpur",
      area: "Shankar Nagar",
      mobileNo: "+918734567210",
      education: "MBA Marketing",
      occupation: "HR Manager",
      annualIncome: "12 LPA",
      motherName: "Sarita Patil",
      fatherName: "Ramesh Patil",
    
    imgSrc: Image5,
   
  },
  {
    id: 6,
    name: "Komal Shinde",
      age: 22,
      birthTime: "2:15pm",
      bloodGroup: "B-ve",
      caste: "Maratha",
      rashi: "Kumbh",
      height: "5ft 2in",
      mobno: "+918734676522",
      city: "Akola",
      area: "Murtizapur Road",
      mobileNo: "+917654123098",
      education: "BBA",
      occupation: "Business Analyst",
      annualIncome: "10 LPA",
      motherName: "Rekha Shinde",
      fatherName: "Suresh Shinde",
       imgSrc: Image6,
  },
  {
    id: 7,
    name: "Komal Shinde",
    age: 22,
    birthTime: "2:15pm",
    bloodGroup: "B-ve",
    caste: "Maratha",
    rashi: "Kumbh",
    height: "5ft 2in",
    mobno: "+918734676522",
    city: "Akola",
    area: "Murtizapur Road",
    mobileNo: "+917654123098",
    education: "BBA",
    occupation: "Business Analyst",
    annualIncome: "10 LPA",
    motherName: "Rekha Shinde",
    fatherName: "Suresh Shinde",
     imgSrc: Image7,
  },
  {
    id: 8,
    name: "Komal Shinde",
    age: 22,
    birthTime: "2:15pm",
    bloodGroup: "B-ve",
    caste: "Maratha",
    rashi: "Kumbh",
    height: "5ft 2in",
    mobno: "+918734676522",
    city: "Akola",
    area: "Murtizapur Road",
    mobileNo: "+917654123098",
    education: "BBA",
    occupation: "Business Analyst",
    annualIncome: "10 LPA",
    motherName: "Rekha Shinde",
    fatherName: "Suresh Shinde",
     imgSrc: Image8,
  },
  {
    id: 9,
    name: "Komal Shinde",
      age: 22,
      birthTime: "2:15pm",
      bloodGroup: "B-ve",
      caste: "Maratha",
      rashi: "Kumbh",
      height: "5ft 2in",
      mobno: "+918734676522",
      city: "Akola",
      area: "Murtizapur Road",
      mobileNo: "+917654123098",
      education: "BBA",
      occupation: "Business Analyst",
      annualIncome: "10 LPA",
      motherName: "Rekha Shinde",
      fatherName: "Suresh Shinde",
       imgSrc: Image9,
  },
  {
    id: 10,
    name: "Komal Shinde",
    age: 22,
    birthTime: "2:15pm",
    bloodGroup: "B-ve",
    caste: "Maratha",
    rashi: "Kumbh",
    height: "5ft 2in",
    mobno: "+918734676522",
    city: "Akola",
    area: "Murtizapur Road",
    mobileNo: "+917654123098",
    education: "BBA",
    occupation: "Business Analyst",
    annualIncome: "10 LPA",
    motherName: "Rekha Shinde",
    fatherName: "Suresh Shinde",
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
                <p>Mob No: {data.mobileNo}</p> {/* Display encrypted mob no */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BriedCard;
