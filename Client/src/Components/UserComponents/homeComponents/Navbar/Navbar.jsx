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
        <h2 style={{color:'white'}}>Maratha Vishw</h2>
      </div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={toggleMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>

        <li>
        <Link to="/briedcard" onClick={toggleMenu}>Bride</Link>
        </li>

        <li>
        <Link to="/groom" onClick={toggleMenu}>Groom</Link>
        </li>

        {/* <li>
        <Link to="/language">Language</Link>
        </li> */}
      </div>
      <div className="navbar-login">
        <Link to="/login" className="login-button">
          Login
        </Link>
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

