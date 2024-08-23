
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cp8 from '/img/cp8.jpg'; // Adjust the import path according to your project structure
import styles from './AboutSection.module.css'; // Import the CSS module

const AboutSection = () => {
  return (
    <Row className={`justify-content-center ${styles.aboutSectionWrapper}`}>
      <Col md={10} className={styles.customCol}>
        <Card className={`mb-4 ${styles.customCard}`}>
          <Card.Body className={styles.customCardBody}>
            <Row>
              <Col md={5}>
                <img
                  src={cp8}
                  alt="About Lagnagath"
                  className={styles.image}
                />
              </Col>
              <Col md={7} className={styles.textCol}>
                <h3 className={styles.title}>About Lagnagath</h3>
                <p className={styles.description}>
                  Are you ready to embark on a journey of love, companionship, and lifelong commitment? At Matrimony, we believe that every individual deserves to find their perfect match, someone who understands them, supports them, and shares their dreams. Let's start your journey of finding the perfect life partner with our matchmaking experts.
                </p>
                <Link to="/about">
                  <Button
                    variant="primary"
                    className={`btn-hover ${styles.viewMoreButton}`}
                  >
                    View More
                  </Button>
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AboutSection;
