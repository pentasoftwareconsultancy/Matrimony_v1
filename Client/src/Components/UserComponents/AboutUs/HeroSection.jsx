import React from 'react';
import styles from './HeroSection.module.css'; // Import your CSS module

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <img src="src/assets/images/about-4.webp" alt="Hero" className={styles.heroImage} />
      <div className={styles.heroText}>
        <h1 style={{color:'#b4245d'}} >Welcome to Our Site</h1>
        <p style={{position:'relative', textAlign:'center'}}>Your journey begins here</p>
        <button className={styles.heroButton}>Get Started</button>
      </div>
      


      
    </div>
    
  );
};

export default HeroSection;
