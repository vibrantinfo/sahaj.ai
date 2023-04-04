import React, { useState, useEffect } from "react";
import Layout from "components/layout";
import MediumBlogListing from "page-components/MediumBlogListing/MediumBlogListing";
import StoriesListing from "components/StoriesListing/StoriesListing";
import OurAccelerators from "components/OurAccelerators/OurAccelerators"
import "page-styles/what-we-think.scss";
import { Col } from "react-bootstrap";
import TabSwitcherVertical from "components/TabSwitcherVertical/TabSwitcherVertical";
import queryString from "query-string";

export default function whatWeThink(props) {
  const activeTab = props.location.search
    ? queryString.parse(props.location.search).active
    : "technology-and-business";
  const [newActiveTab, setNewActiveTab] = useState(activeTab);

  useEffect(() => {
    if (props.location.search) {
      setNewActiveTab(queryString.parse(props.location.search).active);
    }
  }, [props.location.search]);

  return (
    <Layout
      className="what-we-think-page"
      title="What we think"
      location={props.location}
    >
      <div className="what-we-think">
        <Col xs="12" xl={{ offset: 2, span: 8 }} className="top-section">
          <div className="page-title">What we think</div>
          <h1 className="header-text">
            Thought pieces about technology, people and other ingredients that inspire brilliance
          </h1>
          <div className="description">
            We are a people’s collective that stands for a shared purpose - everyone owns 
            the dreams, ideas, ideologies, successes, and failures of the organization, a 
            synergy that is rooted in the ethos of honesty, respect, trust, and equitability. 
            Read about the little things that make a big difference and our reflections on 
            how big ideas influence the smallest actions.{" "}
          </div>
        </Col>
        <div className="tabbed-info-section">
          <TabSwitcherVertical
            className="who-we-are-tab-switcher"
            baseUrl="/who-we-are"
            tabs={[
              {
                value: "technology-and-business",
                label: "Technology & Business",
                component: <MediumBlogListing />,
                desc:
                  ["Crafting purpose-built solutions across various segments require keeping an eye on technology, process and how things work."],
              },
              {
                value: "founding-stories",
                label: "Founding Stories",
                component: <StoriesListing />,
                desc:
                  ["Founding stories archived forever. Stories about the culture and values that make Sahaj a company that is simply unique."],
              },
              {
                value: "our-accelerators",
                label: "Our Accelerators",
                component: <OurAccelerators />,
                desc:
                  ["We craft open-source frameworks and leverage them to expedite the solutioning process - delivering faster GTM, and dispense with expensive licensing."],
              }
            ]}
            activeTab={newActiveTab}
            onChange={activeParam => {
              setNewActiveTab(activeParam);
            }}
            activeColor="light-red"
            tabHoverClass="light-red-hover"
            inactiveColor="bgBlue"
          />
        </div>
      </div>
    </Layout>
  );
}
