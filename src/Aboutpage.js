import React from "react";
import "./Aboutpage.css";
import propic from "./AllImages/ratanpropic.jpg";
import "./Home.css";
import "./Projectpage";

function Aboutpage({ projectRef, scrollToSection }) {

  return (
    <div id="about" className="about-container">  
      <div className="content">
      <h1 className="about-content__heading">About Me</h1>
        <div className="description">
        <p>As a Master of Science in Computer Science student at Indiana University Bloomington, I am passionate about developing innovative and user-friendly applications for iOS and Android platforms. I have a strong background in Swift, Python, Java, and MySQL, and I am eager to learn new technologies and frameworks.</p>
    <p>Previously, I worked as an Associate Software Engineer at Bosch Global Software Technologies, where I handled the full stack development and deployment of the Bosch Levelling Remote App, being the only iOS developer in the team. I also developed a proof-of-concept app that plots the land topography from the data from a Bosch Measuring tool, using Android Studio. Additionally, I have interned at Tata Technologies and Verzeo, where I gained valuable experience in data mining, charting, web development, and RabbitMQ.</p>
   
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
