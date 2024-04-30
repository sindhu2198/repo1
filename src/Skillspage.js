import React from 'react';
import './SkillsPage.css'; // You will create and style this CSS file according to your needs
import flask from "./AllImages/flask.svg";
import "./Timelinepage"


function SkillsPage({ timelineRef, scrollToSection }) {
  // In real code, you would likely import these from a constants file or receive them as props
  const frontendSkills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' }
  ];

  const backendSkills = [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons…nwebservices/amazonwebservices-plain-wordmark.svg' }
  ];

  const frameworksSkills = [
    { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg' },
    { name: 'Node.js', icon: 'https://shubhambhagat.com/assets/img/nextjs__logo__dark.svg' },
    { name: 'Flask', icon: flask },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg' }
  ];

  const databaseSkills = [
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg' }
  ];

  const renderSkillSet = (skills) => (
    <div className="skills-set">
      {skills.map((skill, index) => (
        <div className="skill" key={index}>
          <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon"/>
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="skills-page-container">
      <h1 class="about-content__heading">Skills</h1>
      <div className="skills-wrapper">  {/* Wrapper for skill sections */}
        <section className="skill-section">
          <h2>Frontend Development</h2>
          {renderSkillSet(frontendSkills)}
        </section>
        <section className="skill-section">
          <h2>Backend Development</h2>
          {renderSkillSet(backendSkills)}
        </section>
        <section className="skill-section">
          <h2>Frameworks</h2>
          {renderSkillSet(frameworksSkills)}
        </section>
        <section className="skill-section">
          <h2>Database</h2>
          {renderSkillSet(databaseSkills)}
        </section>
      </div>
      <div class="footer__container">
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

export default SkillsPage;