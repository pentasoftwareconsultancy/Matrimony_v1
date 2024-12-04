import React, { useState } from "react";
import styles from "./Ufilter.module.css";

function Ufilter() {
  const [filters, setFilters] = useState({
    gender: "",
    maritalStatus: "",
    caste: "",
    minHeight: "",
    maxHeight: "",
    education: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    console.log("Applied Filters:", filters);
    
  };

  return (
    <div className={styles.searchContainer}>
      <h2 className={styles.title}>Filter Results</h2>
      <div className={styles.formContainer}>
        <select
          name="gender"
          className={styles.select}
          value={filters.gender}
          onChange={handleChange}
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select
          name="maritalStatus"
          className={styles.select}
          value={filters.maritalStatus}
          onChange={handleChange}
        >
          <option value="">Marital Status</option>
          <option value="unmarried">Unmarried</option>
          <option value="separated">Separated</option>
          <option value="widowed">Widowed</option>
        </select>

        <select
          name="caste"
          className={styles.select}
          value={filters.caste}
          onChange={handleChange}
        >
          <option value="">Caste</option>
          <option value="maratha">Maratha</option>
          <option value="jain">Jain</option>
        </select>

        <select
          name="minHeight"
          className={styles.select}
          value={filters.minHeight}
          onChange={handleChange}
        >
          <option value="">Minimum Height</option>
          <option value="4.6">4.6</option>
          <option value="4.8">4.8</option>
        </select>

        <select
          name="maxHeight"
          className={styles.select}
          value={filters.maxHeight}
          onChange={handleChange}
        >
          <option value="">Maximum Height</option>
          <option value="5.10">5.10</option>
          <option value="5.11">5.11</option>
        </select>

        <select
          name="education"
          className={styles.select}
          value={filters.education}
          onChange={handleChange}
        >
          <option value="">Expected Education</option>
          <option value="bachelor">Bachelor's</option>
          <option value="master">Master's</option>
          <option value="master">Graduate</option>
          
        </select>

        <input
          type="text"
          name="location"
          className={styles.input}
          placeholder="Location"
          value={filters.location}
          onChange={handleChange}
        />

        <button className={styles.button} onClick={applyFilters}>
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default Ufilter;
