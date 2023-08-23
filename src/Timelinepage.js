import React, { useState } from "react";
import "./Projectpage.css";
import yoga from "./AllImages/pdfDiyo-banner.png";
import ranker from "./AllImages/ranker-banner.png";
import cowsandbulls from "./AllImages/cowsandbulls.png";
import arrow from "./AllImages/right-arrow.png";
import { Link } from 'react-router-dom';
import "./Timelinepage.css";

const projects = [
  { src: yoga, title: 'Project Title 1', description: 'A knowledge bank in the page of a single page application built on Angular JS framework.' },
  { src: ranker, title: 'Project Title 2', description: 'Database management system project implemented using MySQL.' },
  { src: cowsandbulls, title: 'Project Title 3', description: 'A codebreaking Android game that is developed using Java.' },
  { src: 'path/to/project4/imag4.jpg', title: 'Project Title 4', description: 'Description for project 4.' },
  { src: 'path/to/project5/imag5.jpg', title: 'Project Title 5', description: 'Description for project 5.' },
  { src: 'path/to/project6/imag6.jpg', title: 'Project Title 6', description: 'Description for project 6.' }
];


function Timelinepage({ contactRef, scrollToSection }) {
    const [scrollIndex, setScrollIndex] = useState(0);
  
    function showMoreProjects() {
      const scrollContainer = document.querySelector('.project-scroll-container');
      const scrollAmount = 960; // Width of three cards plus their margins
  
      // Toggle between 0 and 1 for scrollIndex
      const newScrollIndex = scrollIndex === 0 ? 1 : 0;
  
      // Scroll to the appropriate position based on scrollIndex
      scrollContainer.scrollLeft = newScrollIndex * scrollAmount;
  
      // Update the state
      setScrollIndex(newScrollIndex);
    }

    return (
        <div id="about" className="timeline-container">  
           <div className="timeline-content">
          <h1 className="timeline-content__heading">Timeline</h1>
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
    
         
        </div>
      );
    }
    
    export default Timelinepage;
    
    
    
      
    