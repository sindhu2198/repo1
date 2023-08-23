import React, { useState } from "react";
import "./Timelinepage.css";

import { Link } from 'react-router-dom';
import "./Timelinepage.css";


function Timelinepage({ contactRef, scrollToSection }) {
    const [scrollIndex, setScrollIndex] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    function showMoreProjects() {
      const scrollContainer = document.querySelector('.project-scroll-container');
      const scrollAmount = 960; // Width of three cards plus their margins
  
      // Toggle between 0 and 1 for scrollIndex
      const newScrollIndex = scrollIndex === 0 ? 1 : 0;
  
      // Scroll to the appropriate position based on scrollIndex
      scrollContainer.scrollLeft = newScrollIndex * scrollAmount;
  
      // Update the state
      setScrollIndex(newScrollIndex);
    }
    return (
      <div id="about" className="timeline-container">
      <div className="timeline-content">
          <h1 className="timeline-content__heading">Timeline</h1>

          {/* Deloitte */}
          <div className="Timeline-container">
              <div className="Timeline">
                  <div className="Timeline-card Timeline-card--left" onClick={() => setShowDetails(!showDetails)}>
                      <div className="Timeline-card__heading text-center">Deloitte</div>
                      <div className={`Timeline-card__collapse ${showDetails ? 'show' : ''}`}>
                      <div className="Timeline-card__info">
                      <span class="Timeline-card__info-item"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="graduation-cap" class="svg-inline--fa fa-graduation-cap " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"></path></svg>&nbsp;&nbsp;&nbsp;Guru Gobind Singh Indraprastha University, Delhi</span>
                      <span class="Timeline-card__info-item"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar" class="svg-inline--fa fa-calendar " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"></path></svg>&nbsp;&nbsp;&nbsp;Aug 2020 - Present</span>
                      <p class="Timeline-card__description">Working as a UI lead after successfully delivering multiple front-end solutions to satisfy business requirements. Day-to-day tasks include developing front-end apps, providing estimations, collaborating with team and supporting the existing projects. Check out my resume for project specific details!</p>
                      <ul class="Timeline-card__list"><li class="Timeline-card__list-item">Angular 11</li><li class="Timeline-card__list-item">React</li><li class="Timeline-card__list-item">AngularJS</li><li class="Timeline-card__list-item">NodeJS</li><li class="Timeline-card__list-item">jQuery</li><li class="Timeline-card__list-item">RxJS</li><li class="Timeline-card__list-item">HTML</li><li class="Timeline-card__list-item">SASS</li><li class="Timeline-card__list-item">TypeScript</li><li class="Timeline-card__list-item">Figma</li><li class="Timeline-card__list-item">MySQL</li><li class="Timeline-card__list-item">Azure CI/CD</li><li class="Timeline-card__list-item">AWS DynamoDB</li><li class="Timeline-card__list-item">AWS Lambda</li><li class="Timeline-card__list-item">AWS CloudFormation</li><li class="Timeline-card__list-item">ASP.NET</li><li class="Timeline-card__list-item">C#</li><li class="Timeline-card__list-item">Unit testing</li><li class="Timeline-card__list-item">E2E testing</li></ul>
                      </div>
                      </div>
                  </div>
                  <div className="Timeline-date text-center">2020</div>
              </div>
          </div>
      </div>
      </div>
    );
}
  //   return (
  //     <div id="about" className="timeline-container">
  //     <div className="timeline-content">
  //         <h1 className="timeline-content__heading">Timeline</h1>

  //         {/* Deloitte */}
  //         <div className="Timeline-container">
  //             <div className="Timeline">
  //                 <div className="Timeline-card Timeline-card--left">
  //                     <div className="Timeline-card__heading text-center">Deloitte</div>
  //                     <div className="Timeline-card__collapse collapse">
                       
  //                     </div>
  //                 </div>
  //                 <div className="Timeline-date text-center">2020</div>
  //             </div>

  //             {/* Deloitte (Intern) */}
  //             <div className="Timeline">
  //                 <div className="Timeline-card ">
  //                     <div className="Timeline-card__heading text-center">Deloitte (Intern)</div>
  //                     <div className="Timeline-card__collapse collapse">
  //                     <div className="Timeline-card__info">
  //                     <span class="Timeline-card__info-item"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="graduation-cap" class="svg-inline--fa fa-graduation-cap " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"></path></svg>&nbsp;&nbsp;&nbsp;Guru Gobind Singh Indraprastha University, Delhi</span>
  //                     </div>
  //                     </div>
  //                 </div>
  //             </div>

  //             {/* B. Tech (CSE) */}
  //             <div className="Timeline">
  //                 <div className="Timeline-card Timeline-card--left">
  //                     <div className="Timeline-card__heading text-center">B. Tech (CSE)</div>
  //                     <div className="Timeline-card__collapse collapse">
  //                     <div className="Timeline-card__info">
  //                     <span class="Timeline-card__info-item"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="graduation-cap" class="svg-inline--fa fa-graduation-cap " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"></path></svg>&nbsp;&nbsp;&nbsp;Guru Gobind Singh Indraprastha University, Delhi</span>
  //                     </div>
  //                     </div>
  //                 </div>
  //             </div>

  //             <div className="Timeline">
  //                 <div className="Timeline-card Timeline-card--left">
  //                     <div className="Timeline-card__heading text-center">B. Tech (CSE)</div>
  //                     <div className="Timeline-card__collapse collapse">
  //                     <div className="Timeline-card__info">
  //                     <span class="Timeline-card__info-item"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="graduation-cap" class="svg-inline--fa fa-graduation-cap " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"></path></svg>&nbsp;&nbsp;&nbsp;Guru Gobind Singh Indraprastha University, Delhi</span>
  //                     </div>
  //                     </div>
  //                 </div>
  //             </div>

  //             <div className="Timeline">
  //                 <div className="Timeline-card Timeline-card--left">
  //                     <div className="Timeline-card__heading text-center">B. Tech (CSE)</div>
  //                     <div className="Timeline-card__collapse collapse">
  //                     <div className="Timeline-card__info">
  //                     <span class="Timeline-card__info-item"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="graduation-cap" class="svg-inline--fa fa-graduation-cap " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"></path></svg>&nbsp;&nbsp;&nbsp;Guru Gobind Singh Indraprastha University, Delhi</span>
  //                     </div>
  //                     </div>
  //                 </div>
  //             </div>

  //             <div className="Timeline">
  //                 <div className="Timeline-card Timeline-card--left">
  //                     <div className="Timeline-card__heading text-center">B. Tech (CSE)</div>
  //                     <div className="Timeline-card__collapse collapse">
  //                     <div className="Timeline-card__info">
  //                     <span class="Timeline-card__info-item"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="graduation-cap" class="svg-inline--fa fa-graduation-cap " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"></path></svg>&nbsp;&nbsp;&nbsp;Guru Gobind Singh Indraprastha University, Delhi</span>
  //                     </div>
  //                     </div>
  //                 </div>
  //             </div>
  //         </div>
  //     </div>
  // </div>
  //     );
  //   }
    
    export default Timelinepage;
    
    
    
      
    