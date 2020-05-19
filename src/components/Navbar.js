import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import Cancun from "./Cancun.jpeg";
import { Card, Button } from "react-bootstrap";
//commented code adds route functionality
// import{ Link } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <div className="page-info">
        <ul id="nav">
          {/* Links for navigation: */}
          {/* <Link to="/Navbar"> */}
          <li>
            <a href="#About_Me">About</a>
          </li>
          {/* </Link> */}
          {/* <Link to="/Projects">*/}
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          {/* </Link>  */}
          {/* <Link to="/Experience">*/}
          <li>
            <a href="#Experience">Experience</a>
          </li>
          {/* </Link> */}
          {/* <Link to="/Contact">*/}
          <li>
            <a href="#Footer">Contact</a>
          </li>
          {/* </Link> */}
        </ul>
      </div>
      <a id="About_Me">
        <div className="service-head text-center">
          <h2>
            {" "}
            About - Ben Olsen
            <div className="comment"> </div>
          </h2>{" "}
          <span className="line">
            {" "}
            <div className="border"></div>
          </span>
        </div>
      </a>
      <Card>
        <Card.Img
          variant="top"
          src={Cancun}
          style={{
            width: "250px",

            borderRadius: "10px",
          }}
        />
        <Card.Body>
          <Card.Text
            class="line-1 anim-typewriter"
            style={{
              color: "white",
              flexDirection: "wrap",
            }}
          >
            Hi! I'm Ben, a Full-Stack Developer{" "}
            <h5>
              {" "}
              I enjoy creating and designing websites, applications, and so much
              more!{" "}
            </h5>
            <h5>Contact me if you have any questions. </h5>
          </Card.Text>
          <Button
            href="https://github.com/Olsenben77/Resume/blob/master/my%20resume.pdf"
            style={{
              left: "25%",
              color: "navy",
            }}
          >
            {" "}
            View Resume <i className="far fa-file"></i>
          </Button>
        </Card.Body>
      </Card>
    </header>
  );
}

export default Nav;
