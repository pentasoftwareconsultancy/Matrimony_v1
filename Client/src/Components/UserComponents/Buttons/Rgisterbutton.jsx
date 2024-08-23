import React from 'react';
import styles from './RegisterButton.module.css';

const RegisterButton = () => {
    return (
        <button className={`${styles.button} ${styles.buttonHover}`}>
            Register
        </button>
    );
};

export default RegisterButton;
