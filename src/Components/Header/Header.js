import React from "react";
import "./Header.css";
import Typical from "react-typical";
import profileImg from "../../assets/profile1.jpg";
import * as emoji from 'node-emoji';

const Header = () => {
  let love=emoji.get('coffee');
  return (
    <div className="header-container">
      {/* hearer content */}
      <div className="header-content">
        <h1>Hi All {love}</h1>
        <h2 className="fullName">Saurabh Pandey</h2>
        <h2>
          I'm a
          <Typical
            steps={[
              " Full Stack Developer 💙",
              2000,
              " Frontend Developer ✅",
              2000,
              " Backend Developer ⬆️",
              2000,
              " React Developer 🔄",
              2000,
              " Node Js Developer",
              2000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          “Hello, My name is Saurabh Pandey, and I've been working as a Software
          Engineer for the past 1.5 year in GlobalLogic. I have knowlege of
          HTML,CSS, Javascript.React,Nodejs”
        </p>
         <div className="header-payment-container"> 
          <button>Hire Me</button>
          {/* <i className="fa-brands fa-paypal"> </i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-amex"></i> */}
        </div>
      </div>
      {/* Image Container */}
      <div className="profile-img-container">
        <img src={profileImg} alt=""></img>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
