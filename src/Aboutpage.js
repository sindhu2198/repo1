import React from "react";
import "./Aboutpage.css";
import propic from "./AllImages/propic.jpg";
import "./Home.css"

function Aboutpage({ projectRef, scrollToSection }) {
  return (
    <div id="about" className="about-container">  
      <div className="about-content">      
        <div className="description">
          <h1>About Me</h1>
          <p>Your description goes here.</p>
        </div>
        <div className="profile-image">
          <img src={propic} alt="Profile" />
        </div>
      </div>
      <div className="footer__container">
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
