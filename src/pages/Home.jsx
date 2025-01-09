import "../styles/Home.css";
import ProfPic from "../assets/IMG_3452.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <img src={ProfPic} alt="" className="profile-pic" />
      </div>
      <div className="profile-details">
        <h2>Hi</h2>
        <h1>
          I am <span>Neha</span>
        </h1>
        <h2>A Bit About Me</h2>
        <p id="intro">
          I am a software developer with over 17 years of experienceand a
          specialization in modern frontend technologies, including 6 years with
          Angular and experience from my own projects with ReactJS and NodeJS, I
          bring a strong combination of technical expertise, reliability and
          solution-oriented thinking.
        </p>
      </div>
    </div>
  );
};

export default Home;
