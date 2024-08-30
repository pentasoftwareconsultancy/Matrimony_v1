
import React from 'react'
// import React from 'react';

import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h2>MATRIMONY</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis elit tellus.</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Navigation</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Booking</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Services</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">404</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.location}>
          <p>London Eye, London, UK</p>
        </div>
        <div className={styles.contactInfo}>
          <p>+ (876) 765 685</p>
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
        <p style={{ textAlign:'center'}}>© 2023 Influenca Template - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
