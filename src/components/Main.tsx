import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Profilepic from '../assets/images/Profilepic.jpg'
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src= {Profilepic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/PrajwalMutalik" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/prajwal-m-a46661255" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Prajwal Mutalik</h1>
          <p>Software Engineer - Entry level</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/PrajwalMutalik" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/prajwal-m-a46661255" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;