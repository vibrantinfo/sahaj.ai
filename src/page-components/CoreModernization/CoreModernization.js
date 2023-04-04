import React from "react";
import { Col } from "react-bootstrap";
import YoutubeVideo from "components/YoutubeVideo";
import ThoughtLeadershipCard from "components/ThoughtLeadershipCard/ThoughtLeadershipCard";
import ClientStoryCard from "components/ClientStoryCard/ClientStoryCard";
import "./CoreModernization.scss";

export default function CoreModernization() {
  return (
    <div className="core-modernization">
      <div className="client-video-ctr">
        <YoutubeVideo videoUrl="https://www.youtube.com/embed/zL_-gb4XCHI" />
      </div>
      <div className="cm-masonry-listing">
        <Col lg="6" xs="12" className="cm-masonry-column">
          <ClientStoryCard
            title="Core Modernization of a Mobile Money Platform"
            desc="Comprehensive re-write of a platform for retail bank customers to improve configurability and scalability, to roll out new features and onboard new tenants faster."
          />
          <ClientStoryCard
            title="Upgrade Core to Support New Growth Strategy"
            desc="Improve extensibility and interoperability for an augment credit scoring provider, to support a growth strategy based on new partnerships."
          />
          <ThoughtLeadershipCard
            title={"Strangulating bare-metal infrastructure to Containers"}
            link="https://medium.com/inspiredbrilliance/strangulating-bare-metal-infrastructure-to-containers-4fcdab93ff43"
          />
        </Col>
        <Col lg="6" xs="12" className="cm-masonry-column">
          <ThoughtLeadershipCard
            title={
              "Technology capability for greater business resilience and adaptability"
            }
            link="https://medium.com/inspiredbrilliance/technology-capability-for-greater-business-resilience-and-adaptability-d205e5319e69"
            showMediumIcon={true}
          />
          <ClientStoryCard
            title="Product Core for eBook Authoring and Publishing"
            desc="Improve extensibility and interoperability for Platform with a custom-build workflow engine for a leading eBook reader, drastically reducing the cycle time from ‘Initial manuscript’ to ‘Publish.’"
          />
        </Col>
      </div>
    </div>
  );
}
