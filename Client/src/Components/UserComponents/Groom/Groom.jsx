import style from "./Groom.module.css";
import { Link } from "react-router-dom";
import Ufilter from "../../UserComponents/Ufilter/Ufilter";

// const encryptMobileNumber = (mobno) => {
//   // Extracting the first part (first digits) and last part (last 6 digits)
//   const firstPart = mobno.slice(0, -6);
//   const lastPart = mobno.slice(-6);
  
//   // Encrypt the last 6 digits and replace them with 'X'
//   const encryptedLastPart = btoa(lastPart); // Base64 encoding the last 6 digits
//   const maskedMobno = `${firstPart}XXXXXX`; // Mask the last 6 digits with X

//   return maskedMobno; // Return the formatted mobile number with encrypted last 6 digits
// };

const dummyData = [
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

function Groom() {
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

export default Groom;
