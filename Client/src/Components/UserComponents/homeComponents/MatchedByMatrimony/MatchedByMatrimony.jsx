import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Carousel.module.css';
import cp1 from '/img/cp1.jpg';
import cp2 from '/img/cp2.jpg';
import cp3 from '/img/cp3.jpg';
import cp4 from '/img/cp4.jpeg';

const MatchedByMatrimony = () => {
  return (
    <Container className={styles.carouselContainer}>
      <h2 className={`text-center mb-5 ${styles.headline}`}>Matched By Matrimony</h2>
      <div className={styles.cardGrid}>
        <div className={styles.cardWrapper}>
          <img src={cp1} className={styles.cardImage} alt="Priyank & Shweta" />
          <div className={styles.cardTitle}>Priyank & Shweta</div>
        </div>
        <div className={styles.cardWrapper}>
          <img src={cp2} className={styles.cardImage} alt="Dharmesh & Ratna" />
          <div className={styles.cardTitle}>Dharmesh & Ratna</div>
        </div>
        <div className={styles.cardWrapper}>
          <img src={cp3} className={styles.cardImage} alt="Gaurav & Prerana" />
          <div className={styles.cardTitle}>Gaurav & Prerana</div>
        </div>
        <div className={styles.cardWrapper}>
          <img src={cp4} className={styles.cardImage} alt="Couple 4" />
          <div className={styles.cardTitle}>Couple 4</div>
        </div>
       
      </div>
      <div className="text-center mt-4">
        <button className={styles.viewMoreBtn}>View More</button>
      </div>
    </Container>
  );
};

export default MatchedByMatrimony;
