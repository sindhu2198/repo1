import React, { useEffect } from 'react';
import './Home.css'; // assuming the provided CSS is stored in 'stars.css'

function NightSky() {
  return (
    <div className="night">
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} className="shooting_star" />
      ))}
    </div>
  );
}

export default NightSky;