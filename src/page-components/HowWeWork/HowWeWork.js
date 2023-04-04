import React from "react";
import "./HowWeWork.scss";
import TypeOne from "images/svgs/row_one.svg";
import TypeTwo from "images/svgs/row_two.svg";
import TypeThree from "images/svgs/row_three.svg";
import TypeFour from "images/svgs/row_four.svg";
import TypeMobile from "images/svgs/mobile_row_two.svg";
import { Col, Row } from "react-bootstrap";

const solutionDesignList = [
  {
    from: "stated challenges",
    to: "discovering complex business issues under the hood",
  },
  {
    from: "force fitting solutions and technology",
    to: "first principles thinking for solution design",
  },
  {
    from: "jumping to one-best solution",
    to: "a collaborative approach to identify the best-fit solution.",
  },
  {
    from: "avoiding ambiguity and complexity",
    to: "taming complexity and designing for change.",
  },
];

const solutionMessageList = [
  {
    top: "First principles thinking",
    bottom: "Leads to optimal solution choices, without technology force fits.",
  },
  {
    top: "Small Cohesive Teams",
    bottom: "Drive sharper focus, more effective collaboration, and earlier feedback",
  },
  {
    top: "Always Enabling Clients",
    bottom: "To move forward without any ongoing dependency on Sahaj.",
  },
];

const craftingMessage = "We craft purpose-built solutions by combining platform engineering, data engineering and data science, and enable our clients to be data-native and stay ahead of the curve with an aII-focused delivery model and nimble execution methodology";

export const SolutionCard = ({ from, to, colorclass }) => {
  return (
    <div className={"principles-card " + colorclass}>
      <div className="from-detail">From {from}</div>
      <div className="to-detail">To {to}</div>
    </div>
  );
};

export const SolutionCardWithCoreMessage = ({ top, bottom, colorclass }) => {
  return (
    <div className={"principles-card no-bottom " + colorclass}>
      <div className="top-detail">{top}</div>
      <div className="bottom-detail">{bottom}</div>
    </div>
  );
};

export const SolutionCardOnlyMessage = ({ message, colorclass }) => {
  return (
    <div className={"principles-card " + colorclass}>
      <div className="message-detail">{message}</div>
    </div>
  );
};

export default function HowWeWork() {
  return (
    <div className="how-we-work">
      <div className="solution-design">
        <Col lg="5" xs="12" className="design-desc">
          <div className="principles-container">
            <div className="text-container">
              <h2 className="title-text">Our thinking</h2>
              <div className="sub-text">
                The pursuit of simple solutions to hard problems
              </div>
            </div>
          </div>
        </Col>
        <Col lg="8" xs="12" className="principles-cards-ctr">
          <Row className="principles-grid first-row">
            <Col lg="4" xs="12" className="card-container">
              <SolutionCard
                from={solutionDesignList[0].from}
                to={solutionDesignList[0].to}
                colorclass="one"
              />
            </Col>
            <Col lg="4" xs="12" className="card-container">
              <SolutionCard
                from={solutionDesignList[1].from}
                to={solutionDesignList[1].to}
                colorclass="two"
              />
            </Col>
            <Col lg="3" className="card-container disable-mobile-how">
              <div className="graphic-img disable-mobile-how first-graphic">
                <TypeOne/>
              </div>
            </Col>
          </Row>
          <Row className="principles-grid second-row">
            <Col lg="4" xs="12" className="card-container">
              <SolutionCard
                from={solutionDesignList[2].from}
                to={solutionDesignList[2].to}
                colorclass="three"
              />
            </Col>
            <Col lg="4" xs="12" className="card-container">
              <SolutionCard
                from={solutionDesignList[3].from}
                to={solutionDesignList[3].to}
                colorclass="four"
              />
              <div className="graphic-img fourth-graphic disable-large">
                <TypeMobile/>
              </div>
            </Col>
          </Row>
          <Row className="principles-grid third-row">
            <Col lg="8" xs="12" className="card-container">
              <SolutionCardOnlyMessage
                message={craftingMessage}
                colorclass="bg-blue-background"
              />
              <div className="graphic-img second-graphic">
                <TypeTwo/>
              </div>
            </Col>
          </Row>
          <Row className="principles-grid second-row">
            <Col lg="4" xs="12" className="card-container">
              <SolutionCardWithCoreMessage
                top={solutionMessageList[0].top}
                bottom={solutionMessageList[0].bottom}
                colorclass="one"
              />
              <div className="graphic-img fourth-graphic disable-mobile-how">
                <TypeFour/>
              </div>
            </Col>
            <Col lg="4" xs="12" className="card-container">
              <SolutionCardWithCoreMessage
                top={solutionMessageList[1].top}
                bottom={solutionMessageList[1].bottom}
                colorclass="four"
              />
            </Col>
            <Col lg="4" xs="12" className="card-container">
              <SolutionCardWithCoreMessage
                top={solutionMessageList[2].top}
                bottom={solutionMessageList[2].bottom}
                colorclass="two"
              />
            </Col>
            <Col lg="3" className="card-container disable-tablet disable-mobile-how">
              <div className="graphic-img third-graphic">
                <TypeThree/>
              </div>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
}
