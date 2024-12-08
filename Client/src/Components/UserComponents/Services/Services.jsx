import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Services.module.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('Free');
  const navigate = useNavigate();

  const serviceContent = {
    Free: (
      <div className={styles.packageContent}>
        <h2>Free packs</h2>
        <p>Details: 3 Months</p>
        <p>Rate: ₹0</p>
        <b>Silver Membership Benefits</b>
        <ol>
          <li>Browse Profiles</li>
          <li>Send Interest and Shortlist</li>
          <li>Reply Email and SMS</li>
          <li>Reply Chat and Connect</li>
          <li>Customize search</li>
          <li>Get up to 5x more visibility</li>
          <li>View Contact details</li>
          <li>Personalized support</li>
        </ol>
        <button className={styles.payNowButton} onClick={() => navigate('/paymentModal')}>Go to Payment Options</button>
      </div>
    ),
    Silver: (
      <div className={styles.packageContent}>
        <h2>Silver packs</h2>
        <p>Details: 3 Months</p>
        <p>Rate: ₹ 600</p>
        <b>Silver Membership Benefits</b>
        <ol>
          <li>Browse Profiles</li>
          <li>Send Interest and Shortlist</li>
          <li>Reply Email and SMS</li>
          <li>Reply Chat and Connect</li>
          <li>Customize search</li>
          <li>Get up to 5x more visibility</li>
          <li>View Contact details</li>
          <li>Personalized support</li>
        </ol>
        <button className={styles.payNowButton} onClick={() => navigate('/paymentModal')}>Pay Now</button>
      </div>
    ),
    Gold: (
      <div className={styles.packageContent}>
        <h2>Gold packs</h2>
        <p>Details: 6 Months</p>
        <p>Rate: ₹ 1000</p>
        <b>Gold Membership Benefits</b>
        <ol>
          <li>Browse Profiles</li>
          <li>Send Interest and Shortlist</li>
          <li>Reply Email and SMS</li>
          <li>Reply Chat and Connect</li>
          <li>Customize search</li>
          <li>Get up to 5x more visibility</li>
          <li>View Contact details</li>
          <li>Personalized support</li>
        </ol>
        <button className={styles.payNowButton} onClick={() => navigate('/paymentModal')}>Pay Now</button>
      </div>
    ),
    Diamond: (
      <div className={styles.packageContent}>
        <h2>Diamond packs</h2>
        <p>Details: 12 Months</p>
        <p>Rate: ₹ 2000</p>
        <b>Diamond Membership Benefits</b>
        <ol>
          <li>Browse Profiles</li>
          <li>Send Interest and Shortlist</li>
          <li>Reply Email and SMS</li>
          <li>Reply Chat and Connect</li>
          <li>Customize search</li>
          <li>Get up to 5x more visibility</li>
          <li>View Contact details</li>
          <li>Personalized support</li>
        </ol>
        <button className={styles.payNowButton} onClick={() => navigate('/paymentModal')}>Pay Now</button>
      </div>
    ),
  };

  return (
    <div className={styles.services}>
      <h1 className={styles.Servic}>Our Packages</h1>
      <p style={{textAlign:'center', fontSize:'16px'}}>Choose the best plan that suits your needs and find your perfect match with ease. Our packages are designed to give you the best experience and help you connect with genuine profiles. Sign up today and start your journey towards finding true love!</p>
      <div className={styles.tabs}>
        {Object.keys(serviceContent).map((tab) => (
          <div
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} packs
          </div>
        ))}
      </div>
      <div className={styles.content}>{serviceContent[activeTab]}</div>
      <div className={styles.ctta}>
        <p>So what are you waiting for? Let us find Your Dream Partner</p>
        <button className={styles.registerNowButton}>REGISTER FREE</button>
      </div>
    </div>
  );
};

export default Services;
