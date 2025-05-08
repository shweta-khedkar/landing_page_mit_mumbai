import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import "./applynow.css";
import indexbg from "../assets/heroimg.jpg"; // Adjust the path as necessary

const ModalApplyNow = ({ onClose }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_f9m3lwq",
        "template_896vyg6",
        form.current,
        "tTYTcXGIhVuzVeOkp"
      )
      .then(() => {
        alert("✅ Enquiry submitted successfully!");
        form.current.reset();
        onClose(); // Close modal after submission
      })
      .catch(() => alert("❌ Something went wrong. Please try again."));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="apply-card">
          <div className="apply-form">
            <h2 className="apply_h2">Apply Now</h2>

            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="program" className="form-label">
                  Select Program
                </label>
                <select
                  className="form-control"
                  id="program"
                  name="program"
                  required
                >
                  <option value="">-- Choose a Program --</option>
                  <option value="CSE AI">
                    Computer Science and Engineering (AI/ML)
                  </option>
                  <option value="CSE DS">
                    Computer Science and Engineering
                  </option>
                  <option value="Electronics">Electronics Engineering</option>
                  <option value="IT">Information Technology</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" className="btn-apply">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalApplyNow;
