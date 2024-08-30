import React from 'react';
import styles from './WhyChooseUs.module.css';
import { FaUsers, FaHandHoldingHeart, FaShieldAlt } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <div className={styles.whyChooseUs}>
      <h2 className={styles.heading}>Why Choose Us .....?</h2>
      <div className={styles.features}>
        <div className={styles.feature}>
          <FaUsers className={styles.icon} />
          <h3 className={styles.title}>Large User Base</h3>
          <p className={styles.description}>
            Connect with thousands of verified profiles to find your perfect match verified profiles to find.
          </p>
        </div>
        <div className={styles.feature}>
          <FaHandHoldingHeart className={styles.icon} />
          <h3 className={styles.title}>Trusted Service</h3>
          <p className={styles.description}>
            Our platform is built on trust and reliability to ensure a secure experience.
          </p>
        </div>
        <div className={styles.feature}>
          <FaShieldAlt className={styles.icon} />
          <h3 className={styles.title}>Data Privacy</h3>
          <p className={styles.description}>
            Your privacy is our priority. We protect your data with top-notch security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
