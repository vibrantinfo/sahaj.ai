import React from "react";
import { Col } from "react-bootstrap";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import LightThemeButton from "page-components/OffCampusResults/LightThemeButton/LightThemeButton";
import BgGridPattern from "images/svgs/offcampus/bg_grid_pattern.svg";
import BgCubeGroup from "images/svgs/offcampus/bg_cube_group.svg";
import OneStone from "images/svgs/offcampus/one_stone.svg";
import { OFFCAMPUS_RESULTS_VIEWS } from "../../../constants/constants";
import "./AboutUs.scss";

const AboutUs = ({ activeView }) => {
  const { WELCOME } = OFFCAMPUS_RESULTS_VIEWS;
  const images = useStaticQuery(graphql`
    query {
      purposeSolutions: file(
        relativePath: { eq: "graphics/landing_graphic_3.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const TextContent = () => {
    return (
      <>
        <h1 className="title">We inspire brilliance, among us and around us</h1>
        <div className="description">
          Read about the little things that can make a big difference and our
          reflections on how big ideas influence the smallest actions.
        </div>
      </>
    );
  };

  const RedirectButtons = () => {
    return (
      <div className="actions">
        <LightThemeButton linkTo="/what-we-think?active=founding-stories">
          Founding Stories
        </LightThemeButton>
        <LightThemeButton linkTo="/">About Sahaj</LightThemeButton>
      </div>
    );
  };

  const SideGraphicsDesktop = () => {
    return (
      <div className="side-graphics">
        <Image fluid={images.purposeSolutions.childImageSharp.fluid} className="side-illustration"/>
      </div>
    );
  };

  const MobileBottomGraphics = () => {
    return (
      <div className="mobile-bottom-graphics hide-desktop">
        {activeView === WELCOME ? (
          <OneStone className="one-stone" />
        ) : (
          <BgCubeGroup className="bg-cube-group" />
        )}
      </div>
    );
  };

  return (
    <>
      <div className="about-us-ctr">
        <Col lg="6" xs="12" className="content-ctr">
          <div className="content">
            <TextContent />
            <RedirectButtons />
          </div>
        </Col>
        <Col lg="6" xs="12" className="graphic-ctr">
          <SideGraphicsDesktop />
        </Col>
      </div>
      <MobileBottomGraphics />
    </>
  );
};

export default AboutUs;
