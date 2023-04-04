import React, { useState, useEffect } from "react";
import Layout from "components/layout";
import { Col } from "react-bootstrap";
import TabSwitcherVertical from "components/TabSwitcherVertical/TabSwitcherVertical";
import queryString from "query-string";
import AnalyticsAndAI from "page-components/AnalyticsAndAI/AnalyticsAndAI";
import DataPlatforms from "page-components/DataPlatforms/DataPlatforms";
import CoreModernization from "page-components/CoreModernization/CoreModernization";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import "page-styles/what-we-do.scss";

export const HeaderWithText = ({ header, text }) => {
  return (
    <div className="header-with-text">
      <h2 className="header-text">{header}</h2>
      <div className="text-desc">{text}</div>
    </div>
  );
};

export default function whatWeDo(props) {
  const activeTab = props.location.search
    ? queryString.parse(props.location.search).active
    : "analytics-and-ai";
  const [newActiveTab, setNewActiveTab] = useState(activeTab);

  const purposeSolutionImage = useStaticQuery(graphql`
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

  useEffect(() => {
    if (props.location.search) {
      setNewActiveTab(queryString.parse(props.location.search).active);
    }
  }, [props.location.search]);

  return (
    <Layout
      className="what-we-do-page"
      title="What we do"
      location={props.location}
    >
      <div className="what-we-do">
        <div className="detail-ctr">
          <Col lg="6" xs="12" className="graphic-col">
            <div className="graphic-img">
              <Image
                fluid={
                  purposeSolutionImage.purposeSolutions.childImageSharp.fluid
                }
              />
            </div>
          </Col>
          <Col lg="6" xs="12" className="detail">
            <div className="small-title">What we do</div>
            <h1 className="header-text">
              Purpose-built Solutions & Technology Advisory
            </h1>
            <div className="explanation">
              We solve a wide spectrum of complex problems by leveraging Platform Engineering to Data Analytics 
              and Data Science to craft purpose-built solutions and offer technology advisory. Our solutions 
              evolve and adapt to cater to your complex needs - each solution is unique like a fingerprint!
            </div>
          </Col>
        </div>
        <div className="tabbed-info-section">
          <TabSwitcherVertical
            className="who-we-do-tab-switcher"
            title="What we do"
            tabs={[
              {
                value: "analytics-and-ai",
                label: "Data Science",
                component: <AnalyticsAndAI />,
                desc:
                  ["We craft customized product experiences and solutions driven by data and enriched with the intelligence and inferences leveraging Artificial Intelligence and Machine Learning."],
              },
              {
                value: "data-platforms",
                label: "Analytics & Data Platforms",
                component: <DataPlatforms />,
                desc:
                  ["Scalable analytics and data platforms that power digital experiences and actionable insights form the core of data-centric business models. We partner with you to solve complex problems of platform design, big data infrastructure, and data engineering to unlock the full potential of data."],
              },
              {
                value: "core-modernization",
                label: "Platform Engineering",
                component: <CoreModernization />,
                desc:
                  ["We simplify the complexities for your business - whether it’s functionality or integrations, or challenges of elastic scale, peak performance, robust security, we craft and overhaul digital platforms to drive success."],
              },
            ]}
            activeTab={newActiveTab}
            onChange={activeParam => {
              setNewActiveTab(activeParam);
            }}
            activeColor="dark-yellow"
            tabHoverClass="dark-yellow-hover"
            inactiveColor="bgBlue"
          />
        </div>
      </div>
    </Layout>
  );
}
