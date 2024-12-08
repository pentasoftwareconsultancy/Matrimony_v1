import React from 'react';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';  // Import Link from React Router
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h2>Maratha Vishv</h2>
          <p>Find your perfect match with us – where love meets destiny. Explore a world of trusted connections and meaningful relationships. Your journey to forever begins here, with us by your side every step of the way.</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li> {/* Use Link for internal navigation */}
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Quick Link</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bridecard">Bride</Link></li> {/* Corrected the link for Bride */}
            <li><Link to="/groom">Groom</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.location}>
          <p>Pimpri Chinchwad, Pune</p>
        </div>
        <div className={styles.contactInfo}>
          <p>+91 8989765407</p>
          <p>nexuxctc2020@gmail.com</p>
        </div>
        <div className={styles.socials}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
      </div>

      <div className={styles.footerCredit}>
        <p style={{ textAlign: 'center' }}>© 2024 Devcon Software Services - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;