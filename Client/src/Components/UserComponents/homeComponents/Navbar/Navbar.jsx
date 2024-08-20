// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "./Navbar.css";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/">
//           <img src="logo.png" alt="Logo" className="logo" />
//         </Link>
//       </div>
//       <div className={`navbar-links ${isOpen ? "active" : ""}`}>
//         <li>
//           <Link to="/" onClick={toggleMenu}>Home</Link>
//         </li>
//         <li>
//           <Link to="/about" onClick={toggleMenu}>About</Link>
//         </li>
//         <li>
//           <Link to="/projects" onClick={toggleMenu}>Projects</Link>
//         </li>
//         <li>
//           <Link to="/contact" onClick={toggleMenu}>Contact</Link>
//         </li>
//       </div>
//       <div className="navbar-login">
//         <Link to="/login">Login</Link>
//       </div>
//       <div className="hamburger" onClick={toggleMenu}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
       <h1>Matrimony</h1>
      </div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </li>
        <li>
          <Link to="/projects" onClick={toggleMenu}>Projects</Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </li>
      </div>
      <div className="navbar-login">
        <Link to="/bride">Bride</Link>
        <span className="slash"> </span>
        <span className="slash" style={{color:'white'}}>/</span>
        <span className="slash"> </span>
        <Link to="/groom">Groom</Link>
        <span className="slash"> </span>
        <Link to="/login" className="login-button">Login</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;


// import React, { useState } from "react";
// import { Navbar as BootstrapNavbar, Nav, Button, Modal } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";

// import { FaSignInAlt } from "react-icons/fa";
// import styles from "./Navbar.module.css";

// function NavbarComponent() {
//   const [showLogin, setShowLogin] = useState(false);

//   const handleShowLogin = () => setShowLogin(true);
//   const handleCloseLogin = () => setShowLogin(false);

//   return (
//     <>
//       <div className={styles.pinkNavbar}>
//         <p className={styles.welcome}>Welcome to our website</p>
//         <span className={styles.callUs}>Call Us-9595959595</span>
//       </div>
//       <BootstrapNavbar bg="transparent" variant="dark" expand="lg" className={`${styles.transparentNavbar} px-3`}>
//         <BootstrapNavbar.Brand className={styles.logo} href="/">Matrimony</BootstrapNavbar.Brand>
//         <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
//         <BootstrapNavbar.Collapse id="basic-navbar-nav">
//           <Nav className={`mx-auto ${styles.navLinks}`}>
//             <LinkContainer to="/">
//               <Nav.Link className={styles.navLinkSpacing}>Home</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/about">
//               <Nav.Link className={styles.navLinkSpacing}>About Us</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/services">
//               <Nav.Link className={styles.navLinkSpacing}>Services</Nav.Link>
//             </LinkContainer>
//             {/* <LinkContainer to="/contact">
//               <Nav.Link className={styles.navLinkSpacing}>Contact Us</Nav.Link>
//             </LinkContainer> */}
//             <LinkContainer to="/testimonial">
//               <Nav.Link className={styles.navLinkSpacing}>Testimonials</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/profile">
//               <Nav.Link className={styles.navLinkSpacing}>ShowProfile</Nav.Link>
//             </LinkContainer>
//           </Nav>
//           <Button variant="outline-primary" className={styles.loginBtn} onClick={handleShowLogin}>
//             <FaSignInAlt /> Login
//           </Button>
//         </BootstrapNavbar.Collapse>
//       </BootstrapNavbar>

//       <Modal show={showLogin} onHide={handleCloseLogin} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Login</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
          
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

// export default NavbarComponent;
