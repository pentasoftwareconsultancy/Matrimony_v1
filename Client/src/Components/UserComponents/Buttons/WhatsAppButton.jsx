// WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppButton.module.css'; // Import the CSS Module

const WhatsAppButton = () => {
  const handleClick = () => {
    // Replace with your own WhatsApp number
    window.open('https://wa.me/qr/CTNZAVDMGBURA1', '_blank');
  };

  return (
    <div className={styles.whatsappButton} onClick={handleClick}>
      <FaWhatsapp size={30} />
    </div>
  );
};

export default WhatsAppButton;
