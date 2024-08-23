import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.imageLeft}>
        <img src="src/assets/images/pink-dress4.jpg" alt="Left Illustration" />
      </div> */}
      <div className={styles.formContainer}>
        <div className={styles.formSection}>
          <h2 style={{color:'#db2a73', fontSize:'2.3rem'}}>Contact us</h2>
          <p className={styles.Contactp}>
            Get in touch and ask us anything. The difference between bookkeeping
            and accounting, can you start a company from Madagascar, which
            business literature our CEO prefers – we answer it all.
          </p>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Your name" className={styles.input} required />
              <input type="email" placeholder="Email address" className={styles.input} required />
            </div>
            <div className={styles.inputGroup}>
              <input type="tel" placeholder="+91 0000000000" className={styles.input} required />
              <select className={styles.select} required>
                <option>Interested in</option>
                <option>Accounting</option>
                <option>Bookkeeping</option>
                <option>Consultation</option>
              </select>
            </div>
            <textarea className={styles.textarea} placeholder="How can we help?" rows="4" required></textarea>
            <button type="submit" className={styles.submitButton}>Send your message</button>
          </form>
          <p className={styles.terms}>
            By clicking, you agree to our <a href="#">Terms & Conditions</a>,<br/>
            <a href="#"> Privacy & Data Protection Policy</a>.
          </p>
        </div>
      </div>
      {/* <div className={styles.imageRight}>
        <img src="src/assets/images/pink-dress4.jpg" alt="Right Illustration" />
      </div> */}
    </div>
  );
};

export default ContactForm;
