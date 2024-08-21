// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import styles from './BriedCard.module.css'; // Assuming you have a CSS module

// function BriedCard() {
//   const navigate = useNavigate(); // Initialize useNavigate

//   // First person's dummy data
//   const person1 = {
//     personalDetails: {
//       name: 'John Doe',
//       gender: 'Male',
//       dob: '1990-01-01',
//       email: 'johndoe@example.com',
//       phone: '1234567890',
//       address: '123 Main St, Anytown, USA',
//     },
//     horoscopeDetails: {
//       horoscopeMatch: 'Yes',
//       birthPlace: 'New York',
//       manglik: 'No',
//       birthTime: '12:00 PM',
//       rashi: 'Mesha',
//       gan: 'Deva',
//       charan: 'Charan1',
//       nakshatra: 'Ashwini',
//       gotra: 'Bharadwaja',
//       nadi: 'Adi',
//       devak: 'Shiva',
//       yoni: 'Matsya',
//     },
//     familyDetails: {
//       fatherName: 'Robert Doe',
//       fatherOccupation: 'Engineer',
//       motherName: 'Jane Doe',
//       motherOccupation: 'Teacher',
//       siblings: '1 Brother, 1 Sister',
//     },
//     expectationsDetails: {
//       minIncome: '50000',
//       openForInterCaste: 'Yes',
//       educationExpectations: "Master's",
//       maritalStatus: 'Single',
//       minHeight: '160',
//       maxHeight: '180',
//       minAge: '25',
//       maxAge: '35',
//       casteExpectations: 'Any',
//       preferredCities: ['New York', 'Los Angeles'],
//       aboutYourself: 'I am a software engineer who loves traveling and exploring new cultures.',
//     },
//   };

//   // Second person's dummy data
//   const person2 = {
//     personalDetails: {
//       name: 'Jane Smith',
//       gender: 'Female',
//       dob: '1992-05-15',
//       email: 'janesmith@example.com',
//       phone: '9876543210',
//       address: '456 Oak St, Anycity, USA',
//     },
//     horoscopeDetails: {
//       horoscopeMatch: 'No',
//       birthPlace: 'Los Angeles',
//       manglik: 'Yes',
//       birthTime: '06:30 AM',
//       rashi: 'Vrishabha',
//       gan: 'Manushya',
//       charan: 'Charan2',
//       nakshatra: 'Rohini',
//       gotra: 'Kashyapa',
//       nadi: 'Madhya',
//       devak: 'Vishnu',
//       yoni: 'Simha',
//     },
//     familyDetails: {
//       fatherName: 'Michael Smith',
//       fatherOccupation: 'Doctor',
//       motherName: 'Emily Smith',
//       motherOccupation: 'Lawyer',
//       siblings: '2 Brothers',
//     },
//     expectationsDetails: {
//       minIncome: '60000',
//       openForInterCaste: 'No',
//       educationExpectations: "Bachelor's",
//       maritalStatus: 'Divorced',
//       minHeight: '155',
//       maxHeight: '175',
//       minAge: '28',
//       maxAge: '38',
//       casteExpectations: 'Same caste',
//       preferredCities: ['Chicago', 'Boston'],
//       aboutYourself: 'I am a doctor with a passion for helping people and volunteering in the community.',
//     },
//   };

//   const handleEdit = () => {
//     navigate('/'); // Redirect to the form page for editing
//   };

//   const handleSubmit = () => {
//     // Handle final submission (e.g., send data to backend)
//     console.log('Final submission');
//   };

//   return (
//     <div className={styles.biodataContainer}>
//       <h2>Biodata</h2>

//       {/* First Person's Data */}
//       <div className={styles.personData}>
//         <h1>Person 1: {person1.personalDetails.name}</h1>

