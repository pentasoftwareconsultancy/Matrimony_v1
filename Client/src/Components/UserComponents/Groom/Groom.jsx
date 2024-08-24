import style from "./Groom.module.css";
import Search from "../../CommonComponents/SearchBar/Search";

const dummyData = [
  {
    id: 1,
    name: "John Doe",
    age: "30",
    city: "New York",
    area: "Manhattan",
    height: "6ft",
    imgSrc:
      "https://cdn0.weddingwire.in/article/3713/3_2/1280/jpg/63173-marriage-images-rituals-wedding-photography-lead-image.webp", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Jane Smith",
    age: "28",
    city: "Los Angeles",
    area: "Hollywood",
    height: "5ft 7in",
    imgSrc: "https://wedding-photography.in/images/videography-photography/traditional-wedding-photography-photography1s.jpg", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: "35",
    city: "Chicago",
    area: "Downtown",
    height: "5ft 10in",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5d9Xp_vb56jJyEu4SORgFhCDe2VdKYsx7VYqXIP-ojgDmvzihtdrb1O-iFHWv5y5qYl0&usqp=CAU", // Replace with actual image URL
  },
  {
    id: 4,
    name: "Emily Davis",
    age: "25",
    city: "Miami",
    area: "South Beach",
    height: "5ft 6in",
    imgSrc: "data:image/jpeg;base64,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", // Replace with actual image URL
  },
];

function Groom() {
  return (
    <div className={style.biodataContainer}>
      <Search />

      <div className={style.BriedCardinfo}>
        {dummyData.map((data) => (
          <div className={style.BriedCard} key={data.id}>
            <div className={style.card}>
              <div className={style.imgCard}>
                <img
                  src={data.imgSrc}
                  alt={data.name}
                  style={{ height: "250px", width: "185px", borderRadius:"10px" }}
                />
              </div>
              <div className={style.cardinfo}>
                <p>Name: {data.name}</p>
                <p>Age: {data.age}</p>
                <p>City: {data.city}</p>
                <p>Area: {data.area}</p>
                <p>Height: {data.height}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Groom;
