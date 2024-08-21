import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './BiodataPage.module.css'; // Assuming you have a CSS module

function BiodataPage() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Dummy data for demonstration
  const dummyPersonalDetails = {
    name: 'John Doe',
    gender: 'Male',
    dob: '1990-01-01',
    email: 'johndoe@example.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, USA'
  };

  const dummyHoroscopeDetails = {
    horoscopeMatch: 'Yes',
    birthPlace: 'New York',
    manglik: 'No',
    birthTime: '12:00 PM',
    rashi: 'Mesha',
    gan: 'Deva',
    charan: 'Charan1',
    nakshatra: 'Ashwini',
    gotra: 'Bharadwaja',
    nadi: 'Adi',
    devak: 'Shiva',
    yoni: 'Matsya'
  };

  const dummyFamilyDetails = {
    fatherName: 'Robert Doe',
    fatherOccupation: 'Engineer',
    motherName: 'Jane Doe',
    motherOccupation: 'Teacher',
    siblings: '1 Brother, 1 Sister'
  };

  const dummyExpectationsDetails = {
    minIncome: '50000',
    openForInterCaste: 'Yes',
    educationExpectations: 'Master\'s',
    maritalStatus: 'Single',
    minHeight: '160',
    maxHeight: '180',
    minAge: '25',
    maxAge: '35',
    casteExpectations: 'Any',
    preferredCities: ['New York', 'Los Angeles'],
    aboutYourself: 'I am a software engineer who loves traveling and exploring new cultures.'
  };

  const handleEdit = () => {
    navigate('/'); // Redirect to the form page for editing
  };

  const handleSubmit = () => {
    // Handle final submission (e.g., send data to backend)
    console.log('Final submission');
  };

  return (
    <div className={styles.biodataContainer}>
      <h2>Biodata</h2>

      <div className={styles.section}>
        <h3>Personal Details</h3>
        <p><strong>Name:</strong> {dummyPersonalDetails.name}</p>
        <p><strong>Gender:</strong> {dummyPersonalDetails.gender}</p>
        <p><strong>Date of Birth:</strong> {dummyPersonalDetails.dob}</p>
        <p><strong>Email:</strong> {dummyPersonalDetails.email}</p>
        <p><strong>Phone:</strong> {dummyPersonalDetails.phone}</p>
        <p><strong>Address:</strong> {dummyPersonalDetails.address}</p>
      </div>

      <div className={styles.section}>
        <h3>Horoscope Details</h3>
        <p><strong>Horoscope Match is Must:</strong> {dummyHoroscopeDetails.horoscopeMatch}</p>
        <p><strong>Birth Place:</strong> {dummyHoroscopeDetails.birthPlace}</p>
        <p><strong>Are you Manglik:</strong> {dummyHoroscopeDetails.manglik}</p>
        <p><strong>Birth Time:</strong> {dummyHoroscopeDetails.birthTime}</p>
        <p><strong>Rashi:</strong> {dummyHoroscopeDetails.rashi}</p>
        <p><strong>Gan:</strong> {dummyHoroscopeDetails.gan}</p>
        <p><strong>Charan:</strong> {dummyHoroscopeDetails.charan}</p>
        <p><strong>Nakshatra:</strong> {dummyHoroscopeDetails.nakshatra}</p>
        <p><strong>Gotra:</strong> {dummyHoroscopeDetails.gotra}</p>
        <p><strong>Nadi:</strong> {dummyHoroscopeDetails.nadi}</p>
        <p><strong>Devak:</strong> {dummyHoroscopeDetails.devak}</p>
        <p><strong>Yoni:</strong> {dummyHoroscopeDetails.yoni}</p>
      </div>

      <div className={styles.section}>
        <h3>Family Details</h3>
        <p><strong>Father's Name:</strong> {dummyFamilyDetails.fatherName}</p>
        <p><strong>Father's Occupation:</strong> {dummyFamilyDetails.fatherOccupation}</p>
        <p><strong>Mother's Name:</strong> {dummyFamilyDetails.motherName}</p>
        <p><strong>Mother's Occupation:</strong> {dummyFamilyDetails.motherOccupation}</p>
        <p><strong>Siblings:</strong> {dummyFamilyDetails.siblings}</p>
      </div>

      <div className={styles.section}>
        <h3>Expectations Details</h3>
        <p><strong>Minimum Annual Income:</strong> {dummyExpectationsDetails.minIncome}</p>
        <p><strong>Open for Inter-Caste Marriage:</strong> {dummyExpectationsDetails.openForInterCaste}</p>
        <p><strong>Education Expectations:</strong> {dummyExpectationsDetails.educationExpectations}</p>
        <p><strong>Marital Status:</strong> {dummyExpectationsDetails.maritalStatus}</p>
        <p><strong>Minimum Height (cm):</strong> {dummyExpectationsDetails.minHeight}</p>
        <p><strong>Maximum Height (cm):</strong> {dummyExpectationsDetails.maxHeight}</p>
        <p><strong>Minimum Age:</strong> {dummyExpectationsDetails.minAge}</p>
        <p><strong>Maximum Age:</strong> {dummyExpectationsDetails.maxAge}</p>
        <p><strong>Caste Expectations:</strong> {dummyExpectationsDetails.casteExpectations}</p>
        <p><strong>Preferred Cities:</strong> {dummyExpectationsDetails.preferredCities.join(', ')}</p>
        <p><strong>About Yourself:</strong> {dummyExpectationsDetails.aboutYourself}</p>
      </div>

      <div className={styles.buttons}>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default BiodataPage;
