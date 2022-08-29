import React from "react";
import "./Home.css";
import avatar from "./assets/amrutpalo-profile.JPG";
import Resume from "./assets/resume.pdf";

const Home = () => {
  return (
    <div className="profile-home-container container">
      <div className="profile-left">
        <div className="social-media-icons">
          <a href="https://www.linkedin.com/in/amruta-palo-7135b0171">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/amrutapalo/">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCr3t1o_4tU6uUvAndiSA06w">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="https://twitter.com/amrutapalo">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i></i>
          </a>
        </div>
        <div className="profile-name">
          <span>
            Hello, I'M
            <span className="profile-name-highlighted-text"> Amruta Palo</span>
          </span>
        </div>
        <div className="profile-role">
          <ul className="dynamic-text">
            <li>Enthusiastic Developer 😎</li>
            <li>Web Developer 🌏</li>
            <li>UI Developer 💻</li>
            <li>Frontend Developer 👩‍💻</li>
            <li>React Developer 📲</li>
          </ul>
        </div>
        <div className="profile-description">
          I develop experiences to make lives easier through Web.
        </div>
        <div className="profile-actions">
          <a href={Resume} download="Resume-AMRUTA-PALO" target="_blank">
            <button className="download-resume-btn">
              <i className="fa fa-download"></i> Get Resume
            </button>
          </a>
        </div>
      </div>
      <div className="profile-right">
        <div className="profile-picture">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
    
  );
};

export default Home;
