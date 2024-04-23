import React, { useState } from "react";
import "./Projectpage.css";
import employee_prj from "./AllImages/employee_prj.png";
import deepfake from "./AllImages/deepfake.png";
import flight from "./AllImages/flight.png";
import powerbi from "./AllImages/powerbi.png";
import dietplanner from "./AllImages/dietplanner.png";
import Sentimental from "./AllImages/sentiment-analysis.png";
import arrow from "./AllImages/right-arrow.png";
import { Link } from 'react-router-dom';

const projects = [
  { src: employee_prj, title: 'Skill Snapshot', description: 'A web application that tracks employee performance and provides insightful feedback.' },
  { src: flight, title: 'Prediction of Flight Cancellation', description: 'Prediction of flight cancellation using SMOTE Analysis, Regression and different classifiers.' },
  { src: deepfake, title: 'Reddit Deepfake Network Analysis', description: 'Network Analysis and Topic Modeling on Deepfake technology using NLP techniques.' },
  { src: Sentimental, title: 'Sentiments of users on wild animal welfare', description: 'Sentiment analysis on societal perceptions and attitudes toward wild animal welfare.' },
  { src: powerbi, title: 'HR Analytics using Power BI', description: 'An end-to-end analytics and reporting solution built on Power BI to derive HR insights for decision making.' },
  { src: dietplanner, title: 'UI Diet Planner Bot', description: 'An AI-driven diet planner bot powered by UiPath, streamlining personalized nutrition guidance.' }
];

function Projectpage({ timelineRef, scrollToSection }) {
  const [scrollIndex, setScrollIndex] = useState(0);
  
  function showMoreProjects() {
    const newIndex = (scrollIndex + 3) % projects.length;
    setScrollIndex(newIndex);
  }

  return (
    <div className="about-container">
      <h1 className="about-content__heading">Personal Projects</h1>
      <div className="projects-container">
        <div className="project-scroll-container">
          {projects.slice(scrollIndex, scrollIndex + 3).map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.src} alt={`Project ${index + 1}`} className="project-image" />
              <div className="project-info">
                <div className="project-title">{project.title}</div>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="card-footer">
                <Link to={`/project${scrollIndex + index + 1}`}>View Project</Link>
              </div>
            </div>
          ))}
        </div>
        <button className="show-more-btn" onClick={showMoreProjects}>
          <img src={arrow} alt={scrollIndex === 0 ? "Show More" : "Show Less"} />
        </button>
      </div>
 
      <div className="footer__container">
   <button
       className="arrow-link"
       onClick={() => scrollToSection(timelineRef)}
   >
       <div className="arrow">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="Panel__arrow"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z" fill="#ffffff"></path></svg>
       </div>
   </button>
</div>
    </div>
  );
}

export default Projectpage;



  