//         <div className={styles.section}>
//           <h3>Personal Details</h3>
//           <p><strong>Name:</strong> {person1.personalDetails.name}</p>
//           <p><strong>Gender:</strong> {person1.personalDetails.gender}</p>
//           <p><strong>Date of Birth:</strong> {person1.personalDetails.dob}</p>
//           <p><strong>Email:</strong> {person1.personalDetails.email}</p>
//           <p><strong>Phone:</strong> {person1.personalDetails.phone}</p>
//           <p><strong>Address:</strong> {person1.personalDetails.address}</p>
//         </div>

//         <div className={styles.section}>
//           <h3>Horoscope Details</h3>
//           <p><strong>Horoscope Match is Must:</strong> {person1.horoscopeDetails.horoscopeMatch}</p>
//           <p><strong>Birth Place:</strong> {person1.horoscopeDetails.birthPlace}</p>
//           <p><strong>Are you Manglik:</strong> {person1.horoscopeDetails.manglik}</p>
//           <p><strong>Birth Time:</strong> {person1.horoscopeDetails.birthTime}</p>
//           <p><strong>Rashi:</strong> {person1.horoscopeDetails.rashi}</p>
//           <p><strong>Gan:</strong> {person1.horoscopeDetails.gan}</p>
//           <p><strong>Charan:</strong> {person1.horoscopeDetails.charan}</p>
//           <p><strong>Nakshatra:</strong> {person1.horoscopeDetails.nakshatra}</p>
//           <p><strong>Gotra:</strong> {person1.horoscopeDetails.gotra}</p>
//           <p><strong>Nadi:</strong> {person1.horoscopeDetails.nadi}</p>
//           <p><strong>Devak:</strong> {person1.horoscopeDetails.devak}</p>
//           <p><strong>Yoni:</strong> {person1.horoscopeDetails.yoni}</p>
//         </div>

//         <div className={styles.section}>
//           <h3>Family Details</h3>
//           <p><strong>Father's Name:</strong> {person1.familyDetails.fatherName}</p>
//           <p><strong>Father's Occupation:</strong> {person1.familyDetails.fatherOccupation}</p>
//           <p><strong>Mother's Name:</strong> {person1.familyDetails.motherName}</p>
//           <p><strong>Mother's Occupation:</strong> {person1.familyDetails.motherOccupation}</p>
//           <p><strong>Siblings:</strong> {person1.familyDetails.siblings}</p>
//         </div>

//         <div className={styles.section}>
//           <h3>Expectations Details</h3>
//           <p><strong>Minimum Annual Income:</strong> {person1.expectationsDetails.minIncome}</p>
//           <p><strong>Open for Inter-Caste Marriage:</strong> {person1.expectationsDetails.openForInterCaste}</p>
//           <p><strong>Education Expectations:</strong> {person1.expectationsDetails.educationExpectations}</p>
//           <p><strong>Marital Status:</strong> {person1.expectationsDetails.maritalStatus}</p>
//           <p><strong>Minimum Height (cm):</strong> {person1.expectationsDetails.minHeight}</p>
//           <p><strong>Maximum Height (cm):</strong> {person1.expectationsDetails.maxHeight}</p>
//           <p><strong>Minimum Age:</strong> {person1.expectationsDetails.minAge}</p>
//           <p><strong>Maximum Age:</strong> {person1.expectationsDetails.maxAge}</p>
//           <p><strong>Caste Expectations:</strong> {person1.expectationsDetails.casteExpectations}</p>
//           <p><strong>Preferred Cities:</strong> {person1.expectationsDetails.preferredCities.join(', ')}</p>
//           <p><strong>About Yourself:</strong> {person1.expectationsDetails.aboutYourself}</p>
//         </div>
//       </div>

//       {/* Second Person's Data */}
//       <div className={styles.personData}>
//         <h1>Person 2: {person2.personalDetails.name}</h1>

//         <div className={styles.section}>
//           <h3>Personal Details</h3>
//           <p><strong>Name:</strong> {person2.personalDetails.name}</p>
//           <p><strong>Gender:</strong> {person2.personalDetails.gender}</p>
//           <p><strong>Date of Birth:</strong> {person2.personalDetails.dob}</p>
//           <p><strong>Email:</strong> {person2.personalDetails.email}</p>
//           <p><strong>Phone:</strong> {person2.personalDetails.phone}</p>
//           <p><strong>Address:</strong> {person2.personalDetails.address}</p>
//         </div>

