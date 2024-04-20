import React, { useState, useEffect } from 'react';
import "./Roleframe.css";

const roles = ["Software Developer", "iOS Developer", "Full Stack Developer"]; // Array of roles

export const Roleframe = ({ className }) => {
  const [currentRole, setCurrentRole] = useState(0); // State to keep track of the current role index

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the role index periodically
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 1000); // Change role every 3000 milliseconds (3 seconds)

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className={"roleframe " + className}>
      <div className="software-developer">{roles[currentRole]}</div>
    </div>
  );
};
