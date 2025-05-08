import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa"; // Install with: npm install react-icons
import "./footer.css"; // Create this CSS file for styling
const Footer = () => {
  return (
    <section className="mit-footer text-light py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <h5 className="mb-3 mb-md-0 fw-bold blacktxt">
          {" "}
          MAEER'S MIT MUMBAI 2025–26
        </h5>
        <div className="social-icons d-flex gap-3">
          <a
            href="https://www.instagram.com/mitengineeringofficial?igsh=MTZkamo3ajNub3V2bg=="
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/18vkLkHMVZ/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/company/mit-engineering-mumbai/about/?viewAsMember=trues"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
