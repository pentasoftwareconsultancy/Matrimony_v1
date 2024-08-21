// import  from 'react';
import { Link } from 'react-router-dom';
import style from './ForgotPassword.module.css';

const ForgotPassword = () => {
 

  return (
    <div className={style.registerContainer}>
      <h1 className={style.title}>Forgot Password</h1>
      <form 
      // onSubmit={handleSubmit}
      >
        <div className={style.inputContainer}>
          <input
            className={style.input}
            type="email"
            placeholder=" "
            name="email"
            // value={formValues.email}
            // onChange={handleChange}
          />
          <div className={style.textfield}>Enter your Email</div>
        </div>
      
        <Link to={"/register"}>
          <div className={style.forgetpassword}>
            Are you new user ? Please Register
          </div>
        </Link>
        <button type="submit" className={style.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
