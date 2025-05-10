import React from "react";
import "./VideoBackground.css";
import video from "../assets/mit_video_landingpage.mp4";

const VideoBackground = ({ isBlurred, isModalOpen }) => {
  return (
    <div className={`video-container ${isBlurred ? "blurred" : ""}`}>
      <video autoPlay muted loop className="video-background">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Overlay */}
      {!isModalOpen && (
        <div className="overlay-text">
          <h1>Welcome to MAEER'S MIT MUMBAI</h1>
          <p>
            Welcome to MAEER'S MIT MUMBAI With over 40 years of academic
            excellence and a global alumni network exceeding 100,000, MIT is a
            premier engineering institute approved by AICTE and affiliated with
            top Indian universities. Known for its commitment to innovation and
            quality education, MIT empowers students to meet global challenges
            through cutting-edge learning experiences.
          </p>
          <p>
            Extending the legacy of MIT Pune, we are proud to launch our new
            Engineering College in the Mumbai Metropolitan Region from the
            academic year 2025–2026. Set in a nature-inspired campus, the
            institute offers advanced infrastructure, expert faculty, and a
            dynamic learning environment that promotes holistic development.
          </p>
          <p className="d-none d-md-block">
            At MIT Mumbai, education is more than a degree it's a transformative
            journey toward professional and personal excellence.
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
