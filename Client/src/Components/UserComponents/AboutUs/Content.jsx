import React, { useState } from 'react';
import styles from './Content.module.css';

const Content = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.contentSection}>
        <h3 className={styles.heading}>Our Mission</h3>
        <p>
          We believe in the power of love and are dedicated to providing a
          safe and secure platform for compatible individuals to find each
          other. We empower users with advanced search filters and personalized
          matching algorithms to create meaningful connections.
        </p>
        <h3 className={styles.heading}>Our Values</h3>
        <ul className={styles.values}>
          <li><i className="fas fa-heart"></i> Trust & Security</li>
          <li><i className="fas fa-search"></i> Compatibility Matching</li>
          <li><i className="fas fa-users"></i> Diverse Community</li>
          <li><i className="fas fa-heart-pulse"></i> Dedicated Support</li>
        </ul>
        <h3 className={styles.heading}>Success Stories</h3>
        <div className={styles.testimonials}>
          <blockquote>
            <p>"Thanks to [Your Website Name], I found the love of my life! We couldn't be happier." - [Couple's Names]</p>
          </blockquote>
          <blockquote>
            <p>"This platform is user-friendly and helped me connect with someone who shares my values." - [Another Couple's Names]</p>
          </blockquote>
        </div>
      </div>
      <div className={styles.formSection}>
        <h3 className={styles.heading}>Login</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Id*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className={errors.email ? 'is-invalid' : ''}
          />
          {errors.email && <div className={styles.invalidFeedback}>{errors.email}</div>}
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className={errors.password ? 'is-invalid' : ''}
          />
          {errors.password && <div className={styles.invalidFeedback}>{errors.password}</div>}
          <button type="submit" className={styles.submitButton}>Continue</button>
        </form>
        <div className="text-center">
          <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
        </div>
        <div className="text-center mt-3">
          <small>
            By Signing Up You Agree To Our <a href="#">Terms And Conditions</a> And <a href="#">Privacy Policy</a>.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Content;
