import React from "react";
import Donationally from "./Donationally.png";
import Github from "./Github.png";
import Manager from "./EmployeeManager.png";
import Directory from "./EmployeeDirectory.png";
import Scheduler from "./Scheduler.png";
import NiteOwl from "./NiteOwl.png";
import "./Projects.css";

function Projects() {
  return (
    <div id="projects">
      <a id="Projects">
        <div className="service-head text-center">
          <h2>
            {" "}
            My Projects
            <div className="comment"> </div>
          </h2>
          <h3>
            {" "}
            <span className="line">
              {" "}
              <div className="border"></div>
            </span>
          </h3>
        </div>
      </a>
      <div className="row">
        <div className="d-flex justify-content-center col-sm-6 col-md-12 col-lg-6">
          <div className="containerh">
            <h5
              style={{
                marginLeft: "100px",
                marginRight: "100px",
                textDecoration: "underline",
              }}
            >
              React powered Charity Search{" "}
            </h5>

            <img
              className="img-fluid port-image"
              src={Donationally}
              alt=""
              width="450"
            />
            <div className="overlay">
              <div className="text">
                <h4> Check out these links!</h4>
                <a
                  className="centered nav-link"
                  href="https://github.com/Olsenben77/Donation-App---Project-3"
                >
                  {" "}
                  Github
                </a>
                <a
                  className="centered nav-link"
                  href="https://ancient-mountain-46633.herokuapp.com/"
                >
                  {" "}
                  Deployed{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center col-sm-6 col-md-12 col-lg-6">
          <div className="containerh">
            <h5
              style={{
                marginLeft: "40px",
                marginRight: "40px",
                textDecoration: "underline",
              }}
            >
              GitHub profile generator featured on Node.js{" "}
            </h5>

            <img
              className="img-fluid port-image"
              src={Github}
              alt=""
              width="450"
            />
            <div className="overlay">
              <div className="text">
                <h4>Check out these links!</h4>
                <a
                  className="centered nav-link"
                  href="https://github.com/Olsenben77/Node-JS-HW-09"
                >
                  {" "}
                  Github
                </a>
                <a
                  className="centered nav-link"
                  href="https://olsenben77.github.io/Node-JS-HW-09/"
                >
                  {" "}
                  Deployed{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center col-sm-6 col-md-12 col-lg-6">
          <div className="containerh">
            <h5
              style={{
                marginLeft: "40px",
                marginRight: "75px",
                textDecoration: "underline",
              }}
            >
              Employee Management Tool run on Terminal
            </h5>
            <img
              className="img-fluid port-image"
              src={Manager}
              alt=""
              width="450"
            />
            <div className="overlay">
              <div className="text">
                <h4>Check out this link! </h4>
                <a
                  className="centered nav-link"
                  href="https://github.com/Olsenben77/My-SQL-Employee-Tracker"
                >
                  {" "}
                  Github
                </a>
                <div className="centered nav-link">
                  {" "}
                  Deployed version must be downloaded to terminal{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center col-sm-6 col-md-12 col-lg-6">
          <div className="containerh">
            <h5
              style={{
                marginLeft: "100px",
                marginRight: "100px",
                textDecoration: "underline",
              }}
            >
              React powered Employee Search
            </h5>
            <img
              className="img-fluid port-image"
              src={Directory}
              alt=""
              width="450"
            />
            <div className="overlay">
              <div className="text">
                <h4>Check out these links! </h4>
                <a
                  className="centered nav-link"
                  href="https://github.com/Olsenben77/React-Employee-Directory"
                >
                  {" "}
                  Github
                </a>
                <a
                  className="centered nav-link"
                  href="https://olsenben77.github.io/React-Employee-Directory/"
                >
                  {" "}
                  Deployed{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center col-sm-6 col-md-12 col-lg-6">
          <div className="containerh">
            <h5
              style={{
                marginLeft: "40px",
                marginRight: "40px",
                textDecoration: "underline",
              }}
            >
              Dynamic scheduler locally saving user tasks
            </h5>
            <img
              className="img-fluid port-image"
              src={Scheduler}
              alt=""
              width="450"
            />
            <div className="overlay">
              <div className="text">
                <h4>Check out these links! </h4>
                <a
                  className="centered nav-link"
                  href="https://github.com/Olsenben77/Homework-5-Daily-Planner"
                >
                  {" "}
                  Github
                </a>
                <a
                  className="centered nav-link"
                  href="https://olsenben77.github.io/Homework-5-Daily-Planner/"
                >
                  {" "}
                  Deployed{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center col-sm-6 col-md-12 col-lg-6">
          <div className="containerh">
            <h5
              style={{
                marginLeft: "30px",
                marginRight: "30px",
                textDecoration: "underline",
              }}
            >
              Event planning application - multiple API calls
            </h5>
            <img
              className="img-fluid port-image"
              src={NiteOwl}
              alt=""
              width="450"
            />
            <div className="overlay">
              <div className="text">
                <h4>Check out these links!</h4>
                <a
                  className="centered nav-link"
                  href="https://github.com/Olsenben77/D8-Nite---Ben-Henry-Lloyd-Owen"
                >
                  {" "}
                  Github
                </a>
                <a
                  className="centered nav-link"
                  href="https://olsenben77.github.io/D8-Nite---Ben-Henry-Lloyd-Owen/"
                >
                  {" "}
                  Deployed{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
