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
        <Link to="/">
          <img src="logo.png" alt="Logo" className="logo" />
        </Link>
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
        <span className="slash">/</span>
        <Link to="/groom">Groom</Link>
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
