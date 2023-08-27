import React, { useState } from "react";
import "./Timelinepage.css";

function Timelinepage({ contactRef, scrollToSection }) {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (cardIndex) => {
        if (activeCard === cardIndex) {
            setActiveCard(null); // If the currently active card is clicked again, collapse it
        } else {
            setActiveCard(cardIndex);
        }
    };

    return (
        <div id="about" className="timeline-container">
            <div className="timeline-content">
                <h1 className="timeline-content__heading">Timeline</h1>

                {["Deloitte", "AnotherCompany", "YetAnotherCompany"].map((company, index) => (
    <div key={company} className="Timeline-container">
        <div className="Timeline">
            <div 
                className={`Timeline-card ${index % 2 === 0 ? 'Timeline-card--left' : 'Timeline-card--right'}`} 
                onClick={() => handleCardClick(index)}
            >
                <div className="Timeline-card__heading text-center">{company}</div>
                <div className={`Timeline-card__collapse ${activeCard === index ? 'show' : ''}`}>
                    <div className="Timeline-card__info">
                        <span className="Timeline-card__info-item">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="graduation-cap" className="svg-inline--fa fa-graduation-cap " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                {/* SVG Path */}
                            </svg>&nbsp;&nbsp;&nbsp;Some University, City
                        </span>
                        <span className="Timeline-card__info-item">
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar" className="svg-inline--fa fa-calendar " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                {/* SVG Path */}
                            </svg>&nbsp;&nbsp;&nbsp;Start Date - End Date
                        </span>
                    </div>
                    <p className="Timeline-card__description">
                        Description about the role or event at {company}. This includes tasks, responsibilities, achievements, etc.
                    </p>
                    <ul className="Timeline-card__list">
                        <li className="Timeline-card__list-item">Tech/Tool 1</li>
                        <li className="Timeline-card__list-item">Tech/Tool 2</li>
                        {/* Add more tech/tools or other details as list items */}
                    </ul>
                </div>
            </div>
            <div className="Timeline-date text-center">Year</div>
        </div>
    </div>
))}

            </div>
        </div>
    );
}

export default Timelinepage;
