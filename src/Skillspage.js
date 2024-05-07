import React from 'react';
import './SkillsPage.css'; // You will create and style this CSS file according to your needs
import flask from "./AllImages/flask.svg";
import aspnet from "./AllImages/aspnet.svg"
import aws from "./AllImages/aws.svg";
import "./Timelinepage"
import { useEffect, useRef } from 'react';


function SkillsPage({ timelineRef, scrollToSection }) {
    const skillRefs = useRef([]);
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
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'AWS', icon: aws }
  ];

  const frameworksSkills = [
   
    { name: 'Node.js', icon: 'https://shubhambhagat.com/assets/img/nextjs__logo__dark.svg' },
    { name: 'Streamlit', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg' },
    { name: 'ASP.net', icon: aspnet },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg' }
  ];

  const databaseSkills = [
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg' },
    { name: 'DynamoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('zoomIn');
          } else {
            entry.target.classList.remove('zoomIn');
          }
        });
      },
      {
        root: null, // Default setting to check visibility in the viewport
        rootMargin: '0px',
        threshold: 0.1 // Consider lowering the threshold if elements are not triggering as expected
      }
    );
  
    const elements = document.querySelectorAll('.skill'); // Make sure all '.skill' elements are selected
    elements.forEach(element => observer.observe(element));
  
    return () => elements.forEach(element => observer.unobserve(element));
  }, []);
  
  const renderSkillSet = (skills) => (
    <div className="skills-set">
      {skills.map((skill, index) => (
        <div className="skill" ref={el => skillRefs.current[index] = el} key={index}>
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