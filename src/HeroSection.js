import "./HeroSection.css";
import { Roleframe } from "./Roleframe";
import propic from "./AllImages/sindhu-bg-color.png";

export const HeroSection = ({ className, ...props }) => {
  return (
    <div className={"hero-section " + className}>
        
      <div className="home-page-content">
        <div className="hi-i-m-ratan-tejaswi-vadapalli">
          Hi, I’m Durga Sindhu Animalla
          <Roleframe className="roleframe" />
        </div>
      
        <div className="text">
          Welcome to my digital portfolio! I&#039;m Durga Sindhu Animalla, a Full Stack
          developer with a passion for mobile and web development. With a proven
          track record at Deloitte, where I led the development of the applications across Deloitte, I specialize in turning complex technical challenges into
          intuitive solutions. Dive into my world of innovative app development,
          where technology meets creativity.{" "}
        </div>
      
      </div>
    
      <div className="see-myworkbutton">
        <div className="rectangle-1"></div>
        <div className="see-my-work">See my work </div>
      </div>
      <div className="profile-image">
    <img src={propic} alt="Profile" />
  </div>
     
    </div>
    
  );
};
