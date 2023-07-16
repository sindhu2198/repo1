import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import "./Hamburger.css";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";
import { ReactComponent as Logo } from "./AllImages/home2.svg";
import Aboutpage from "./Aboutpage";


function Home() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const timelineRef = useRef(null);
  const resumeRef = useRef(null);
  const [activeNav, setActiveNav] = useState(null);
  const [navVisible, setNavVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false); 

  const [showWelcome, setShowWelcome] = useState(false);
  const [showCardSlider, setShowCardSlider] = useState(false);
  const duration = 2;

  const handleNavigation = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleHover = (nav) => {
    setActiveNav(nav);
  };

  const handleHoverOut = () => {
    setActiveNav(null);
  };

  const handleNavToggle = () => {
    setNavVisible(!navVisible);
    setMenuOpen(!isMenuOpen); // update the menu open status
  };

  

  const handleWelcomeAnimationEnd = () => {
    setShowWelcome(false);
  };

  useEffect(() => {
    const shootingStars = document.querySelectorAll('.shooting_star');

    const timer = setTimeout(() => {
      // Remove animation from each shooting star
      shootingStars.forEach((star) => {
        star.style.animation = 'none';
      });

      setShowWelcome(true); // Showing the welcome message
    }, 5000);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <header className="header">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,350;1,300;1,500&display=swap');
        `}
      </style>
      <Link to="/" className="logo">
          <Logo className="logo-svg" fill="#ffffff" />
        </Link>

        <nav>
          <div className="hamburger-menu-container" onClick={handleNavToggle}>
            <div className="hamburger-icon">
              <div className="icon-line"></div>
              <div className="icon-line"></div>
              <div className="icon-line"></div>
            </div>
          </div>
           {/* Only display the menu when the hamburger menu is clicked */}
           {isMenuOpen && (
              <div className="menu-items">
                <Link to="/about" className="menu-item">About</Link>
                <Link to="/Projects" className="menu-item">Projects</Link>
                <Link to="/Timeline" className="menu-item">Timeline</Link>
                <Link to="/Resume" className="menu-item">Resume</Link>
                <Link to="/Contact" className="menu-item">Contact</Link>

              </div>
            )}
            <ul className="nav-list">
          
              {/* <li>
                <button
                  className={`nav-button ${activeNav === "about" ? "active" : ""}`}
                  onClick={() => handleNavigation(aboutRef)}
                  onMouseEnter={() => handleHover("about")}
                  onMouseLeave={handleHoverOut}
                >
                  ABOUT
                </button>
              </li> */}
              <li>
              <button className="nav-button" onClick={() => handleNavigation(aboutRef)}>
               ABOUT
              </button>
            </li>

              
              <li>
                <button
                  className={`nav-button ${
                    activeNav === "projects" ? "active" : ""
                  }`}
                  onClick={() => handleNavigation(projectRef)}
                  onMouseEnter={() => handleHover("projectRef")}
                  onMouseLeave={handleHoverOut}
                >
                  PROJECTS
                </button>
                
              </li>
              <li>
                <button
                  className={`nav-button ${
                    activeNav === "timeline" ? "active" : ""
                  }`}
                  onClick={() => handleNavigation(timelineRef)}
                  onMouseEnter={() => handleHover("Timeline")}
                  onMouseLeave={handleHoverOut}
                >
                  TIMELINE
                </button>
                
              </li>
              <li>
                <button
                  className={`nav-button ${
                    activeNav === "contact" ? "active" : ""
                  }`}
                  onClick={() => handleNavigation(resumeRef)}
                  onMouseEnter={() => handleHover("resume")}
                  onMouseLeave={handleHoverOut}
                >
                  RESUME
                </button>
                
              </li>
              <li>
                <button
                  className={`nav-button ${
                    activeNav === "contact" ? "active" : ""
                  }`}
                  onClick={() => handleNavigation(contactRef)}
                  onMouseEnter={() => handleHover("contact")}
                  onMouseLeave={handleHoverOut}
                >
                  CONTACT
                </button>
                
              </li>
            </ul>
          
        </nav>
      </header>
      <div className="content">
        {showWelcome && (
          <Welcome />
        )}
      </div>

      {/* <div className="about-container">
        <Aboutpage />
      </div> */}

      <footer>
        <div className="night">
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
          <div className="shooting_star"></div>
        </div>
        <Link to="#scroll-target" className="arrow-link">
          <div className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="Panel__arrow"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z" fill="#ffffff"></path></svg>
          </div>
        </Link>
        <div id="scroll-target">
          {/* Content to scroll to */}
        </div>
      </footer>
       


      
    </div>
  );
}

export default Home;