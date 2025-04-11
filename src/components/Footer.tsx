import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        <a href="https://github.com/PrajwalMutalik" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/prajwal-m-a46661255" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>
        &copy; {currentYear}{" "}
        <a href="https://github.com/PrajwalMutalik" target="_blank" rel="noreferrer">
          Prajwal Mutalik
        </a>
      </p>
      <p>Built with inspiration from Yuji Sato
      </p>
    </footer>
  );
}

export default Footer;
