import React, { useState, useEffect } from "react";
import "./Projectpage.css";
import movies from "./AllImages/movies.jpg";
import deepfake from "./AllImages/deepfake.png";
import diet from "./AllImages/diet.jpg"
import flight from "./AllImages/flight.png";
import powerbi from "./AllImages/crimedata.jpg";
import dietplanner from "./AllImages/dietplanner.png";
import Sentimental from "./AllImages/sentiment-analysis.png";
import arrow from "./AllImages/right-arrow.png";
import "./Skillspage";
import { Link } from 'react-router-dom';

const projects = [
  { src: movies, title: 'Filmpire', description: 'Filmpire offers a comprehensive database of movies, TV shows, actors, and more, powered by the TMDB API. Explore detailed information, reviews, trailers, and ratings to enhance your viewing experience',  techStack: ['ReactJS','HTML/CSS','Javascript', 'Firebase', 'MovieDB API'] },
  { src: diet, title: 'HealthMate', description: 'Healthmate enables users to track various aspects of their wellness and fitness, as well as access workout programs and resources online to improve their physical and mental health.', techStack: ['MongoDb', 'Express', 'ReactJS', 'NodeJS'] },
  { src: powerbi, title: 'Crime Analytics using PowerBI', description: ' Built with Power BI, it provides dynamic visualizations of crime patterns, trends, and locations in Los Angeles, aiding in strategic decision-making for law enforcement',  techStack: ['PowerBi', 'CSV'] },
  { src: Sentimental, title: 'Sentiments of users on wild animal welfare', description: 'Sentiment analysis on societal perceptions and attitudes toward wild animal welfare.', techStack: ['Data extraction','VADER', 'EMPATH', 'Sentimental Analysis']},
  { src: flight, title: 'Prediction of Flight Cancellation', description: 'Prediction of flight cancellation using SMOTE Analysis, Regression and different classifiers.', techStack: ['Python', 'SKLearn', 'Pandas','Regression'] },
  { src: deepfake, title: 'Reddit Deepfake Network Analysis', description: 'Network Analysis and Topic Modeling on Deepfake technology using NLP techniques.',  techStack: ['Python', 'NLP', 'NetworkX'] },
  
];

function Projectpage({ skillsRef, scrollToSection }) {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 750);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  function showMoreProjects() {
    const newIndex = (scrollIndex + 3) % projects.length;
    setScrollIndex(newIndex);
  }

  return (
    <div className="projects-big-container">
      <h1 className="about-content__heading">Personal Projects</h1>
      <div className="projects-container">
        <div className="project-scroll-container">
        {isMobile ? projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.src} alt={`Project ${index + 1}`} className="project-image" />
              <div className="project-info">
                <div className="project-title">{project.title}</div>
                <p className="project-description">{project.description}</p>
                <p className="project-tech-stack">Tech Stack: {project.techStack.join(', ')}</p>
                <div className="card-footer">
                <Link to={`/project${index + 1}`}>View Project</Link>
              </div>
              </div>
              
            </div>
          )):
          projects.slice(scrollIndex, scrollIndex + 3).map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.src} alt={`Project ${index + 1}`} className="project-image" />
              <div className="project-info">
                <div className="project-title">{project.title}</div>
                <p className="project-description">{project.description}</p>
                <p className="project-tech-stack">Tech Stack: {project.techStack.join(', ')}</p>
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
       onClick={() => scrollToSection(skillsRef)}
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



  
