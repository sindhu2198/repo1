import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Home.css';

function ColorSplash({ color }) {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      '.color-splash',
      { scale: 0 }, // Start from a small scale (0)
      { scale: 1, duration: 1 } // Grow to full scale (1) in 1 second
    ).to('.color-splash', { x: '-100%', duration: 0.5, ease: 'power1.in' }); // Slide to the left and disappear quickly



  }, []);

  return <div className="color-splash" style={{ backgroundColor: color }}></div>;
}

export default ColorSplash;