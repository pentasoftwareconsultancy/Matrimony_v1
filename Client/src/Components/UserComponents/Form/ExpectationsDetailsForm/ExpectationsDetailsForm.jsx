import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './ExpectationsDetailsForm.module.css'; // Importing CSS Module

function ExpectationsDetailsForm() {
  const [formData, setFormData] = useState({
    minIncome: '',
    openForInterCaste: '',
    educationExpectations: '',
    maritalStatus: '',
    minHeight: '',
    maxHeight: '',
    minAge: '',
    maxAge: '',
    casteExpectations: '',
    preferredCities: [],
    aboutYourself: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCityChange = (city, isChecked) => {
    if (isChecked) {
      setFormData(prevData => ({
        ...prevData,
        preferredCities: [...prevData.preferredCities, city]
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        preferredCities: prevData.preferredCities.filter(c => c !== city)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/biodatapage', { state: { formData } }); // Pass formData to BiodataPage
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Expectations Details</h2>

      <label className={styles.label}>
        Minimum Annual Income:
        <input
          type="text"
          name="minIncome"
          value={formData.minIncome}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Open for Inter-Caste Marriage:
        <input
          type="radio"
          name="openForInterCaste"
          value="Yes"
          onChange={handleChange}
          checked={formData.openForInterCaste === 'Yes'}
          className={styles.radio}
        /> Yes
        <input
          type="radio"
          name="openForInterCaste"
          value="No"
          onChange={handleChange}
          checked={formData.openForInterCaste === 'No'}
          className={styles.radio}
        /> No
      </label>

      <label className={styles.label}>
        Education Expectations:
        <select
          name="educationExpectations"
          value={formData.educationExpectations}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select</option>
          <option value="High School">High School</option>
          <option value="Bachelor's">Bachelor's</option>
          <option value="Master's">Master's</option>
          <option value="Doctorate">Doctorate</option>
          {/* Add more options as needed */}
        </select>
      </label>

      <label className={styles.label}>
        Marital Status:
        <select
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Select</option>
          <option value="Single">Single</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
          {/* Add more options as needed */}
        </select>
      </label>

      <label className={styles.label}>
        Minimum Height (cm):
        <input
          type="number"
          name="minHeight"
          value={formData.minHeight}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Maximum Height (cm):
        <input
          type="number"
          name="maxHeight"
          value={formData.maxHeight}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Minimum Age:
        <input
          type="number"
          name="minAge"
          value={formData.minAge}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Maximum Age:
        <input
          type="number"
          name="maxAge"
          value={formData.maxAge}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Caste Expectations:
        <input
          type="text"
          name="casteExpectations"
          value={formData.casteExpectations}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Preferred Cities:</legend>
        {['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'].map((city) => (
          <label key={city} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="preferredCities"
              value={city}
              checked={formData.preferredCities.includes(city)}
              onChange={(e) => handleCityChange(city, e.target.checked)}
              className={styles.checkbox}
            />
            {city}
          </label>
        ))}
      </fieldset>

      <label className={styles.label}>
        About Yourself:
        <textarea
          name="aboutYourself"
          value={formData.aboutYourself}
          onChange={handleChange}
          className={styles.textarea}
        />
      </label>

      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
}

export default ExpectationsDetailsForm;
