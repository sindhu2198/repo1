
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
            year: "2022-2024",
            university: "Indiana University, Bloomington",
            dateRange: "2022-2024",
            description: "Completed Masters in Data Science Program at Indiana University, Bloomington",
            techTools: ["Applied Algorithms","Advanced Database Technology", "Data Mining", "Introduction to Statistics", "Social Media Mining", "Search or Information Retrieval", "Advanced Database Concepts", "Security for Networked Systems", "Database management Systems","Information Visualisation"]
        },
        { 
            company: "Filmpire", 
            year: "",
            university: "Project",
            dateRange: "June 2024-Present",
            description: "Developed a sophisticated web-based application utilizing React for the front-end and NodeJS for the backend, enhanced by intricate designs created with HTML and CSS. This application serves as a resource for movie lovers with an intuitive user interface, the application empowers them to provide ratings, add movies to their watchlist and favourites based on their interest. The data integrity and security is taken care by the moviedb org api that provides all movie related information. This application also offers scalability for increasing volume of data. Moreover, the application is designed to adapt seamlessly across devices.",
            techTools: ["MySQL","ReactJs", "NodeJS","HTML", "CSS"]
        },
        { 
            company: "Network Analysis and Topic Modeling on Deepfake technology", 
            year: "2022",
            university: "Project",
            dateRange: "October 2022",
            description: "Delving into society's interaction with deepfakes, this project utilizes Network Analysis and Topic Modeling. Centered on Reddit discussions, it unveils prominent themes, debates potential advantages and drawbacks, and pinpoints influential contributors, presenting a holistic view of deepfakes' imprint on society.",
            techTools: ["Python","PRAW", "LDA", "WordCloud", "Network Analysis", "Topic Modelling"]
        },
        { 
            company: "Sentiments of users on wild animal welfare", 
            year: "",
            university: "Project",
            dateRange: "September 2022",
            description: "In this project, sentiment analysis was conducted to gauge public reaction to the Cincinnati Zoo gorilla incident, as discussed on Reddit. Utilizing the 'nltk' library for natural language processing, comments were preprocessed to eliminate common words, reducing noise and extracting meaningful patterns. The analysis categorized sentiments as positive, negative, or neutral, providing an insightful examination of prevailing attitudes and emotions expressed by the online community regarding the incident. This methodical approach ensured a comprehensive understanding of public sentiment during that time.",
            techTools: ["Data extraction","VADER", "EMPATH", "Sentimental Analysis"]
        },
     
        { 
            company: "Deloitte", 
            year: "2020 - 2022",
            university: "Company",
            dateRange: "Aug 2020 - July 2022",
            description: "Worked as a full stack developer and  after successfully delivering multiple front-end and backend solutions to satisfy business requirements. Day-to-day tasks include developing front-end apps, providing estimations, collaborating with team and supporting the existing projects. Check out my resume for project specific details!",
            techTools: [" NodeJS", "AWS DynamoDB", "AWS Lambda", "MySQL", "QlikSense", "AWS CloudFormation", "AWS X-Ray",
            "Unit testing","using Mocha", "Chai", "Istanbul", "Sinon" ,"Proxyquire"]
        },
        { 
            company: "Deloitte, Intern", 
            year: "2020",
            university: "Company",
            dateRange: "Jan 2020- June 2020",
            description: "Worked as an intern at Deloitte, I contributed to the 'MyTechnology' website by crafting APIs and fixing bugs and had worked o backend technologies like C#, supported the QA team in reviewing test plans, and ensured over 75% code coverage through unit testing, collaborating extensively with cross-functional teams.",
            techTools: ["HTML", "ASP.NET", "C#", "JavaScript"]
        },

        { 
            company: "Koneru Lakshmaiah University, India", 
            year: "2016 - 2020",
            university: "University",
            dateRange: "June 2016 - May 2020",
            description: " Bachelor's in Electronics and Communication Engineering",
            techTools: ["JAVA", "C", "Data Structures", "Python"]
        },
       
        { 
            company: "HR Analytics using Power BI", 
            year: "2019",
            university: "Project",
            dateRange: "November 2019",
            description: "In this project, I utilized Power BI to create a comprehensive HR analytics dashboard that provides insights into the workforce's composition, performance, and retention. The dashboard consolidates diverse HR metrics into a single platform, enabling HR professionals to make informed decisions.",
            techTools: ["PowerBi"]
        },
        { 
            company: "Uipath Diet Planner bot", 
            year: "2019",
            university: "Project",
            dateRange: " Oct 2019-Nov 2019",
            description: "The UiPath Diet Planner Bot transformed the way users approach their nutrition, offering a personalized, interactive, and automated solution for meal planning. The automation not only saved users time but also ensured a more scientific and data-driven approach to dieting, enhancing user adherence and health outcomes.",
            techTools: ["Uipath"]
        }
    ];

    return (
        <div id="about" className="timeline-container">
            <div className="timeline-content">
                <h1 className="about-content__heading">Timeline</h1>
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
                                        &nbsp;&nbsp;&nbsp;{item.university}
                                        </div>
                                        <div className="Timeline-card__info-item">
                                        &nbsp;&nbsp;&nbsp;{item.dateRange}
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
                            {index === 4 && <div className="Timeline-date text-center">{data[4].year}</div>}
                            {index === 5 && <div className="Timeline-date text-center">{data[5].year}</div>}
                            {index === 6 && <div className="Timeline-date text-center">{data[6].year}</div>}
                            {index === 7 && <div className="Timeline-date text-center">{data[7].year}</div>}
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
