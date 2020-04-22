import React, { useEffect, useState } from "react";
import "./Experience.css";

function Experience() {
  const [scrollY, setScrollY] = useState({ y: 0 });
  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
  }, []);

  const handleScroll = () => {
    console.log(window.scrollY);
    let temp = window.scrollY;
    setScrollY({ y: temp });
    console.log(scrollY);
  };

  return (
    <div className="experience">
      <a id="Experience">
        <div className="service-head1 text-center">
          <h2>
            {" "}
            Resume
            <div className="comment1"> </div>
          </h2>
          <h3>
            {" "}
            <span className="line1">
              {" "}
              <div className="border1"></div>
            </span>
          </h3>
        </div>
      </a>
      <span id="divider" />
      {scrollY.y >= 1600 ? <span id="bob" /> : ""}
      <div className="container2">
        <div className="container-md">
          <div className="card1">
            <div className="card-body">
              <div className="row">
                <div className="d-flex justify-content-flex-start col-md-8 col-lg-6">
                  <h1 className="underline"> Work Experience -</h1>
                </div>
                <div className="d-flex justify-content-center flex-column  col-md-8 col-lg-6">
                  <h1>Foreign Language Instructor</h1>
                  <h3>
                    Rainier Valley Leadership Academy - Seattle, WA 2019 to
                    present
                  </h3>
                  <p className="job-description">
                    <li>
                      Taught and mentored differentiated levels of high school
                      Spanish as well as leadership-centered classes.
                    </li>
                  </p>
                  <p className="job-description">
                    <li>
                      Instructs multiple levels of learners on a created Spanish
                      curriculum, adhering to specified practices and
                      methodologies while including cultiral ties within
                      lessons.
                    </li>
                  </p>
                  <p className="job-description">
                    <li>
                      Organizes and plans school-wide events while developing
                      meaningful content for leaderships style classes.
                    </li>
                  </p>
                  <br></br>
                </div>
                <div className="row">
                  <div className="d-flex justify-content-flex-start col-md-12 col-lg-6"></div>
                  <div className="d-flex justify-content-center flex-column  col-md-12 col-lg-6">
                    <h1>Foreign Language Instructor</h1>
                    <h3>Nebraska Lutheran High School - Waco, NE 2017-2019</h3>
                    <p className="job-description">
                      <li>
                        Taught all secondary levels of Spanish learning up to
                        Spanish AP 5, managed school dormitory functions, and
                        fulfilled multiple roles as an educator, volunteer, and
                        coach.
                      </li>
                    </p>
                    <p className="job-description">
                      <li>
                        Instruct a personalized established foreign language
                        curriculum, adhering to specified methodologies,
                        standards, and practices.
                      </li>
                    </p>
                    <p className="job-description">
                      <li>
                        Scheduled overview and communicated supervision of
                        dormitory residents through following of set
                        desciplinary practices
                      </li>
                    </p>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="d-flex justify-content-flex-start col-md-12 col-lg-6">
                  <h1 className="underline">Education - </h1>
                </div>
                <div className="d-flex justify-content-center flex-column  col-md-12 col-lg-6">
                  <h1>UW Coding Bootcamp</h1>
                  <h3>November 2019 - May 2020</h3>
                  <p className="job-description">
                    Full-stack development course highlighting multiple areas of
                    programming and responsive web design. Learned languages
                    include HTML, CSS, JavaScript, React.js, and more. Project
                    based learning opportunites, focusing on refining learned
                    skills and group collaboration.
                  </p>
                  <br></br>
                </div>
              </div>
              <div className="row">
                <div className="d-flex justify-content-flex-start col-md-12 col-lg-6"></div>
                <div className="d-flex justify-content-center flex-column  col-md-12 col-lg-6">
                  <h1>
                    Bachelor of Education / Bachelor of Foreign Language Studies
                  </h1>
                  <h3>August 2011 - May 2017</h3>
                  <p className="job-description">3.5 GPA cum laude</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
