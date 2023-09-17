import React, { useEffect } from "react";
import './ProjectHighlights_1.css';
import yoga from "./AllImages/pdfDiyo-banner.png";
import { Link } from "react-router-dom";
function ProjectHighlights_1() {

  const handleBackClick = () => {
    document.querySelector('.hidden-back-link').click();
}
    useEffect(() => {
        document.body.classList.add('project-highlights-body');
        return () => {
            document.body.classList.remove('project-highlights-body');
        };
    }, []);

    return (
        <div className="content-container">
           <div className="navigation">
           <Link to="/#projects" className="hidden-back-link" style={{ display: 'none' }}></Link>
           <button className="back-button" onClick={handleBackClick}>
            Back
        </button>
        <div className="projects-dropdown">
          Projects
          <div className="projects-dropdown-content">
            <a href="/project1">Sentimental</a>
            <a href="/project2">Project 2</a>
            <a href="/project3">Project 3</a>
            {/* Add more project links as needed */}
          </div>
        </div>
      </div>
            <div className="image-container">
                <img src={yoga} alt="Your Image" />
            </div>
            <div className="table-container">
                <div className="project_hcard">
                    <div className="card-header">
                        Highlights
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Tech Stack</th>
                                <th>AngularJS, Google Firebase, Angular Material, Google Analytics, HTML, CSS, JavaScript</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Time Duration</td>
                                <td>7 days</td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProjectHighlights_1;
