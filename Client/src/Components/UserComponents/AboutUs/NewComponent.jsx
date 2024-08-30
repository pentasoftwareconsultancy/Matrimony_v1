import React from 'react';
import styles from './NewComponent.module.css';
import Rgisterbutton from '../../UserComponents/Buttons/Rgisterbutton'
const NewComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1 className={styles.NewComponentH1}>  Find True Love with Our Matrimony Services.</h1>
        <p>
          Are you ready to embark on a lifelong journey with a loving partner? Our premier matrimony services are designed to help you find the perfect match for a meaningful and lasting relationship. With a personalized approach and a deep understanding of your values and preferences, we make the process of finding a soulmate both simple and rewarding. Whether you're seeking a traditional match or a modern connection, our expert team is here to guide you every step of the way.
        </p>
        <div style={{ position: 'relative', marginTop: '10px' }}>
          <Rgisterbutton />
        </div>

      </div>
      <div className={styles.imageSection}>
        <img
          src="/src/assets/images/White-flowers.jpg"
          alt="LLM Coding Assistants"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default NewComponent;
