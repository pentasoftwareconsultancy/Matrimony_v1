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
    occupation: '',
    annualIncome: '',
    workLocation: '',
    nativePlace: '',
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
            Caste:
            <input type="text" name="caste" value={filters.caste} onChange={handleFilterChange} />
          </label>
          <label>
            Age/Height:
            <input type="number" name="minAge" placeholder="Min Age" value={filters.minAge} onChange={handleFilterChange} />
            <input type="number" name="maxAge" placeholder="Max Age" value={filters.maxAge} onChange={handleFilterChange} />
          </label>
          <label>
            Education:
            <input type="text" name="education" value={filters.education} onChange={handleFilterChange} />
          </label>
          <label>
            Occupation:
            <input type="text" name="occupation" value={filters.occupation} onChange={handleFilterChange} />
          </label>
          <label>
            Annual Income:
            <input type="number" name="annualIncome" value={filters.annualIncome} onChange={handleFilterChange} />
          </label>
          <label>
            Work Location:
            <input type="text" name="workLocation" value={filters.workLocation} onChange={handleFilterChange} />
          </label>
          <label>
            Native Place:
            <input type="text" name="nativePlace" value={filters.nativePlace} onChange={handleFilterChange} />
          </label>
        </div>
        <div className={styles.filterButtons}>
          <button onClick={() => setFilters({})}>Reset</button>
          <button onClick={() => console.log('Search initiated')}>Search</button>
        </div>
      </div>

      {/* Biodata Section */}
      <div className={styles.personContainer}>
        {people.map((person, index) => (
          <div key={index} className={styles.personCard}>
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
        ))}
      </div>

    
    </div>
  );
}

export default BriedCard;
