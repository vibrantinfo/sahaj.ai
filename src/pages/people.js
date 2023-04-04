import React, { useState } from "react";
import Layout from "components/layout";
import { MEMBER_TYPE } from "../constants/constants";
import TabSwitcherVertical from "components/TabSwitcherVertical/TabSwitcherVertical";
import PeopleListing from "page-components/PeopleListing/PeopleListing";
import "page-styles/people.scss";
import PeopleGroupedListing from "page-components/PeopleGroupedListing/PeopleGroupedListing";

export default function people({ location }) {
  const [newActiveTab, setNewActiveTab] = useState("artisans");
  return (
    <Layout title="People" className="people-page" location={location}>
      <div className="people">
        <div className="intro-section">
          <div className="small-title">Our People</div>
          <h1 className="header-text">
            Our people are masters of their craft, in relentless pursuit of bold ideas
          </h1>
          <div className="desc">
            At Sahaj, people are not a means to an end, they are the heart of this organization, pulsating with energy and nurturing it with their sublime creativity.{" "}
          </div>
        </div>
        <div className="people-listing-ctr">
          <div className="tabbed-info-section">
            <TabSwitcherVertical
              className="who-we-do-tab-switcher"
              title="What we do"
              tabs={[
                {
                  value: "artisans",
                  label: "Artisans",
                  component: (
                    <PeopleListing
                      memberTypes={[
                        MEMBER_TYPE.MEMBER,
                        MEMBER_TYPE.FOUNDER,
                        MEMBER_TYPE.PARTNER,
                      ]}
                    />
                  ),
                  desc: [
                    "Everyone in Sahaj is an artisan, solving each problem with a distinct stamp of individuality and creativity; with these brilliant minds nudging us, we are moving forward in our journey to craft world-class purpose-built solutions.",
                  ],
                },
                {
                  value: "enablers",
                  label: "Enablers",
                  component: (
                    <PeopleGroupedListing
                      groupByInOrder={[
                        {
                          key: "memberTypes",
                          value: MEMBER_TYPE.FOUNDER,
                          label: "Founders",
                        },
                        {
                          key: "memberTypes",
                          value: MEMBER_TYPE.PARTNER,
                          label: "Partners",
                        },
                      ]}
                    />
                  ),
                  desc:
                    ["Founders and partners are at the helm of Sahaj, ensuring that the organization remains true to its vision and the ethos of trust, respect, curiosity and craftsmanship are nurtured every step of the way as Sahaj grows."],
                },
                {
                  value: "influencers",
                  label: "Influencers",
                  component: (
                    // <PeopleListing memberTypes={[MEMBER_TYPE.TECHNOLOGY_ADVISOR, MEMBER_TYPE.STRATEGY_ADVISOR]} />
                    <PeopleGroupedListing
                      groupByInOrder={[
                        {
                          key: "memberTypes",
                          value: MEMBER_TYPE.STRATEGY_ADVISOR,
                          label: "Strategy"
                        },
                        {
                          key: "memberTypes",
                          value: MEMBER_TYPE.TECHNOLOGY_ADVISOR,
                          label: "Technology"
                        }
                      ]}
                    />
                  ),
                  desc:
                    ["A panel of industry experts--entrepreneurs, investors, enterprise leaders and technology visionaries--are our advisors."],
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
      </div>
    </Layout>
  );
}
