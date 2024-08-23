import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import styles from "./BriedCard.module.css";
import { getAllUserProfiles } from "../../../Apis/UserApis/DetailsApis/Deatils.Api";

function BriedCard() {
  const [users, setUsers] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getAllUserProfiles();
      if (userData) {
        setUsers(userData);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className={styles.biodataContainer}>
      <h2>Biodata</h2>
      <div className={styles.alldata}>
        {users.map((user) => (
          <div key={user._id} className={styles.info}>
            <div className={styles.dataimg}>
              <img
                src={user.imageUrl}
                alt={`${user.firstname} ${user.middlename || ""} ${
                  user.lastname
                }`}
              />
            </div>
            <div className={styles.personData}>
              <h3>{`${user.firstname} ${user.middlename || ""} ${
                user.lastname
              }`}</h3>
              <p>
                <strong>Gender:</strong> {user.gender}
              </p>
              <p>
                <strong>Date of Birth:</strong> {user.birthDate}
              </p>
              {/* <p>
                <strong>Email:</strong> {user.email}
              </p> */}
              <p>
                <strong>height:</strong> {user.height}
              </p>

              <p>
                <strong>maritalStatus:</strong> {user.maritalStatus}
              </p>

              <p>
                <strong>Birth Place:</strong> {user.birthPlace}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BriedCard;
