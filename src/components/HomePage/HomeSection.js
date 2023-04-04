import React from "react";
import "./HomeSection.scss";
import { Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import ArtisanalWatermark from "images/watermark/135.svg";
import Image from "gatsby-image";

export default function HomeSection() {
  const artisanalGraphicImage = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "graphics/landing_graphic_1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <div className="home-page">
      <section className="top-section">
        <img className="graphic-watermark disable-mobile"src={ArtisanalWatermark}/>
        <Col className="left-section" lg="6" xs="12">
          <div className="graphic-img">
            <Image fluid={artisanalGraphicImage.image.childImageSharp.fluid} />
          </div>
        </Col>
        <Col className="right-section" lg="6" xs="12">
          <div className="artisanal-section">
            <h1 className="artisanal-text">
              <span>Artisanal</span> engineering expertise
            </h1>
            <p className="para">
              We are an artisanal software engineering firm delivering purpose-built solutions 
              in software and data engineering by leveraging AI, ML, and data science to unlock 
              the full potential of data and drive data-led transformation for organizations.
            </p>
          </div>
          <div className="dictionary">
            <div className="orange">ar·ti·san·al /ärˈtēzən(ə)l/</div>
            <div className="type">adjective</div>
            <div className="desc">
              relating to or characteristic of an artisan. e.g. artisanal
              skills. custom crafted with time-tested methods and high quality
              ingredients.
            </div>
          </div>
        </Col>
      </section>
    </div>
  );
}
