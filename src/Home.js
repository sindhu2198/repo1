import React, { useRef, useState } from "react";
import './Home.css';
import { Link } from "react-router-dom";


function Home() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [activeNav, setActiveNav] = useState(null);

  const handleNavigation = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleHover = (nav) => {
    setActiveNav(nav);
  };

  const handleHoverOut = () => {
    setActiveNav(null);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">SKILL SNAPSHOT</div>
        <nav>
          <ul className="nav-list">
            <li>
              <button 
                className={`nav-button ${activeNav === 'about' ? 'active' : ''}`} 
                onClick={() => handleNavigation(aboutRef)}
                onMouseEnter={() => handleHover('about')}
                onMouseLeave={handleHoverOut}
              >
                About
              </button>
            </li>
            <li>
              <button 
                className={`nav-button ${activeNav === 'contact' ? 'active' : ''}`} 
                onClick={() => handleNavigation(contactRef)}
                onMouseEnter={() => handleHover('contact')}
                onMouseLeave={handleHoverOut}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>
     
      <div className="content">
      
      </div>

      <div ref={aboutRef} className="about">
        <h1>About</h1>
        <p>
          hello
        </p>
      </div>
    </div>
  );
}

export default Home;