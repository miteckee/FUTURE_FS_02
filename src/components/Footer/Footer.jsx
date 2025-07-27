import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Ratnesh Kumar Mandal. All rights
        reserved.
      </p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
        <Link to="/contact" className="footer-link">
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
