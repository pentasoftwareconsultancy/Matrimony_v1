import { useState } from "react";
import axios from 'axios';

const PersonalDetails = () => {
  const [file, setFile] = useState();

  const handleUpload = () => {
    console.log(file);
    axios.post("http://localhost:8080/upload")
  };

  return (
    <div>
      <h2>Personal Details</h2>
      <form>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        {/* Add other fields as needed */}
        <button onClick={handleUpload}>Save</button>
      </form>
    </div>
  );
};

export default PersonalDetails;
