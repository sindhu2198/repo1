import React, { useEffect, useState } from "react";
import './ProjectHighlights_1.css';
import  powerbi from "./AllImages/crime2.jpg";
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
      const project1Ref = ref(storage, 'gs://portfolio-299d7.appspot.com/SMM_final_prj-3.pdf');
  
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
                <img src={powerbi} alt="Your Image" />
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
                                <th> Crime Analytics using PowerBI .</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td>Tech Stack</td>
                                <td> Data Preprocessing, Power BI</td>
                            </tr>
                            <tr>
                                <td>Time Duration</td>
                                <td>15 days</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>Completed</td>
                            </tr>
                            
                            <tr>
                                <td>Project Link</td>
                                <td> <a href="https://app.powerbi.com/view?r=eyJrIjoiODJmN2MwZGUtNmE0Ni00MDU2LWI2MGMtNGE0NThmZTUyNGM3IiwidCI6IjExMTNiZTM0LWFlZDEtNGQwMC1hYjRiLWNkZDAyNTEwYmU5MSIsImMiOjN9" 
       target="_blank" 
       rel="noopener noreferrer" 
       className="blue-link">
      View Project
    </a></td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProjectHighlights_3;
