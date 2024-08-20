import React, { useState } from 'react';
import styles from './Login.module.css';
import ForgotPassword from '../UserForget/ForgotPassword';
// Assuming the component is in the same directory

const Login = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  return (
    <div className={styles.loginContainer}>
      {showForgotPassword ? (
      <ForgotPassword/>
      ) : (
        <div className={styles.loginForm}>
          <h2>Login</h2>
          <form>
            <div className={styles.inputGroup}>
              <input
                type="email"
                id="email"
                placeholder="Email Id*"
                required
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="password"
                id="password"
                placeholder="Password*"
                required
                className={styles.inputField}
              />
            </div>
            <button type="submit" className={styles.continueBtn}>
              Continue
            </button>
            <a
              href="#"
              className={styles.forgotPassword}
              onClick={handleForgotPasswordClick}
            >
              Forgot Password?
            </a>
            <p className={styles.terms}>
              By Signing Up You Agree To Our{' '}
              <a href="#">Terms And Conditions</a> and{' '}
              <a href="#">Privacy Policy</a>.
            </p>
          </form>
          <p className={styles.register}>
            Do Not Have An Account? <a href="#">Register</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
