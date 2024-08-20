import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import styles from './ProfileSteps.module.css';

const ProfileSteps = () => {
  return (
    <div className={`text-center mb-5 ${styles.profileStepsContainer}`}>
      <h2 className={`mb-4 ${styles.title}`}>Create Your Profile Now.....</h2>
      <p className={styles.subtitle}>Create Your Profile Today and Begin Your Journey to Finding True Love and Lasting Happiness!</p>

      {/* Steps Section */}
      <div className={`text-center mb-5 ${styles.stepsSection}`}>
        <Row className={styles.stepsRow}>
          <Col className={styles.stepColumn}>
            <div className={`${styles.circleIcon} mb-2`}>
              <span role="img" aria-label="create" className={styles.icon}>📝</span>
            </div>
            <Link to="/personaldetails">
              <h5 className={styles.stepTitle}>Create your profile</h5>
            </Link>
            <p className={styles.stepDescription}>Honestly you search for a life Partner? Simple! Create your Matrimonial Profile.</p>
          </Col>
          <Col className={styles.arrowColumn}>
            <div className={styles.arrow}></div>
          </Col>
          <Col className={styles.stepColumn}>
            <div className={`${styles.circleIcon} mb-2`}>
              <span role="img" aria-label="find" className={styles.icon}>🔍</span>
            </div>
            <Link to="/ExpectationsDetailsForm">
              <h5 className={styles.stepTitle}>Find Compatible</h5>
            </Link>
            <p className={styles.stepDescription}>Honestly you search for a life Partner? Simple! Create your Matrimonial Profile.</p>
          </Col>
          <Col className={styles.arrowColumn}>
            <div className={styles.arrow}></div>
          </Col>
          <Col className={styles.stepColumn}>
            <div className={`${styles.circleIcon} mb-2`}>
              <span role="img" aria-label="connect" className={styles.icon}>💬</span>
            </div>
            <h5 className={styles.stepTitle}>Get to know them</h5>
            <p className={styles.stepDescription}>Honestly you search for a life Partner? Simple! Create your Matrimonial Profile.</p>
          </Col>
          <Col className={styles.arrowColumn}>
            <div className={styles.arrow}></div>
          </Col>
          <Col className={styles.stepColumn}>
            <div className={`${styles.circleIcon} mb-2`}>
              <span role="img" aria-label="love" className={styles.icon}>❤️</span>
            </div>
            <h5 className={styles.stepTitle}>Find love!</h5>
            <p className={styles.stepDescription}>Honestly you search for a life Partner? Simple! Create your Matrimonial Profile.</p>
          </Col>
        </Row>
      </div>

      <Button
        variant="primary"
        className={styles.registerButton}
      >
        Register
      </Button>
    </div>
  );
};

export default ProfileSteps;
