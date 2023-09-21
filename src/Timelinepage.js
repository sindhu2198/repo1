
import React, { useState } from "react";
import "./Timelinepage.css";

function Timelinepage({ contactRef, scrollToSection }) {
    const [activeCards, setActiveCards] = useState([]);

    const handleCardClick = (cardIndex) => {
        const isActive = activeCards.includes(cardIndex);
        
        if (isActive) {
            setActiveCards(activeCards.filter(index => index !== cardIndex));
        } else {
            setActiveCards([...activeCards, cardIndex]);
        }
    };

    const data = [
        { 
            company: "Masters in Data Science", 
            year: "2022-Present",
            university: "Indiana University, Bloomington",
            dateRange: "2022-Present",
            description: "Pusuing masters in Data Science Program at Indiana University, Bloomington",
            techTools: ["Tech/Tool 1", "Tech/Tool 2", "Tech/Tool 3"]
        },
        { 
            company: "Employee Management System", 
            year: "",
            university: "Another University, Another City",
            dateRange: "Another Start Date - Another End Date",
            description: "Description for Deloitte.",
            techTools: ["Tech/Tool A", "Tech/Tool B", "Tech/Tool C"]
        },
        { 
            company: "Sentimental Analysis", 
            year: "",
            university: "Another University2, Another City 2",
            dateRange: "Another Start Date - Another End Date",
            description: "Description for Deloitte.",
            techTools: ["Tech/Tool A", "Tech/Tool B", "Tech/Tool C"]
        },
        { 
            company: "Power BI Project", 
            year: "",
            university: "Another University2, Another City 2",
            dateRange: "Another Start Date - Another End Date",
            description: "Description for Deloitte.",
            techTools: ["Tech/Tool A", "Tech/Tool B", "Tech/Tool C"]
        },
        { 
            company: "Project4", 
            year: "",
            university: "Another University2, Another City 2",
            dateRange: "Another Start Date - Another End Date",
            description: "Description for Deloitte.",
            techTools: ["Tech/Tool A", "Tech/Tool B", "Tech/Tool C"]
        },
        { 
            company: "Deloitee", 
            year: "",
            university: "Another University2, Another City 2",
            dateRange: "Another Start Date - Another End Date",
            description: "Worked as a full stack developer and  after successfully delivering multiple front-end and backend solutions to satisfy business requirements. Day-to-day tasks include developing front-end apps, providing estimations, collaborating with team and supporting the existing projects. Check out my resume for project specific details!",
            techTools: ["Tech/Tool A", "Tech/Tool B", "Tech/Tool C"]
        },
        { 
            company: "Project6", 
            year: "",
            university: "Another University2, Another City 2",
            dateRange: "Another Start Date - Another End Date",
            description: "Description for Deloitte.",
            techTools: ["Tech/Tool A", "Tech/Tool B", "Tech/Tool C"]
        },
        { 
            company: "Project7", 
            year: "",
            university: "Another University2, Another City 2",
            dateRange: "Another Start Date - Another End Date",
            description: "Description for Deloitte.",
            techTools: ["Tech/Tool A", "Tech/Tool B", "Tech/Tool C"]
        },
        { 
            company: "Project8", 
            year: "",
            university: "Another University2, Another City 2",
            dateRange: "Another Start Date - Another End Date",
            description: "Description for Deloitte.",
            techTools: ["Tech/Tool A", "Tech/Tool B", "Tech/Tool C"]
        },
        { 
            company: "Project9", 
            year: "",
            university: "Another University2, Another City 2",
            dateRange: "Another Start Date - Another End Date",
            description: "Description for Deloitte.",
            techTools: ["Tech/Tool A", "Tech/Tool B", "Tech/Tool C"]
        },
        { 
            company: "Project10", 
            year: "",
            university: "Another University2, Another City 2",
            dateRange: "Another Start Date - Another End Date",
            description: "Description for Deloitte.",
            techTools: ["Tech/Tool A", "Tech/Tool B", "Tech/Tool C"]
        },
        { 
            company: "Project11", 
            year: "",
            university: "Another University2, Another City 2",
            dateRange: "Another Start Date - Another End Date",
            description: "Description for Deloitte.",
            techTools: ["Tech/Tool A", "Tech/Tool B", "Tech/Tool C"]
        },
    ];

    return (
        <div id="about" className="timeline-container">
            <div className="timeline-content">
                <h1 className="timeline-content__heading">Timeline</h1>
                <div className="timeline-wrapper">
                    {data.map((item, index) => (
                    <div key={item.company + index} className={`Timeline-container ${index === data.length - 1 ? 'last-card' : ''}`}>
               
                        <div className="Timeline">
                            <div 
                                className={`Timeline-card ${index % 2 === 0 ? 'Timeline-card--left' : 'Timeline-card--right'}`} 
                                onClick={() => handleCardClick(index)}
                            >
                                <div className="Timeline-card__heading text-center">{item.company}</div>
                                <div className={`Timeline-card__collapse ${activeCards.includes(index) ? 'show' : ''}`}>
                                    <div className="Timeline-card__info">
                                        <div className="Timeline-card__info-item">
                                        <svg width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="graduation-cap" className="svg-inline--fa fa-graduation-cap " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                         <path fill="currentColor" d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z"></path>

                                         </svg>&nbsp;&nbsp;&nbsp;{item.university}
                                        </div>
                                        <div className="Timeline-card__info-item">
                                        <svg width="20" height="20" aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar" className="svg-inline--fa fa-calendar " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"></path>
                                         </svg>&nbsp;&nbsp;&nbsp;{item.dateRange}
                                        </div>
                                    </div>
                                    <p className="Timeline-card__description">{item.description}</p>
                                    <ul className="Timeline-card__list">
                                        {item.techTools.map(tool => (
                                            <li key={tool} className="Timeline-card__list-item">{tool}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {index === 0 && <div className="Timeline-date text-center">{data[0].year}</div>}
                            {index === 1 && <div className="Timeline-date text-center">{data[1].year}</div>}
                            {index === 3 && <div className="Timeline-date text-center">{data[3].year}</div>}
                            {/* Add more specific year displays as needed */}
                        </div>
                    </div>
                    
                ))}
                </div>
            </div>
            <div class="footer__container">
   <button
       className="arrow-link"
       onClick={() => scrollToSection(contactRef)}
   >
       <div className="arrow">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="Panel__arrow"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z" fill="#ffffff"></path></svg>
       </div>
   </button>
</div>
           
        </div>

        
    );
 }
    export default Timelinepage;
