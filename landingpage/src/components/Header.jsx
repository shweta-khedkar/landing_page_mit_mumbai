import React from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="navbar fixed-top bg-white shadow-sm">
      {/* your header content */}

      <header className="header-container">
        <div className="header-content">
          <div className="logo-section">
            <a href="/" className="flex items-center">
              <img src={logo} alt="Company Logo" className="logo-image" />
            </a>
          </div>
          <div className="admission-btn-section">
            <a href="/" className="admission-btn">
              Admissions Open for 2025-26
            </a>
          </div>
          <div className="social-icons">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="tel:7066670405"
                  className="social-link"
                  aria-label="Phone"
                >
                  <FaPhone className="social-icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=7066670405"
                  className="social-link"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="social-icon" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:admissions@mitmumbai.com"
                  className="social-link"
                  aria-label="Email"
                >
                  <MdEmail className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Header;
