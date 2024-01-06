import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        {/* desc */}
        <div className="services-desc-container">
          <h1>
            My <span>Experience</span>
          </h1>
          <p>
            “Hello, my name is Saurabh Pandey, and I’ve been working as a
            Software Engineer for the past 6 months in GlobalLogic. I have
            knowlege of React, Node-Js, C++, Mysql, Mongodb”
          </p>
          <button>Hire Me</button>
        </div>

        {/* item */}
        <div className="services-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Frontend Developer</h3>
              <p>
                In Frontend I have done HTML CSS Javascript React. My
                project are Sorting Visualiser, PortFolio,Ecommerce website, Todo list
              </p>
            </div>
          </div>

          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc">
              <h3>Full Stack Developer</h3>
              <p>
                In Full Stack Developer I have done MERN Developer are MongoDb
                Express React Node-Js and i have also done Mysql. My project are Ecommerce website,
                Expense Tracker
              </p>
            </div>
          </div>

          <div className="services-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-desc">
              <h3>React Developer</h3>
              <p>
                My project are PortFolio,Ecommerce website, Todo list
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
