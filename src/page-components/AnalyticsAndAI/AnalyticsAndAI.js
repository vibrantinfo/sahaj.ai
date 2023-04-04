import React, { useState } from "react";
import YoutubeVideo from "components/YoutubeVideo";
import ThoughtLeadershipCard from "components/ThoughtLeadershipCard/ThoughtLeadershipCard";
import ClientStoryCard from "components/ClientStoryCard/ClientStoryCard";
import PlayIcon from "images/svgs/play_icon.svg";
import { Col, Modal } from "react-bootstrap";
import "./AnalyticsAndAI.scss";

export default function AnalyticsAndAI() {
  const [isVideoOpen, setVideoOpen] = useState(false);
  const handleClose = () => setVideoOpen(false);
  return (
    <div className="analytics-and-ai">
      <div className="client-video-ctr">
        <YoutubeVideo videoUrl="https://www.youtube.com/embed/szRHSgeBneE" />
      </div>
      <div className="ai-masonry-listing">
        <Col lg="6" xs="12" className="ai-masonry-column">
          <ThoughtLeadershipCard
            title={"Hands-on Post GIS, exploring the Geospatial capabilities"}
            link="https://medium.com/inspiredbrilliance/hands-on-postgis-exploring-the-geospatial-capabilities-fae7eda8fa11"
          />
          <ClientStoryCard
            title="Creative Approvals with Computer Vision"
            desc="Intelligent automation of creative reviews and approval to be compliant with specific guidelines."
          />
          <ThoughtLeadershipCard
            title={"AI for Manufacturing Industry"}
            link="https://medium.com/inspiredbrilliance/ai-for-manufacturing-industry-c64d1623fd47"
          />
        </Col>
        <Col lg="6" xs="12" className="ai-masonry-column">
          <ClientStoryCard
            title="AI-based Test Prep Solution"
            desc="Redesign of data model and technology architecture to massively scale the number of concurrent users for a test prep and scoring platform."
          />

          <ClientStoryCard
            title="Partnering to build an advanced analytics product"
            desc={
              <PlayIcon
                className="play-icon clickable"
                onClick={() => {
                  setVideoOpen(true);
                }}
              />
            }
          />
          <ClientStoryCard
            title="Content Discovery Product"
            desc="Custom-built natural language processing solution for a global content digitization and aggregation company."
          />
          <ThoughtLeadershipCard
            title={"Using AI to Solve Business Critical Problems"}
            link="https://www.cxotoday.com/news-analysis/using-ai-to-solve-business-critical-problems/"
            showMediumIcon={false}
          />
        </Col>
      </div>
      <Modal
        className="client-video-modal"
        show={isVideoOpen}
        onHide={handleClose}
        centered
        size="xl"
      >
        <div className="client-video-ctr">
          <YoutubeVideo videoUrl="https://www.youtube.com/embed/5vkmDcmWLlY" />
        </div>
      </Modal>
    </div>
  );
}
