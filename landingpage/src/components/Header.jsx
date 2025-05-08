import React from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-section">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Company Logo"
              className="logo-image"
            />
          </a>
        </div>
        <div className="admission-btn-section">
          <a href="#admission" className="admission-btn">
            Admissions Open for 2025-26
          </a>
        </div>
        <div className="social-icons">
          <ul className="flex space-x-4">
            <li>
              <a href="tel:+911234567890" className="social-link" aria-label="Phone">
                <FaPhone className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/911234567890" className="social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="social-icon" />
              </a>
            </li>
            <li>
              <a href="mailto:info@example.com" className="social-link" aria-label="Email">
                <MdEmail className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
