import React from "react";
import "./Principles.scss";
import { Col } from "react-bootstrap";
import Button from "components/Button/Button";
import { useStaticQuery, graphql } from "gatsby";
import FirstPWatermark from "images/watermark/136.svg";
import PurposeWatermark from "images/watermark/137.svg";
import SimplifyWatermark from "images/watermark/138.svg";
import Image from "gatsby-image";

export default function Principles() {
  const images = useStaticQuery(graphql`
    query {
      firstPrinciples: file(
        relativePath: { eq: "graphics/landing_graphic_2.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      purposeSolutions: file(
        relativePath: { eq: "graphics/landing_graphic_3.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lessMore: file(relativePath: { eq: "graphics/landing_graphic_4.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <div className="principles">
      <div className="first-principles-thinking">
        <img className="graphic-watermark disable-mobile" src={FirstPWatermark}/>
        <Col lg="6" xs="12" className="first-principles-value">
          <h1 className="value-text">
            <span> First-principles </span> thinking
          </h1>
          <p>
            We apply first principles thinking to solution design. To look beyond any conventions or 
            assumptions and focus on what’s essential leads to optimal solution choices without 
            technology force fits. This is how we pursue simplicity in the solutions we craft.
          </p>
          <Button className="light-blue-background light-purple-hover" linkTo="/who-we-are">
            Who we are
          </Button>
        </Col>
        <Col lg="6" xs="12" className="graphic-ctr">
          <div className="graphic-img">
            <Image fluid={images.firstPrinciples.childImageSharp.fluid} />
          </div>
        </Col>
      </div>
      <div className="value-ctr">
      <img className="graphic-watermark disable-mobile" src={PurposeWatermark}/>
        <Col lg="6" xs="12" className="value">
          <div className="graphic-img">
            <Image fluid={images.purposeSolutions.childImageSharp.fluid} />
          </div>
        </Col>
        <Col className="explanation" lg="6" xs="12">
          <h1 className="value-text">
            <span>Purpose-built solutions & technology advisory</span>{" "}
          </h1>
          <p className="para para-1">
            We solve a wide spectrum of complex problems by leveraging Platform Engineering 
            to Data Analytics and Data Science to craft purpose-built solutions and offer 
            technology advisory. Our solutions evolve and adapt to cater to your complex needs 
            - each solution is unique like a fingerprint!
          </p>
          <Button className="dark-yellow-background light-purple-hover" linkTo="/what-we-do">
            What We Do
          </Button>
        </Col>
      </div>
      <div className="problem-solving-ctr">
      <img className="graphic-watermark disable-mobile" src={SimplifyWatermark}/>
        <Col className="problems-explanation" lg="6" xs="12">
          <h1 className="problems-text">
            <span>Simplifying complexity</span>
          </h1>
          <p className="para">
            We strive for creativity and simplicity to create and deliver technology-based solutions 
            that provide our customers a competitive advantage. Our emphasis on craft makes us different.
          </p>
          <Button className="light-red-background light-purple-hover" linkTo="/what-we-think">
            What we think
          </Button>
        </Col>
        <Col className="graphic-ctr" lg="6" xs="12">
          <div className="graphic-img">
            <Image fluid={images.lessMore.childImageSharp.fluid} />
          </div>
        </Col>
      </div>
    </div>
  );
}
