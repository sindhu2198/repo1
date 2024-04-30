import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Home from './Home.js';
import Aboutpage from "./Aboutpage.js";
import ProjectHighlights_1 from './ProjectHighlights_1.js';
import ProjectHighlights_2 from './ProjectHighlights_2.js';
import ProjectHighlights_3 from './ProjectHighlights_3.js';
import ProjectHighlights_4 from './ProjectHighlights_4.js';
import ProjectHighlights_5 from './ProjectHighlights_5.js';
import ProjectHighlights_6 from './ProjectHighlights_6.js';

import Resumepage from './Resumepage.js';
import Projectpage from './Projectpage.js';
import SkillsPage from './Skillspage.js';
import Timelinepage from './Timelinepage.js';

function Routing() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/Projects" element={<Projectpage />} />
      <Route path="/Skills" element={<SkillsPage />} />
      <Route path="/Timeline" element={<Timelinepage />} />

      <Route path="/project1" element={<ProjectHighlights_1 />} />
      <Route path="/project2" element={<ProjectHighlights_2 />} />
      <Route path="/project3" element={<ProjectHighlights_3 />} />
      <Route path="/project4" element={<ProjectHighlights_4 />} />
      <Route path="/project5" element={<ProjectHighlights_5 />} />
      <Route path="/project6" element={<ProjectHighlights_6 />} />
      <Route path="/resume" element={<Resumepage />} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default Routing;