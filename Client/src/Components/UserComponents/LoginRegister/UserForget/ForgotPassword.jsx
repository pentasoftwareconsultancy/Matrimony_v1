import React, { useState } from 'react';
import styles from './ForgotPassword.module.css';

const ForgotPassword = () => {
  const [selectedOption, setSelectedOption] = useState('email');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={styles.forgotPasswordContainer}>
      <h2 style={{fontSize:30, color:'#b41147' }}>Forgot Password</h2>
      <form style={{width:'40vh', position:'relative', marginTop:'20px'}}>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              value="email"
              checked={selectedOption === 'email'}
              onChange={handleOptionChange}
            />
            Email
          </label>
          <label>
            <input
              type="radio"
              value="mobile"
              checked={selectedOption === 'mobile'}
              onChange={handleOptionChange}
            />
            Mobile No
          </label>
        </div>
        <div className={styles.inputGroup}>
          <input
            type={selectedOption === 'email' ? 'email' : 'text'}
            placeholder={selectedOption === 'email' ? 'Enter your Email' : 'Enter your Mobile No'}
            required
            className={styles.inputField}
          />
        </div>
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
