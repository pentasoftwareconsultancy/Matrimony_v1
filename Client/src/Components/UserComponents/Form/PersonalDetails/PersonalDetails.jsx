import { useState } from "react";
import axios from "axios";
import style from "./PersonalDetails.module.css";

const PersonalDetails = () => {
  const [file, setFile] = useState();
  // const [image,setImage]=useState()
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(`You selected: ${selectedOption}`);
  // };

  const handleUpload = () => {
    const formdata = new FormData();
    formdata.append("file", file);
    console.log(file);
    axios
      .post("http://localhost:8080/upload", formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // useEffect(()=>{
  //   // const formdata=new FormData()
  //   // formdata.append("file",file)
  //   console.log(file);
  //   axios.get("http://localhost:8080/getImage")
  //   .then(res=>setImage(res.data[0].image))
  //   .catch(err=>console.log(err))
  // })
  return (
    <div>
      <h2>Personal Details</h2>
      <form>
        <div className={style.formContainer}>
          <div className={style.inputContainer}>
            <input
              className={style.input}
              type="text"
              placeholder=" "
              name="email"
              // value={formValues.email}
              // onChange={handleChange}
            />
            <div className={style.textfield}>Enter First Name</div>
          </div>

          <div className={style.inputContainer}>
            <input
              className={style.input}
              type="email"
              placeholder=" "
              name="email"
              // value={formValues.email}
              // onChange={handleChange}
            />
            <div className={style.textfield}>Enter Middel Name</div>
          </div>

          <div className={style.inputContainer}>
            <input
              className={style.input}
              type="email"
              placeholder=" "
              name="email"
              // value={formValues.email}
              // onChange={handleChange}
            />
            <div className={style.textfield}>Enter Last Name</div>
          </div>
          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Marital Status</option>
              <option value="male">Unmarried</option>
              <option value="female">Divorcee</option>
              <option value="female">Widow/Widower</option>
              <option value="female">Separated</option>
            </select>
          </div>
          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Blood Group</option>
              <option value="male">Unmarried</option>
              <option value="female">Divorcee</option>
              <option value="female">Widow/Widower</option>
              <option value="female">Separated</option>
            </select>
          </div>
          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Body Type</option>
              <option value="male">Unmarried</option>
              <option value="female">Divorcee</option>
              <option value="female">Widow/Widower</option>
              <option value="female">Separated</option>
            </select>
          </div>
          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Registration By</option>
              <option value="male">Unmarried</option>
              <option value="female">Divorcee</option>
              <option value="female">Widow/Widower</option>
              <option value="female">Separated</option>
            </select>
          </div>
          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Complexion</option>
              <option value="male">Unmarried</option>
              <option value="female">Divorcee</option>
              <option value="female">Widow/Widower</option>
              <option value="female">Separated</option>
            </select>
          </div>
          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Birth Date</option>
              <option value="male">Unmarried</option>
              <option value="female">Divorcee</option>
              <option value="female">Widow/Widower</option>
              <option value="female">Separated</option>
            </select>
          </div>
          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Height</option>
              <option value="male">Unmarried</option>
              <option value="female">Divorcee</option>
              <option value="female">Widow/Widower</option>
              <option value="female">Separated</option>
            </select>
          </div>
          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Weight</option>
              <option value="male">Unmarried</option>
              <option value="female">Divorcee</option>
              <option value="female">Widow/Widower</option>
              <option value="female">Separated</option>
            </select>
          </div>

          <div className={style.radioButtonGroup}>
            <span className={style.title}>Indulgence</span>

            <div>
              <label>
                <input
                  className={style.radioButton}
                  type="radio"
                  value="yes"
                  checked={selectedOption === "yes"}
                  onChange={handleOptionChange}
                />
                Yes
              </label>
            </div>
            <div>
              <label>
                <input
                  className={style.radioButton}
                  type="radio"
                  value="no"
                  checked={selectedOption === "no"}
                  onChange={handleOptionChange}
                />
                No
              </label>
            </div>
          </div>

          <div className={style.radioButtonGroup}>
            <span className={style.title}>Specs/Lenses</span>

            <div>
              <label>
                <input
                  className={style.radioButton}
                  type="radio"
                  value="yes"
                  checked={selectedOption === "yes"}
                  onChange={handleOptionChange}
                />
                Yes
              </label>
            </div>
            <div>
              <label>
                <input
                  className={style.radioButton}
                  type="radio"
                  value="no"
                  checked={selectedOption === "no"}
                  onChange={handleOptionChange}
                />
                No
              </label>
            </div>
          </div>

          <div className={style.radioButtonGroup}>
            <span className={style.title}>Disabilities</span>

            <div>
              <label>
                <input
                  className={style.radioButton}
                  type="radio"
                  value="yes"
                  checked={selectedOption === "yes"}
                  onChange={handleOptionChange}
                />
                Yes
              </label>
            </div>
            <div>
              <label>
                <input
                  className={style.radioButton}
                  type="radio"
                  value="no"
                  checked={selectedOption === "no"}
                  onChange={handleOptionChange}
                />
                No
              </label>
            </div>
          </div>
          <div className={style.inputContainer}>
            <input
              className={style.input}
              type="text"
              placeholder=" "
              name="email"
              // value={formValues.email}
              // onChange={handleChange}
            />
            <div className={style.textfield}>Enter Education</div>
          </div>
          <div className={style.inputContainer}>
            <input
              className={style.input}
              type="text"
              placeholder=" "
              name="email"
              // value={formValues.email}
              // onChange={handleChange}
            />
            <div className={style.textfield}>Enter Occupation</div>
          </div>
          <div className={style.inputContainer}>
            <input
              className={style.input}
              type="text"
              placeholder=" "
              name="email"
              // value={formValues.email}
              // onChange={handleChange}
            />
            <div className={style.textfield}>Annual Income</div>
          </div>
          <div className={style.inputContainer}>
            <input
              className={style.input}
              type="text"
              placeholder=" "
              name="email"
              // value={formValues.email}
              // onChange={handleChange}
            />
            <div className={style.textfield}>Annual Income</div>
          </div>

          
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />

          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Caste</option>
              <option value="male">Unmarried</option>
              <option value="female">Divorcee</option>
              <option value="female">Widow/Widower</option>
              <option value="female">Separated</option>
            </select>
          </div>
        </div>
        
        <button onClick={handleUpload}>Save</button>
        {/* Add other fields as needed */}

        <br />
        {/* <img src={`http://localhost:8080/`+image} alt=""/> */}
      </form>
    </div>
  );
};

export default PersonalDetails;
