import React from "react";
import "./Aboutpage.css";
import propic from "./AllImages/propic.jpg";

function Aboutpage() {
  return (
    
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          I am a passionate web developer with expertise in front-end
          development. I love creating beautiful and interactive user
          interfaces using modern web technologies.
        </p>
        <p>
          With several years of experience in the field, I have worked on
          various projects, both individually and as part of a team. My skills
          include HTML, CSS, JavaScript, React, and more.
        </p>
        <p>
          In addition to web development, I also have a strong interest in
          design and UI/UX principles. I strive to create visually appealing
          and user-friendly websites that deliver a seamless experience.
        </p>
        <p>
          If you have any questions or would like to collaborate, feel free to
          get in touch with me. I'm always open to new opportunities and
          exciting projects.
        </p>
        <div className="profile-image">
          <img src={propic} alt="Profile" />
        </div>
      </div>
    
  );
}

export default Aboutpage;
