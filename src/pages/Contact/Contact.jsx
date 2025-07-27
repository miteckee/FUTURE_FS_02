import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>
        Email:{" "}
        <a href="mailto:your.email@example.com">mickymx5@gmail.com.com</a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/ratnesh-mandal-158092320/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/Ratnesh Kumar Mandal
        </a>
      </p>
      <p>
        HackerRank:{" "}
        <a
          href="https://www.hackerrank.com/profile/mickymx5"
          target="_blank"
          rel="noopener noreferrer"
        >
          hackerrank.com/Ratnesh Kumar
        </a>
      </p>
    </div>
  );
};

export default Contact;
