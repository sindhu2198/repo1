
        
   

import React from "react";
import "./HeroSection.css";
import propic from "./AllImages/sindhupropic2.jpg";
import { Roleframe } from "./Roleframe";

export const HeroSection = ({ className, projectRef }) => {
  // Scroll to the projects section
  const scrollToProjects = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  

  return (
    <div className={`hero-section ${className}`}>
      <div className="home-page-content">
        <div className="hi-i-m-ratan-tejaswi-vadapalli">
          Hi, I’m Durga Sindhu Animalla
          <Roleframe className="roleframe" />
        </div>
        <div className="text">
        Welcome to my digital portfolio! I'm Durga Sindhu Animalla, a Full Stack developer with a passion for full stack web development. I hold a Master's in Data Science from Indiana University Bloomington and have a proven track record from my time at Deloitte, where I led the development of impactful applications.
I specialize in turning complex technical challenges into intuitive solutions. Dive into my world of innovative app development, where technology meets creativity and real-world challenges are transformed into seamless digital experiences!
        </div>
        <div className="see-my-work-button-container">
        <div className="rectangle-1"></div>
          <button
            className="see-my-work"
            onClick={() => scrollToProjects(projectRef)}
          >
            See My Work
          </button>
        </div>
      </div>
      <div className="profile-image">
        <img src={propic} alt="Profile" />
      </div>
    </div>
  );
};
