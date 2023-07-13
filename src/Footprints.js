import React, { useRef } from 'react';
import './Footprints.css';
import leftFootprint from './left.svg';
import rightFootprint from './right.svg';

function Footprints() {
  return (
    <div>
      <img
        className="left-footprint"
        src={leftFootprint}
        alt="left footprint"
      />
      <img
        className="right-footprint"
        src={rightFootprint}
        alt="right footprint"
      />
    </div>
  );
}

export default Footprints;
