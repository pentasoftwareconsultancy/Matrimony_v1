import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styles from './Filter.module.css';


function Filter() {
    return (
<div className={styles.registrationFormWrapper}>
<form className={styles.registrationForm}>
  <div className={styles.inputWrapper}>
    <label htmlFor="profileID" className={styles.label}>Profile ID</label>
    <input 
      type="text" 
      id="profileID" 
      placeholder="Enter Profile ID" 
      className={styles.inputField} 
    />
  </div>

  <div className={styles.inputWrapper}>
    <label htmlFor="ageGroup" className={styles.label}>Age Group</label>
    <select id="ageGroup" className={styles.selectField}>
      <option value="" disabled selected>Select Age Group</option>
      <option value="21-25">21 to 25</option>
      <option value="26-35">26 to 35</option>
      <option value="36-45">36 to 45</option>
      <option value="46-50">46 to 50</option>
    </select>
  </div>

  <div className={styles.inputWrapper}>
    <label htmlFor="cast" className={styles.label}>Cast</label>
    <select id="cast" className={styles.selectField}>
      <option value="" disabled selected>Choose Cast</option>
      <option value="bramhin">Bramhin</option>
      <option value="maratha">Maratha</option>
      <option value="jain">Jain</option>
      <option value="c.k.p">C.K.P</option>
      <option value="other">Other</option>
    </select>
  </div>

  <div className={styles.inputWrapper}>
    <label htmlFor="profileFor" className={styles.label}>Profile for</label>
    <select id="profileFor" className={styles.selectField}>
      <option value="" disabled selected>Select Profile For</option>
      <option value="self">Self</option>
      <option value="son">Son</option>
      <option value="daughter">Daughter</option>
      <option value="sibling">Sibling</option>
    </select>
  </div>

  <Link to="/register">
    <Button 
      variant="primary" 
      className={`btn-hover ${styles.registerButton}`} 
      style={{ backgroundColor: 'rgb(255, 0, 102)', padding: '10px 20px', border: '1px solid rgb(255, 0, 102)' }}
    >
      Register
    </Button>
  </Link>
</form>
</div>
    );
}
export default Filter;