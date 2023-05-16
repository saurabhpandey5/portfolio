import React from "react";
import "./Header.css";
import Typical from "react-typical";
import profileImg from "../../assets/profile1.jpg";
const Header = () => {
  return (
    <div className="header-container">
      {/* hearer content */}
      <div className="header-content">
        <h1>Hy! Am</h1>
        <h2 className="fullName">Saurabh Pandey</h2>
        <h2>
          I'm a
          <Typical
            steps={[
              " Full Stack Developer 💙",
              1000,
              " Frontend Developer ✅",
              1000,
              " Backend Developer ⬆️",
              1000,
              " React Developer 🔄",
              1000,
              " Node Js Developer",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          “Hello, my name is Saurabh Pandey, and I’ve been working as a Software
          Engineer for the past 6 months in GlobalLogic. I have knowlege of
          React,Node-Js,C++,Mysql,Mongodb”
        </p>
        {/* Payment LInks */}
        <div className="header-payment-container">
          <button>Hire Me</button>
          <i className="fa-brands fa-paypal"> </i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-amex"></i>
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
