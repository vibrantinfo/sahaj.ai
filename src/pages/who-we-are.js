import React, { useState, useEffect } from "react";
import Layout from "components/layout";
import { Col } from "react-bootstrap";
import "page-styles/who-we-are.scss";
import HowWeWork from "page-components/HowWeWork/HowWeWork";
import WhoWeWorkWith from "page-components/WhoWeWorkWith/WhoWeWorkWith";
import queryString from "query-string";
import TabSwitcherVertical from "components/TabSwitcherVertical/TabSwitcherVertical";

export default function whoWeAre(props) {
  const activeTab = props.location.search
    ? queryString.parse(props.location.search).active
    : "who-we-work-with";
  const [newActiveTab, setNewActiveTab] = useState(activeTab);
  useEffect(() => {
    if (props.location.search) {
      setNewActiveTab(queryString.parse(props.location.search).active);
    }
  }, [props.location.search]);
  return (
    <Layout
      title="Who we are"
      className="who-we-are-page"
      location={props.location}
    >
      <div className="who-we-are">
        <div className="desc-section">
          <Col className="details" lg="8" xs="12">
            <div className="page-title">Who we are</div>
            <h1 className="title-text">
              Disrupting and transforming industries with data
            </h1>
            <div className="explanation">
              Sahaj is an artisanal, software engineering consultancy built on the values of trust, respect, curiosity and craftsmanship. We deliver purpose-built solutions to drive data-led transformation for organizations. Our emphasis is on craft as we create solutions with a razor-sharp focus to solve complex business and technology challenges and provide customers with a competitive edge.
            </div>
          </Col>
          <Col className="dictionary" lg="4" xs="12">
            <h1 className="hindi-name orange">सहज</h1>
            <div className="meaning">
              <div className="orange">sahaj/</div>
              <div className="type">adjective</div>
              <div className="desc">
                With its origin in Sanskrit, stands for “simplicity“ <br />{" "}
                Meaning: natural; original; innate; spontaneous.
              </div>
            </div>
          </Col>
        </div>

        <div className="tabbed-info-section">
          <TabSwitcherVertical
            className="who-we-are-tab-switcher"
            baseUrl="/who-we-are"
            tabs={[
              {
                value: "who-we-work-with",
                label: "Who we work with",
                component: <WhoWeWorkWith />,
                desc:
                  ["Our clients are industry disruptors, innovators, champions of social change and fearless experimenters. Hear from them as to how we are different and how we make a difference."],
              },
              {
                value: "how-we-work",
                label: "How we work",
                component: <HowWeWork />,
                desc:
                  ["We draw inspiration from your purpose and vision of your business, and partner with you by instituting nimble, agile teams that champion first principles thinking to enable your journey of transformation and success."],
              },
            ]}
            activeTab={newActiveTab}
            onChange={activeParam => {
              setNewActiveTab(activeParam);
            }}
            activeColor="light-blue"
            tabHoverClass="light-blue-hover"
            inactiveColor="bgBlue"
          />
        </div>
      </div>
    </Layout>
  );
}
