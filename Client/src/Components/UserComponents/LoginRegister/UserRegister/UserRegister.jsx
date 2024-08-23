

import { useState } from "react";
import style from "./UserRegister.module.css";
import {Link, useNavigate} from  "react-router-dom"
import { registerUser } from "../../../../Apis/UserApis/UserAuth/UserAuth.Api"; 

function UserRegister() {
  const navigator =useNavigate()
  // State to manage form input values
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formValues.password !== formValues.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Call the registerUser API
    const response = await registerUser({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
    });

    if (response) {
      navigator("/login")
      alert("Registration successful!");
      // Redirect or reset form as needed
    }
  };

  return (
    <div className={style.registerContainer}>
      <h1 className={style.title}>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.inputContainer}>
          <input
          className={style.input}
            type="text"
            placeholder=" "
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
          <div className={style.textfield}>Enter your Name</div>
        </div>
        <div className={style.inputContainer}>
          <input
          className={style.input}
            type="email"
            placeholder=" "
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <div className={style.textfield}>Enter your Email</div>
        </div>
        <div className={style.inputContainer}>
          <input
          className={style.input}
            type="password"
            placeholder=" "
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          <div className={style.textfield}>Enter your Password</div>
        </div>
        <div className={style.inputContainer}>
          <input
          className={style.input}
            type="password"
            placeholder=" "
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
          <div className={style.textfield}>Confirm Password</div>
        </div>
        
        <Link to={"/login"}>
          <div className={style.forgetpassword}>
          Already you have account ? Please Login
          </div>
        </Link>
        <button type="submit" className={style.btn}>
          Submit
        </button>
      </form>
    </div>
  );

}

export default UserRegister
