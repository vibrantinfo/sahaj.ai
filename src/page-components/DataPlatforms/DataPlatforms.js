import React from "react";
import YoutubeVideo from "components/YoutubeVideo";
import ThoughtLeadershipCard from "components/ThoughtLeadershipCard/ThoughtLeadershipCard";
import ClientStoryCard from "components/ClientStoryCard/ClientStoryCard";
import { Col } from "react-bootstrap";
import "./DataPlatforms.scss";

export default function DataPlatforms() {
  return (
    <div className="data-platforms">
      <div className="client-video-ctr">
        <YoutubeVideo videoUrl="https://www.youtube.com/embed/5vkmDcmWLlY" />
      </div>
      <div className="dp-masonry-listing">
        <Col lg="6" xs="12" className="dp-masonry-column">
          <ThoughtLeadershipCard
            title={
              "Simplicity and the art of building a learning solution for millions."
            }
            link="https://yourstory.com/2017/11/simplicity-building-learning-solution-for-millions"
            isClientShowcase
            showMediumIcon={false}
          />
          <ClientStoryCard
            title="Connected Vehicle Platform"
            desc="Custom-designed data stack and IoT solution for a connected vehicle platform designed to operate in emerging market conditions."
          />
          <ThoughtLeadershipCard
            title={
              "Data Set and Data Augmentation for Face Detection and Recognition"
            }
            link="https://hackernoon.com/data-set-and-data-augmentation-for-face-detection-and-recognition-6eu3n0a"
            showMediumIcon={false}
          />
        </Col>
        <Col lg="6" xs="12" className="dp-masonry-column">
          <ClientStoryCard
            title="Computer Vision based Shopfloor Automation"
            desc="Design the data platform for a computer- vision startup focused on manufacturing shop floor operations for superior scalability."
          />
          <ThoughtLeadershipCard
            title={"Fast Approximation on Massive Datasets"}
            link="https://medium.com/inspiredbrilliance/fast-approximation-on-massive-datasets-dd23117bab7f"
          />
          <ClientStoryCard
            title="Platform for business model transformation"
            desc="Business model transformation of an outdoor media and creative agency into a data driven platform-based business."
          />
          <ThoughtLeadershipCard
            title={"Spark Optimization Techniques"}
            link="https://medium.com/inspiredbrilliance/spark-optimization-techniques-a192e8f7d1e4"
          />
        </Col>
      </div>
    </div>
  );
}
