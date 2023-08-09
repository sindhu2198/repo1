import React from 'react';
import './ProjectHighlights_1.css';
import yoga from "./AllImages/pdfDiyo-banner.png"

function ProjectHighlights_1(){
 

  return (
    <div className="content-container">
      <div className="image-container">
        <img src={yoga} alt="Your Image" />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Feature 1</td>
              <td>Description 1</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectHighlights_1;
