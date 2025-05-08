import React from "react";
import "./programs.css";
import aiml from "../assets/ai_ml.jpg";
import compscience from "../assets/comp_science.jpg";
import et from "../assets/et.jpg";
import it from "../assets/it.jpg";
const ProgramsSection = () => {
  return (
    <section className="undergrad-section">
      <div className="container programme-list">
        <h2 data-aos="fade-down">Our Undergraduate Programmes</h2>

        <div className="programme-cards">
          <div className="card" data-aos="fade-up">
            <img src={aiml} alt="CSE AI" />
            <div className="card-body">
              <h5 className="card-title">
                Computer Science And Engineering (AI/ML)
              </h5>
              <p className="card-text">
                Learn cutting-edge AI, ML, and automation techniques.
              </p>
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <img src={compscience} alt="CSE DS" />
            <div className="card-body">
              <h5 className="card-title">Computer Science And Engineering</h5>
              <p className="card-text">
                Gain proficiency in networks, cybersecurity, and scalable system
                solutions.
              </p>
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <img src={et} alt="Electronics Engineering" />
            <div className="card-body">
              <h5 className="card-title">Electronics Engineering</h5>
              <p className="card-text">
                Design the future with embedded systems and IoT.
              </p>
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <img src={it} alt="Information Technology" />
            <div className="card-body">
              <h5 className="card-title">Information Technology</h5>
              <p className="card-text">
                Develop full-stack applications and cloud solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
