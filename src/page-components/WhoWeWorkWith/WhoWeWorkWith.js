import React, { useRef } from "react";
import { Carousel } from "react-bootstrap";
import "./WhoWeWorkWith.scss";
import YoutubeVideo from "components/YoutubeVideo";
import LeftArrow from "src/images/svgs/left_arrow.svg";
import RightArrow from "src/images/svgs/right_arrow.svg";
import { useStaticQuery, graphql } from "gatsby";
import ResponsiveImage from "components/ResponsiveImage/ResponsiveImage";

export const clientVideoEmbedUrls = [
  "https://www.youtube.com/embed/szRHSgeBneE",
  "https://www.youtube.com/embed/zL_-gb4XCHI",
  "https://www.youtube.com/embed/5vkmDcmWLlY",
];

export const TestimonialCard = ({
  description,
  name,
  designation,
  company,
}) => {
  return (
    <div className="testimonial-card">
      <div className="heading">Endorsement</div>
      <div className="description">{description}</div>
      <div className="author">
        {name}, {designation}, {company}
      </div>
    </div>
  );
};

export const VideoCard = ({ url }) => {
  return (
    <div className="client-video-ctr">
      <YoutubeVideo className="client-video" videoUrl={url} controls="true" />
    </div>
  );
};

export default function WhoWeWorkWith() {
  const sliderRef = useRef(null);

  const allClientQueries = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "logos/all_client_logos.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      mobile: file(relativePath: { eq: "logos/all_client_logos_mobile.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      testimonials: allStrapiTestimonials {
        nodes {
          id
          designation
          name
          content
          company
        }
      }
    }
  `);

  const allTestimonials = allClientQueries.testimonials.nodes;

  const imageSources = [
    {
      ...allClientQueries.desktop.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
    {
      ...allClientQueries.mobile.childImageSharp.fluid,
    },
  ];

  return (
    <div className="who-we-work-with">
      <div className="content">
        <div className="top-section">
          <div className="video-slider-section">
            <Carousel
              className="video-slider"
              ref={sliderRef}
              interval={null}
              slide={true}
              prevIcon={
                <LeftArrow className="navigation-arrows left-arrow" />
              }
              nextIcon={
                <RightArrow className="navigation-arrows right-arrow" />
              }
            >
              {clientVideoEmbedUrls.map((videoUrl, index) => (
                <Carousel.Item key={index}>
                  <VideoCard url={videoUrl} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="client-logo-block">
          <div className="logo-image">
            <ResponsiveImage fluid={imageSources} />
          </div>
        </div>
        <div className="client-testimonials">
          <Carousel
            className="testimonial-slider"
            ref={sliderRef}
            slide={true}
            interval={4000}
            controls={false}
            wrap={true}
            ride="carousel"
            pause="hover"
          >
            {allTestimonials.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <TestimonialCard
                  description={testimonial.content}
                  name={testimonial.name}
                  designation={testimonial.designation}
                  company={testimonial.company}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
