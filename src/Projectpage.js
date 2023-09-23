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
  { src: employee_prj, title: 'Skill Snapshot',description: 'A web application that tracks the employee performance and provide insightful feedback  '},
  { src: flight, title: 'Prediction of Flight Cancellation', description: 'Prediction of Flight cancellation using SMOTE Analysis, Regression and different classifiers' },
  { src: deepfake, title: 'Reddit Deepfake Network Analysis',description:'Network Analysis and Topic Modeling on Deepfake technology using NLP techniques' },
  { src: Sentimental, title: 'Sentiments of users on wild animal welfare', description: 'Sentiment analysis on societal perceptions and attitudes toward the wild animals welfare' },
  { src: powerbi, title: 'HR Analytics using Power BI', description: 'A end-to-end analytics and reporting solution built on Power BI to derive HR insights for decision making.' },
  { src: dietplanner, title: 'UI Diet Planner Bot', description: 'An AI-driven diet planner bot powered by UiPath, streamlining personalized nutrition guidance' }];
  

function Projectpage({ timelineRef, scrollToSection }) {
  const [scrollIndex, setScrollIndex] = useState(0);

  function showMoreProjects() {
    
      const card = document.querySelector('.project-card');
      const cardWidthIncludingGap = card.offsetWidth + 20;  // Adding the 20px gap
  
      const scrollAmount = cardWidthIncludingGap * 3;  // For 3 cards. No need to subtract the gap.
      
      // Now, you want to set the scrollLeft such that it shows projects 4, 5, and 6
      // without any parts of project 3 visible.
      const newScrollPosition = scrollIndex === 0 ? scrollAmount : 0;
      
      const scrollContainer = document.querySelector('.project-scroll-container');
      scrollContainer.scrollLeft = newScrollPosition;
  
      // Toggle scrollIndex
      setScrollIndex(scrollIndex === 0 ? 1 : 0);
  
  
}


  return (
    <div id="about" className="about-container">  
       <div className="content">
      <h1 className="about-content__heading">Personal Projects</h1>
      <div className="projects-container">
        <div className="project-scroll-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.src} alt={`Project ${index + 1}`} />
              <h3>{project.title}</h3>
              <div className="card-body">
                <p>{project.description}</p>
              </div>
              <div className="card-footer">
                <Link to={`/project${index + 1}`}>View Project</Link>
              </div>
            </div>
          ))}
        </div>
        <button id="show-more-btn" onClick={showMoreProjects}>
          <img src={arrow} alt={scrollIndex === 0 ? "Show More" : "Show Less"} />
        </button>
      </div>
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



  
