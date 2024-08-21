import { useState } from "react";
import style from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
// import ForgotPassword from '../UserForget/ForgotPassword';
// Assuming the component is in the same directory
import { loginUser } from "../../../../Apis/UserApis/UserAuth/UserAuth.Api";

const Login = () => {
  const navigator = useNavigate();
  // const [showForgotPassword, setShowForgotPassword] = useState(false);

  // const handleForgotPasswordClick = () => {
  //   setShowForgotPassword(true);
  // };

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the registerUser API
    const response = await loginUser({
      email: formValues.email,
      password: formValues.password,
    });

    if (response) {
      navigator("/");
      alert("Login successful!");
    }
  };

  return (
    <div className={style.registerContainer}>
      <h1 className={style.title}>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <Link to={"/forgotpassword"}>
          {/* <p className={style.terms}>
            By Signing Up You Agree To Our <a href="#">Terms And Conditions</a>{" "}
            and <a href="#">Privacy Policy</a>.
          </p> */}
          <div className={style.forgetpassword}>Forgot Password</div>
        </Link>
        <Link to={"/register"}>
          <div className={style.forgetpassword}>
            Are you new user ? Please Register
          </div>
        </Link>
        <button type="submit" className={style.btn}>
          Login
        </button>
      </form>
    </div>

 
  );
};

export default Login;
