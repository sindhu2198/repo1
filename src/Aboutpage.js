import React from "react";
import "./Aboutpage.css";
import propic from "./AllImages/sindhu-bg-color.png";
import "./Home.css";
import "./Projectpage";

function Aboutpage({ projectRef, scrollToSection }) {

  return (
    <div id="about" className="about-container">  
       <h1 className="about-content__heading">About Me</h1>
      <div className="about-content">
      <div className="about-profile-image">
          <img src={propic} alt="Profile" />
        </div>
   
        <div className="description">
          <p>I'm a full-stack web developer with expertise in a range of technologies, from front-end frameworks to back-end languages and database management. With a strong foundation in software engineering, I constantly push myself to learn new techniques and adopt industry best practices.
            I worked as a 
            software developer at a Big 4 Company, Deloitte, where I learned from the best and had the opportunity to collaborate with top-tier professionals on impactful projects. Currently, I'm expanding my data expertise by pursuing a Master's degree in Data Science at Indiana University Bloomington.
          </p>
          <p>I'm a full-stack web developer with expertise in a range of technologies, from front-end frameworks to back-end languages and database management. With a strong foundation in software engineering, I constantly push myself to learn new techniques and adopt industry best practices.
            I worked as a 
            software developer at a Big 4 Company, Deloitte, where I learned from the best and had the opportunity to collaborate with top-tier professionals on impactful projects. Currently, I'm expanding my data expertise by pursuing a Master's degree in Data Science at Indiana University Bloomington.
          </p>
        
   
        </div>
        
        
      </div>
      <div class="footer__container">
   <button
       className="arrow-link"
       onClick={() => scrollToSection(projectRef)}
   >
       <div className="arrow">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="Panel__arrow"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z" fill="#ffffff"></path></svg>
       </div>
   </button>
</div>

      
    </div>
  );
}

export default Aboutpage;
