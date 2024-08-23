import React, { useState, useEffect } from 'react';
import styles from './ProfileCreation.module.css';
import NewCom from './NewCom';

const images = [
  "/src/assets/images/pink-dress4.jpg",
  "/src/assets/images/pink-img1.jpg",
  "/src/assets/images/pink-dress2.jpg"
];

const ProfileCreation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h1 className={styles.heading}>CREATE YOUR PROFILE TO FIND MATCH.....</h1>
        <p className={styles.subtext}>
          hello this is ankita and i love you Ensure your CSS for the slideshow is correctly
          Feel free to adjust the content to better fit website's style and tone......<br/>
        </p>
        <button className={styles.registerButton}>Register Now</button>
        <div style={{position:'relative', marginTop:'20px'}}>
        <NewCom/>
        </div>
       
      </div>
      <div className={styles.rightSection}>
        <img src={images[currentSlide]} alt="Slideshow" className={styles.image} />
        <p className={styles.testimonial}>
          “I'm a testimonial. Click to edit me and add<br/> text that says something nice about you and your services.”
        </p><br/>
       
        <div className={styles.pagination}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCreation;
