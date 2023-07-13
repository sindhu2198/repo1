import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function Welcome() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      '.welcome-message',
      { opacity: 1, scale: 1 }, // Start from opacity: 0 and small scale (0)
      { opacity: 1, scale: 1, duration: 0 } // Grow to full scale (1) and opacity: 1 in 1 second
    ).to('.welcome-message', { x: '-100%', duration: 0.5, ease: 'power1.in', delay: 1.5 }) // Slide to the left after delay of 1.5s
      .to('.welcome-message', { opacity: 0, duration: 0.2 }, "-=0.2"); // Fade out

  }, []);

  return (
    <h1 className="welcome-message">Welcome</h1> // Remove initial opacity: 0
  );
}

export default Welcome;
