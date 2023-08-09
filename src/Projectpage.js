import React, { useState } from "react";
import "./Projectpage.css";
import propic from "./AllImages/ratanpropic.jpg";
import "./Home.css"
import arrow from "./AllImages/right-arrow.png"
import yoga from "./AllImages/pdfDiyo-banner.png"
import ranker from "./AllImages/ranker-banner.png"
import cowsandbulls from "./AllImages/cowsandbulls.png";
import { Link } from 'react-router-dom';
import ProjectHighlights1 from "./ProjectHighlights_1";
import ProjectHighlights_1 from "./ProjectHighlights_1";

function Projectpage({ timelineRef, scrollToSection }) {
    const [scrollIndex, setScrollIndex] = useState(0);
  
    function showMoreProjects() {
        const scrollContainer = document.querySelector('.project-scroll-container');
        const scrollAmount = 960; // Card width plus margin (300px + 10px + 10px)
    
        // Toggle between 0 and 1 for scrollIndex
        const newScrollIndex = scrollIndex === 0 ? 1 : 0;
    
        // Scroll to the appropriate position based on scrollIndex
        scrollContainer.scrollLeft = newScrollIndex * scrollAmount;
    
        // Update the state
        setScrollIndex(newScrollIndex);
      }
  return (
    <div id="about" className="about-container">  
      <div className="content">
      <h1 className="about-content__heading">Personal Projects</h1>
      <div class="projects-container">
      <div class="project-scroll-container">
  <div class="project-card">
    
    <img src={yoga} alt="Project 1" />
    <h3>Project Title 1</h3>
    <div class="card-body">
    <p>A knowledge bank in the page of single page application built on Angular JS framework</p>
    </div>
    <div class="card-footer">
    <Link to="/project1">View Project</Link>
    </div>
  </div>

  <div class="project-card">
    <img src={ranker} alt="Project 2" />
    <h3>Project Title 2</h3>
    <div class="card-body">
    <p>Database management system project implemented using MySQL</p>
    </div>
    <div class="card-footer">
    <a href="link/to/project2" target="_blank">View Project</a>
    </div>
  </div>
  <div class="project-card">
    <img src={cowsandbulls} alt="Project 3" />
    <h3>Project Title 3</h3>
    <div class="card-body">
    <p>A codebreaking Android game that is developed using Java</p>
    </div>
    <div class="card-footer">
    <a href="link/to/project2" target="_blank">View Project</a>
    </div>
  </div>
  <div class="project-card hidden">
  <img src="path/to/project4/imag4.jpg" alt="Project 4" />
    <h3>Project Title 4</h3>
    <div class="card-body">
    <p>A knowledge bank in the page of single page application built on Angular JS framework</p>
    </div>
    <div class="card-footer">
    <a href="link/to/project2" target="_blank">View Project</a>
    </div>
  </div>
  <div class="project-card hidden">
  <img src="path/to/project5/imag5.jpg" alt="Project 5" />
    <h3>Project Title 5</h3>
    <div class="card-body">
    <p>A knowledge bank in the page of single page application built on Angular JS framework</p>
    </div>
    <div class="card-footer">
    <a href="link/to/project2" target="_blank">View Project</a>
    </div>
  </div>
  <div class="project-card hidden">
  <img src="path/to/project6/imag6.jpg" alt="Project 6" />
    <h3>Project Title 6</h3>
    <div class="card-body">
    <p>A knowledge bank in the page of single page application built on Angular JS framework</p>
    </div>
    <div class="card-footer">
    <a href="link/to/project2" target="_blank">View Project</a>
    </div>
  </div>
  </div>
  <button id="show-more-btn" onClick={showMoreProjects}>
    <img src={arrow} alt="Show More" />
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



  
