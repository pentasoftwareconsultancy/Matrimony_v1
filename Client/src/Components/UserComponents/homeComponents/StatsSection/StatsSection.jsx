
import { Link } from 'react-router-dom';
import styles from './StatsSection.module.css';

const StatsSection = () => {
  return (
    <div className={styles.statsSection}>
      <h2>Why MatrimonialsIndia.com?</h2>
      <div className={styles.statsContainer}>
        <div className={styles.statBox}>
          <div className={styles.iconContainer}>
            <span role="img" aria-label="trust" className={styles.icon}>⭐</span>
          </div>
          <h3>27+</h3>
          <p className={styles.statText} style={{ color: '#ff0066',textAlign:'center' }}>Years of Trust</p>
          <p className={styles.statDescription}>Showered by the trust and love of our clients for the last 27 Years the trust and love of our.</p>
        </div>
        <div className={styles.statBox}>
          <div className={styles.iconContainer}>
            <span role="img" aria-label="profiles" className={styles.icon}>👥</span>
          </div>
          <h3>1000000+</h3>
          <p className={styles.statText} style={{ color: '#ff0066', textAlign:'center' }}>Active Profiles</p>
          <p className={styles.statDescription}>Also new profiles registered every hour increase chances of meeting your soulmate.</p>
        </div>
        <div className={styles.statBox}>
          <div className={styles.iconContainer}>
            <span role="img" aria-label="visits" className={styles.icon}>👁️</span>
          </div>
          <h3>10000+</h3>
          <p className={styles.statText} style={{ color: '#ff0066', textAlign:'center' }}>Member Visits Everyday</p>
          <p className={styles.statDescription}>Thousands of members visiting every day & searching their Life Partner here.</p>
        </div>
        <div className={styles.statBox}>
          <div className={styles.iconContainer}>
            <span role="img" aria-label="marriages" className={styles.icon}>💍</span>
          </div>
          <h3>1500+</h3>
          <p className={styles.statText} style={{ color: '#ff0066', textAlign:'center' }}>Successful Marriages</p>
          <p className={styles.statDescription}>Thousands have found their soulmate. Now you can be the next.</p>
        </div>
      </div>
      <div className={styles.cta}>
        <p>So what are you waiting for? Let us find Your Dream Partner now.....</p>
        
        <Link to="/register">
          <button className={styles.registerButton}>REGISTER FREE</button>
        </Link>
      </div>
    </div>
  );
};

export default StatsSection;
