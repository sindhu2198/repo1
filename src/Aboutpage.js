import React from "react";
import "./Aboutpage.css";
import propic from "./AllImages/sindhu-bg-color.png";
import sindhupic from "./AllImages/sindhupic.jpeg";
import "./Home.css";
import "./Projectpage";

function Aboutpage({ projectRef, scrollToSection }) {

  return (
    <div id="about" className="about-container">  
       <h1 className="about-content__heading">About Me</h1>
      <div className="about-content">
      <div className="about-profile-image">
          <img src={sindhupic} alt="Profile" />
        </div>
   
        <div className="description">
          <p>
          I'm Durga Sindhu Animalla, a full-stack web developer with expertise across a broad range of technologies, from front-end frameworks like React.js to back-end languages such as Python and Java. With a solid foundation in software engineering, I continually challenge myself to learn new techniques, stay updated on industry trends, and deliver efficient, scalable solutions. My experience includes working as a software developer at Deloitte, one of the Big 4 consulting firms, where I collaborated with industry-leading professionals to develop and deploy impactful projects. My time at Deloitte helped sharpen my skills in developing secure, scalable applications while contributing to cross-functional teams.

          </p>
          <p>I've recently earned a Master's in Data Science from Indiana University Bloomington, where I deepened my knowledge of data mining, statistical analysis, and machine learning. During my studies, I completed a range of innovative projects. I'm always striving to blend my passion for data science and full-stack development to create seamless, data-driven user experiences. My goal is to continue leveraging my unique combination of skills to tackle new challenges and drive meaningful impact.
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
