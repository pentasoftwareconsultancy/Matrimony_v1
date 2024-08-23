import React from 'react';
import styles from './NewComponent.module.css';
import Rgisterbutton from '../../UserComponents/Buttons/Rgisterbutton'
const NewComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1>Discover your ROI with GenAI</h1>
        <p>
          Efficient strategies make LLM training and development success
          possible. Empower your research teams without sacrificing your budget
          or business goals with our tips on strategic use, development of
          minimum viable models, and prompt engineering for a variety of
          applications.
        </p>
        <div style={{position:'relative', marginTop:'10px'}}>
        <Rgisterbutton/>
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
