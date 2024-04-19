import React, { useState } from "react";
import "./Contactpage.css";
import yoga from "./AllImages/pdfDiyo-banner.png";
import ranker from "./AllImages/ranker-banner.png";
import cowsandbulls from "./AllImages/cowsandbulls.png";
import arrow from "./AllImages/right-arrow.png";
import { Link } from 'react-router-dom';
import github_logo from "./AllImages/github-mark-white.png"

const projects = [
  { src: yoga, title: 'Project Title 1', description: 'A knowledge bank in the page of a single page application built on Angular JS framework.' },
  { src: ranker, title: 'Project Title 2', description: 'Database management system project implemented using MySQL.' },
  { src: cowsandbulls, title: 'Project Title 3', description: 'A codebreaking Android game that is developed using Java.' },
  { src: 'path/to/project4/imag4.jpg', title: 'Project Title 4', description: 'Description for project 4.' },
  { src: 'path/to/project5/imag5.jpg', title: 'Project Title 5', description: 'Description for project 5.' },
  { src: 'path/to/project6/imag6.jpg', title: 'Project Title 6', description: 'Description for project 6.' }
];

function Contactpage({ contactRef, scrollToSection }) {
  const [scrollIndex, setScrollIndex] = useState(0);

  function showMoreProjects() {
    
      const card = document.querySelector('.project-card');
      const cardWidthIncludingGap = card.offsetWidth + 20;  // Adding the 20px gap
  
      const scrollAmount = cardWidthIncludingGap * 3;  // For 3 cards. No need to subtract the gap.
      
      // Now, you want to set the scrollLeft such that it shows projects 4, 5, and 6
      // without any parts of project 3 visible.
      const newScrollPosition = scrollIndex === 0 ? scrollAmount : 0;
      
      const scrollContainer = document.querySelector('.project-scroll-container');
      scrollContainer.scrollLeft = newScrollPosition;
  
      // Toggle scrollIndex
      setScrollIndex(scrollIndex === 0 ? 1 : 0);
  
  
}


  return (
    <div id="contact" className="contact-container">  
       <div className="content">
  
      <div className="contact-content__heading">GOT A PROJECT?
      <br/>
      GET IN TOUCH!
     
        </div>
    
        <a href="mailto:sindhu.2198@gmail.com" className="DuskBtn--outline">
          sindhu.2198@gmail.com
        </a>
        <div className="Links-mediaBtn-row">
      <a href="https://www.linkedin.com/in/durgasindhuanimalla/" target="_blank" rel="noopener noreferrer">
        <span className="fa-layers MediaBtn fa-3x">
        <style dangerouslySetInnerHTML={{__html: `
        .MediaBtn:hover .MediaBtn__Icon--dynamic-fa-linkedin-in { 
          color: #0077B5;
        }
        
      `}} />
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square" className="svg-inline--fa fa-square MediaBtn__Icon MediaBtn__Bg MediaBtn__Icon--dynamic-fa-linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"></path>
          </svg>
          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" className="svg-inline--fa fa-linkedin-in MediaBtn__Icon MediaBtn__Brand" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <g transform="translate(130 150)">
            <g transform="translate(0, 0)  scale(0.5, 0.5)  rotate(0 0 0)">
            <path fill="currentColor" d="M100.3 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.6 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
            </g></g>
          </svg>
        </span>
      </a>
      <a href="https://github.iu.edu/duanim" target="_blank" rel="noopener noreferrer">
        <span className="fa-layers MediaBtn fa-3x">
        <style dangerouslySetInnerHTML={{__html: `
        .MediaBtn:hover .MediaBtn__Icon--dynamic-fa-github { 
          color: #000000;
        }
      `}} />
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square" className="svg-inline--fa fa-square MediaBtn__Icon MediaBtn__Bg MediaBtn__Icon--dynamic-fa-github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"></path>
          </svg>

          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github MediaBtn__Icon MediaBtn__Brand" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" >
          <g transform="translate(248 256)">
        <g transform="translate(0, 0)  scale(0.5, 0.5)  rotate(0 0 0)">
          <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" transform="translate(-248 -256)"></path>
         </g></g>
          </svg>
          

        </span>
      </a>
    </div>


       
      </div>
 </div>

  )
}

export default Contactpage;

