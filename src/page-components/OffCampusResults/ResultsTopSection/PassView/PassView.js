import React from "react";
import "./PassView.scss";
import Victorysymbol from "images/svgs/offcampus/victorysymbol.svg";
import Process from "images/svgs/offcampus/process.svg";
import { Col } from "react-bootstrap";

export default function PassView() {
  return (
    <div className="pass-view">
      <div className="victory-container">
        <div className="victory-sign">
          <Victorysymbol></Victorysymbol>
        </div>
      </div>

      <div className="congratulations">
        <h2>CONGRATULATIONS!</h2>
      </div>
      <div className="shortlisted">
        you have been shortlisted for the next round
      </div>
      <div className="sneak-preview">Preview our process below</div>

      <div className="our-process">
        <Col lg="6" xs="12" className="process-image-ctr">
          <div className="process-image">
            <Process></Process>
          </div>
        </Col>
        <Col lg="6" xs="12" className="process-content-ctr">
          <div className="process-heading">Our Process</div>
          <div className="steps">
            <ol>
              <li>
                <span>
                  Online Presentation about Sahaj and other details about the
                  job opening{" "}
                  <b>
                    on<span className="highlight"> 28th October, 2021</span>.
                    We will be communicating the time of presentation and online
                    test with you over an email.
                  </b>
                </span>
              </li>
              <li>
                <span>
                  A
                  <span className="highlight">
                    <b> 30 min aptitude test </b>
                  </span>
                  on our test platform. Shortlisted people will go through
                  further rounds. The test will be on fundamentals like CS, DS,
                  DBMS, OS, CN, OOPs & Programming
                </span>
              </li>
              <li>
                <span>
                  The
                  <b>
                    <span className="highlight"> result</span> of the aptitude
                    test will be announced once the test is completed
                  </b>{" "}
                  for everyone
                </span>
              </li>
            </ol>
          </div>
        </Col>
      </div>
    </div>
  );
}
