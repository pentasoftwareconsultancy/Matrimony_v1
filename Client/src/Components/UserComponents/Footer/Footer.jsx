
import React from 'react';
// import React from 'react';

import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h2>MATRIMONY</h2>
          <p>Find your perfect match with us – where love meets destiny. Explore a world of trusted connections and meaningful relationships. Your journey to forever begins here, with us by your side every step of the way.</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Quick Link</h3>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Booking</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Services</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">404</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.location}>
          <p>Pimpri Chinchwad , Pune </p>
        </div>
        <div className={styles.contactInfo}>
          <p>+91 8989765407</p>
          <p>mail@influenca.ld</p>
        </div>
        <div className={styles.socials}>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
      </div>
      <div className={styles.footerCredit}>
        <p style={{ textAlign:'center'}}>© 2024 Devcon Software Services - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
