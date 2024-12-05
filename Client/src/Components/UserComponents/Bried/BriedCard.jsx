import style from "./BriedCard.module.css";
import { Link } from "react-router-dom";
import Ufilter from "../../UserComponents/Ufilter/Ufilter";

const encryptMobileNumber = (mobno) => {
  // Extracting the first part (first digits) and last part (last 6 digits)
  const firstPart = mobno.slice(0, -6);
  const lastPart = mobno.slice(-6);
  
  // Encrypt the last 6 digits and replace them with 'X'
  const encryptedLastPart = btoa(lastPart); // Base64 encoding the last 6 digits
  const maskedMobno = `${firstPart}XXXXXX`; // Mask the last 6 digits with X

  return maskedMobno; // Return the formatted mobile number with encrypted last 6 digits
};

const dummyData = [
  {
    id: 1,
    name: "John Doe",
    age: "30",
    city: "New York",
    area: "Manhattan",
    height: "6ft",
    mobno: "+917744875601",
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
    city: "Los Angeles",
    area: "Hollywood",
    height: "5ft 7in",
    mobno: "+918734676522",
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
    city: "Los Angeles",
    area: "Hollywood",
    height: "5ft 7in",
    mobno: "+918734676522",
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
    city: "Los Angeles",
    area: "Hollywood",
    height: "5ft 7in",
    mobno: "+918734676522",
    imgSrc: "https://wedding-photography.in/images/videography-photography/traditional-wedding-photography-photography1s.jpg",
    education: "Bachelors in Arts",
    occupation: "Artist",
    motherName: "Emily Smith",
    fatherName: "Tom Smith",
  },
  // ... more data
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
