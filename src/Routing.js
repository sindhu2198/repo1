import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Home from './Home.js';
import Aboutpage from "./Aboutpage.js";
import Projectpage from "./Projectpage.js";

function Routing() {
  return (
    
      <BrowserRouter>
        <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/about" component={Aboutpage} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default Routing;