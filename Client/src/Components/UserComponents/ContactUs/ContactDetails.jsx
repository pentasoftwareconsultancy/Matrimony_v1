import React from 'react';
import styles from './ContactDetails.module.css';
import ChatWidget from '../../../Components/UserComponents/Buttons/ChatWidget'
// import WhatsAppButton from '../../../Components/UserComponents/Buttons/WhatsAppButton'
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <>
      <div>
        <h2 style={{ textAlign: 'center', marginTop: '10px', color: '#b81358', fontFamily: 'Your Font', fontSize: '2.3rem' }}>
          Get in touch with Osome
        </h2>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.mapSection}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.568791929901!2d100.5231687152864!3d13.736717790352755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f1c72e7b4f7%3A0x53e4e2b896edf57f!2sGoogle%20Thailand!5e0!3m2!1sen!2sth!4v1615174867724!5m2!1sen!2sth"
            title="Google Map"
            className={styles.map}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className={styles.contactSection}>
          <h2 style={{ textAlign: 'center', color: '#b81358' }}>Address Details</h2>
          <p className={styles.address}>Address: <a href="#" className={styles.anchore}>456 Elm Street, Apt. 789
Greenwood Heights,
Springfield, IL 62704
USA</a></p>
          <p className={styles.email}>Email: <a href="mailto:hi@osome.com" className={styles.anchore}>hi@osome.com</a></p>
          
          <p className={styles.phone}>Phone: <a href="tel:+6562326932" className={styles.anchore}>+65 6232 6932</a></p>
          <p className={styles.phone}>Phone: <a href="tel:+6562326932" className={styles.anchore}>+65 6232 6932</a></p>
          <div className={styles.socialIcons}>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube size={24} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTiktok size={24} /></a>
            {/* <WhatsAppButton/> */}
           
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
