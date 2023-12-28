import React, { useEffect, useState } from "react";
import './ProjectHighlights_1.css';
import yoga from "./AllImages/flight.png";
import { Link } from "react-router-dom";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from './firebaseConfig';
const ProjectHighlights_1 = ({ shouldOpen }) => {
    const [project1Url, setproject1Url] = useState(null);
  
    useEffect(() => {
      const project1Ref = ref(storage, 'gs://portfolio-299d7.appspot.com/DM_project_report.pdf');
  
      getDownloadURL(project1Ref)
        .then((url) => {
          setproject1Url(url);
          if (shouldOpen) {
            window.open(url, '_blank');
          }
        })
        .catch((error) => {
          console.error("Error fetching Report:", error);
        });
    }, [shouldOpen]);
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
           <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,350;1,300;1,500&display=swap');
        `}
      </style>
           <div className="navigation">
          
           <Link to="/#projects" className="hidden-back-link" style={{ display: 'none' }}></Link>
           <button className="back-button" onClick={handleBackClick}>
            Back
        </button>
        <div className="projects-dropdown">
  Projects <span className="triangle-down"></span>
  <div className="projects-dropdown-content">
    <a href="/project1">Skill Snapshot</a>
    <a href="/project3">Reddit Deep Sentimental Analysis</a>
    <a href="/project4">Sentimental Analysis of Reddit users on wild animals welfare</a>
    <a href="/project5">HR Analytics using PowerBI</a>
    <a href="/project6">Diet panner bot using UiPath.</a>
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
                                <th>Project Name</th>
                                <th>Prediction of Flight Cancellation using Kaggle Dataset</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td>Tech Stack</td>
                                <td> Python, Adasyn, Classifiers, Tableau, sklearn, pandas, numpy, Regression</td>
                            </tr>
                            <tr>
                                <td>Time Duration</td>
                                <td>30 days</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>Completed</td>
                            </tr>
                            <tr>
                                <td>Github Link</td>
                                <td> <a href="https://github.com/sindhu2198/Flight_prediction" 
       target="_blank" 
       rel="noopener noreferrer" 
       className="blue-link">
      Visit GitHub Repo
    </a></td>
                            </tr>
                            <tr>
                <td>Project Report</td>
                <td>
                  {project1Url ? (
                    <a href={project1Url} target="_blank" rel="noopener noreferrer" className="blue-link">
                      Open Report
                    </a>
                  ) : (
                    "Loading..."
                  )}
                </td>
              </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProjectHighlights_1;
