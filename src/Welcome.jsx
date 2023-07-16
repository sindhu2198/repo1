import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from "react-router-dom";

function Welcome() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      '.c',
      { opacity: 0, scale: 0.5 }, // Start from opacity: 0 and small scale (0)
      { opacity: 1, scale: 1, duration: 0 } // Grow to full scale (1) and opacity: 1 in 1 second
    )

    
    // Slide to the left after delay of 1.5s
 

  }, []);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,350;1,300;1,500&display=swap');
        `}
      </style>
      <h1 className="welcome-message">Ratan Tejaswi</h1>

      
    </>

    
  );

  
}

export default Welcome;