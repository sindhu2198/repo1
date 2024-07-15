import React, { useEffect, useState } from "react";
import './ProjectHighlights_1.css';
import deepfake from "./AllImages/deepfake.png";
import { Link, useNavigate } from "react-router-dom";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from './firebaseConfig';
const ProjectHighlights_3 = ({ shouldOpen }) => {
    const [project1Url, setproject1Url] = useState(null);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const handleBackClick = () => {
      console.log("Back button clicked, navigating to /"); // Debug log
        navigate('/'); // Navigates to the home page
    } 
const toggleDropdownVisibility = () => {
      setIsDropdownVisible(!isDropdownVisible);
  };

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
           <button className="back-button" onClick={handleBackClick}>Back</button>
        <div className="projects-dropdown">
        <button onClick={toggleDropdownVisibility} className="dropdown-toggle">
                        Projects <span className="triangle-down"></span>
                    </button>
                    {isDropdownVisible && (
  <div className="projects-dropdown-content">
   <a href="/project1">Filmpire</a>
    <a href="/project2">HealthMate</a>
    <a href="/project3">Crime Analytics using PowerBI</a>
    <a href="/project4">Sentimental Analysis of Reddit users on wild animals welfare</a>
    <a href="/project6">Prediction of Flight Cancellation using Kaggle Dataset</a>
    <a href="/project5">Reddit Deepfake Network Analysis</a>
    {/* Add more project links as needed */}
  </div>
                    )}
</div>

      </div>
            <div className="image-container">
                <img src={deepfake} alt="Your Image" />
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
                                <td> Python, SKLearn, Pandas, Regression Techniques, ML algorithms</td>
                            </tr>
                            <tr>
                                <td>Time Duration</td>
                                <td>20 days</td>
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

export default ProjectHighlights_3;