//         <div className={styles.section}>
//           <h3>Horoscope Details</h3>
//           <p><strong>Horoscope Match is Must:</strong> {person2.horoscopeDetails.horoscopeMatch}</p>
//           <p><strong>Birth Place:</strong> {person2.horoscopeDetails.birthPlace}</p>
//           <p><strong>Are you Manglik:</strong> {person2.horoscopeDetails.manglik}</p>
//           <p><strong>Birth Time:</strong> {person2.horoscopeDetails.birthTime}</p>
//           <p><strong>Rashi:</strong> {person2.horoscopeDetails.rashi}</p>
//           <p><strong>Gan:</strong> {person2.horoscopeDetails.gan}</p>
//           <p><strong>Charan:</strong> {person2.horoscopeDetails.charan}</p>
//           <p><strong>Nakshatra:</strong> {person2.horoscopeDetails.nakshatra}</p>
//           <p><strong>Gotra:</strong> {person2.horoscopeDetails.gotra}</p>
//           <p><strong>Nadi:</strong> {person2.horoscopeDetails.nadi}</p>
//           <p><strong>Devak:</strong> {person2.horoscopeDetails.devak}</p>
//           <p><strong>Yoni:</strong> {person2.horoscopeDetails.yoni}</p>
//         </div>

//         <div className={styles.section}>
//           <h3>Family Details</h3>
//           <p><strong>Father's Name:</strong> {person2.familyDetails.fatherName}</p>
//           <p><strong>Father's Occupation:</strong> {person2.familyDetails.fatherOccupation}</p>
//           <p><strong>Mother's Name:</strong> {person2.familyDetails.motherName}</p>
//           <p><strong>Mother's Occupation:</strong> {person2.familyDetails.motherOccupation}</p>
//           <p><strong>Siblings:</strong> {person2.familyDetails.siblings}</p>
//         </div>

//         <div className={styles.section}>
//           <h3>Expectations Details</h3>
//           <p><strong>Minimum Annual Income:</strong> {person2.expectationsDetails.minIncome}</p>
//           <p><strong>Open for Inter-Caste Marriage:</strong> {person2.expectationsDetails.openForInterCaste}</p>
//           <p><strong>Education Expectations:</strong> {person2.expectationsDetails.educationExpectations}</p>
//           <p><strong>Marital Status:</strong> {person2.expectationsDetails.maritalStatus}</p>
//           <p><strong>Minimum Height (cm):</strong> {person2.expectationsDetails.minHeight}</p>
//           <p><strong>Maximum Height (cm):</strong> {person2.expectationsDetails.maxHeight}</p>
//           <p><strong>Minimum Age:</strong> {person2.expectationsDetails.minAge}</p>
//           <p><strong>Maximum Age:</strong> {person2.expectationsDetails.maxAge}</p>
//           <p><strong>Caste Expectations:</strong> {person2.expectationsDetails.casteExpectations}</p>
//           <p><strong>Preferred Cities:</strong> {person2.expectationsDetails.preferredCities.join(', ')}</p>
//           <p><strong>About Yourself:</strong> {person2.expectationsDetails.aboutYourself}</p>
//         </div>
//       </div>

//       <div className={styles.buttons}>
//         <button onClick={handleEdit}>Edit</button>
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }

// export default BriedCard;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BriedCard.module.css'; // Assuming you have a CSS module

