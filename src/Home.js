import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Footprints from "./Footprints";
import { gsap, Power1 } from "gsap";
import ColorSplash from "./ColorSplash";
import CardSlider from "./CardSlider";
import Welcome from "./Welcome";
import yogaImage from "./AllImages/5184243.jpg";

function Home() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [activeNav, setActiveNav] = useState(null);
  const [contentBackgroundColor, setContentBackgroundColor] = useState("#ffd0d5"); // Background color for the content section

  const [showWelcome, setShowWelcome] = useState(false);
  const [showCardSlider, setShowCardSlider] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0); // New state variable for active card index
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

  const cards = [
    {
      title: "Card 1",
      image: yogaImage,
      cardColor: "#FFFDD0", // Color for Card 1
      contentColor: "#ffd0d5", // Background color for Card 1 content
    },
    {
      title: "Card 2",
      image: "path-to-card-2-image",
      cardColor: "#d5ffdc", // Color for Card 2
      contentColor: "#e9f5e8", // Background color for Card 2 content
    },
    {
      title: "Card 3",
      image: "path-to-card-3-image",
      cardColor: "#d5e8ff", // Color for Card 3
      contentColor: "#eaf2f9", // Background color for Card 3 content
    },
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowWelcome(true);
    }, 1500);

    const timer2 = setTimeout(() => {
      setShowWelcome(false);
      setShowCardSlider(true);
    }, 3000); // Adjust the time as needed

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const contentColor = cards[activeCardIndex].contentColor; // Get the background color from the active card
    setContentBackgroundColor(contentColor);
  }, [activeCardIndex]);

  return (
    <div className="app">
      <header className="header">
        <div className="logo">FITNESS PAD</div>
        <nav>
          <ul className="nav-list">
            <li>
              <button
                className={`nav-button ${activeNav === "about" ? "active" : ""}`}
                onClick={() => handleNavigation(aboutRef)}
                onMouseEnter={() => handleHover("about")}
                onMouseLeave={handleHoverOut}
              >
                About
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
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <div className="content" style={{ backgroundColor: contentBackgroundColor }}>
      {showWelcome && (
        <>
          <Welcome />
          <ColorSplash color={contentBackgroundColor} />
        </>
      )}
      {showCardSlider && (
        <CardSlider cards={cards} setActiveCardIndex={setActiveCardIndex} />
      )}
    </div>
    </div>
  );
}

export default Home;