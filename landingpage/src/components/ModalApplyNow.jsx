import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./applynow.css"; // Import your CSS file for styling

const ModalApplyNow = ({ onClose }) => {
  const form = useRef();

  useEffect(() => {
    const modalEl = document.getElementById("applyNowModal");
    const modal = new window.bootstrap.Modal(modalEl);
    modal.show();

    // Apply blur
    document.body.style.overflow = "hidden";
    document.getElementById("blur-container").classList.add("blurred");

    // Cleanup on close
    const handleClose = () => {
      document.body.style.overflow = "auto";
      document.getElementById("blur-container").classList.remove("blurred");

      // Remove leftover backdrop
      const backdrop = document.querySelector(".modal-backdrop");
      if (backdrop) {
        backdrop.parentNode.removeChild(backdrop);
      }

      onClose();
    };

    modalEl.addEventListener("hidden.bs.modal", handleClose);

    return () => {
      document.body.style.overflow = "auto";
      document.getElementById("blur-container").classList.remove("blurred");

      const backdrop = document.querySelector(".modal-backdrop");
      if (backdrop) {
        backdrop.parentNode.removeChild(backdrop);
      }

      modalEl.removeEventListener("hidden.bs.modal", handleClose);
    };
  }, [onClose]);

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
        const modalEl = document.getElementById("applyNowModal");
        const modal = window.bootstrap.Modal.getInstance(modalEl);
        modal.hide();
      })
      .catch(() => alert("❌ Something went wrong. Please try again."));
  };

  return (
    <div
      className="modal fade"
      id="applyNowModal"
      tabIndex="-1"
      aria-labelledby="applyNowModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content p-4">
          <div className="modal-header">
            <h5 className="modal-title" id="applyNowModalLabel">
              Apply Now / Enquire Now
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
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
                  className="form-select"
                  id="program"
                  name="program"
                  required
                >
                  <option value="">-- Choose a Program --</option>
                  <option value="CSE AI">
                    Computer Science and Engineering - AI & ML
                  </option>
                  <option value="CSE DS">Computer Science Engineering</option>
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

              <button type="submit" className="btn btn-primary">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalApplyNow;
