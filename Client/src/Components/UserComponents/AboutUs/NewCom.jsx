
import React from 'react';
import styles from './NewCom.module.css';

const NewCom = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img 
                    src="/src/assets/images/flower2.webp" 
                    alt="Wedding Bouquet" 
                    className={styles.image}
                />
            </div>
            <div className={styles.formWrapper}>
                <h2>Do You have any Plan? Let's talk with us.</h2>
                <form>
                    <input type="text" placeholder="Your Name" className={styles.inputField} />
                    <input type="email" placeholder="Enter your email address" className={styles.inputField} />
                    <textarea placeholder="Write here..." className={styles.textArea}></textarea>
                    <button type="submit" className={styles.submitButton}>Sent</button>
                </form>
            </div>
        </div>
    );
}

export default NewCom;
