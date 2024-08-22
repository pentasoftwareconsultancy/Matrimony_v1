/* eslint-disable react/no-unescaped-entities */

import styles from './UserRegister.module.css';

const UserRegister = () => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.heading}>Create Account</h2>
      <form>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" className={styles.input}  placeholder='Enter your full name'/>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">E-Mail</label>
          <input type="email" id="email" className={styles.input} placeholder="Verification e-mail will be sent" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="password">Password</label>
          <input type="password" id="password" className={styles.input} placeholder="Minimum length of 6 or more characters" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" className={styles.input} />
        </div>

        <button type="button" className={styles.verifyButton}>Verify email address</button>
      </form>

      <div className={styles.divider}>
        <span>or</span>
      </div>

      <div className={styles.socialLogin}>
        <button className={styles.smsLogin}>Log in with SMS</button>
        <button className={styles.googleLogin}>Log in with Google</button>
        <button className={styles.facebookLogin}>Log in with Facebook</button>
      </div>
    </div>
  );
};

export default UserRegister;
