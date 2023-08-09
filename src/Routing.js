import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Home from './Home.js';
import Aboutpage from "./Aboutpage.js";
import ProjectHighlights_1 from './ProjectHighlights_1.js';

function Routing() {
  return (
    
      <BrowserRouter>
        <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/about" component={Aboutpage} />
        <Route path="/project1" element={<ProjectHighlights_1 />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default Routing;