function BriedCard() {
  const navigate = useNavigate();

  // Dummy data for two people
  const people = [
    {
      personalDetails: {
        name: 'John Doe',
        gender: 'Male',
        dob: '1990-01-01',
        email: 'johndoe@example.com',
        phone: '1234567890',
        address: '123 Main St, Anytown, USA',
      },
      horoscopeDetails: {
        horoscopeMatch: 'Yes',
        birthPlace: 'New York',
        manglik: 'No',
      },
      familyDetails: {
        fatherName: 'Robert Doe',
        fatherOccupation: 'Engineer',
        motherName: 'Jane Doe',
        motherOccupation: 'Teacher',
      },
      expectationsDetails: {
        minIncome: '50000',
        maritalStatus: 'Single',
      },
    },
    {
      personalDetails: {
        name: 'Jane Smith',
        gender: 'Female',
        dob: '1992-05-15',
        email: 'janesmith@example.com',
        phone: '9876543210',
        address: '456 Oak St, Anycity, USA',
      },
      horoscopeDetails: {
        horoscopeMatch: 'No',
        birthPlace: 'Los Angeles',
        manglik: 'Yes',
      },
      familyDetails: {
        fatherName: 'Michael Smith',
        fatherOccupation: 'Doctor',
        motherName: 'Emily Smith',
        motherOccupation: 'Lawyer',
      },
      expectationsDetails: {
        minIncome: '60000',
        maritalStatus: 'Divorced',
      },
    },
  ];

  const [filters, setFilters] = useState({
    gender: '',
    maritalStatus: '',
    caste: '',
    minAge: '',
    maxAge: '',
    location: '',
    education: '',
    profileId: '',
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    navigate('/'); // Redirect to the form page for editing
  };

  const handleSubmit = () => {
    console.log('Final submission');
  };

  return (
    <div className={styles.biodataContainer}>
      <h2>Biodata</h2>

      {/* Filter Section */}
      <div className={styles.filterSection}>
        <h3>Filter Results</h3>
        <div className={styles.filterFields}>
          <label>
            Gender:
            <select name="gender" value={filters.gender} onChange={handleFilterChange}>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
          <label>
            Marital Status:
            <select name="maritalStatus" value={filters.maritalStatus} onChange={handleFilterChange}>
              <option value="">Select</option>
              <option value="Single">Single</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
          </label>
          <label>
            Sub Caste:
            <input type="text" name="caste" value={filters.caste} onChange={handleFilterChange} />
          </label>
          <label>
            Age Range:
            <input type="number" name="minAge" placeholder="From" value={filters.minAge} onChange={handleFilterChange} />
            <input type="number" name="maxAge" placeholder="To" value={filters.maxAge} onChange={handleFilterChange} />
          </label>
          <label>
            Location:
            <input type="text" name="location" value={filters.location} onChange={handleFilterChange} />
          </label>
          <label>
            Education:
            <input type="text" name="education" value={filters.education} onChange={handleFilterChange} />
          </label>
          <label>
            Profile ID:
            <input type="text" name="profileId" value={filters.profileId} onChange={handleFilterChange} />
          </label>
        </div>
        <div className={styles.filterButtons}>
          <button onClick={() => setFilters({})}>Reset</button>
          <button onClick={() => console.log('Search initiated')}>Search</button>
        </div>
      </div>

      {/* Biodata Section */}
      {people.map((person, index) => (
        <div className={styles.info}>
        <div key={index} className={styles.personData}>
          <h3>{person.personalDetails.name}</h3>
          <p><strong>Gender:</strong> {person.personalDetails.gender}</p>
          <p><strong>Date of Birth:</strong> {person.personalDetails.dob}</p>
          <p><strong>Email:</strong> {person.personalDetails.email}</p>
          <p><strong>Phone:</strong> {person.personalDetails.phone}</p>
          <p><strong>Address:</strong> {person.personalDetails.address}</p>
          <p><strong>Horoscope Match:</strong> {person.horoscopeDetails.horoscopeMatch}</p>
          <p><strong>Birth Place:</strong> {person.horoscopeDetails.birthPlace}</p>
          <button onClick={() => navigate(`/details/${index}`)}>View Full Biodata</button>
        </div>

        
        </div>
      ))}

      <div className={styles.buttons}>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default BriedCard;
