import React, { useState } from "react";
import FailureView from "./FailureView/FailureView";
import PassView from "./PassView/PassView";
import "./ResultsTopSection.scss";
import WelcomeView from "./WelcomeView/WelcomeView";
import { OFFCAMPUS_RESULTS_VIEWS } from "../../../constants/constants";
import AboutUs from "page-components/OffCampusResults/AboutUs/AboutUs";
import { Spinner } from "react-bootstrap";

export default function ResultsTopSection() {
  const { LOADING, WELCOME, PASSVIEW, FAILUREVIEW } = OFFCAMPUS_RESULTS_VIEWS;
  const [activeView, setActiveView] = useState(WELCOME);
  const getActiveView = () => {
    switch (activeView) {
      case WELCOME:
        return <WelcomeView onSubmit={setActiveView} />;
      case PASSVIEW:
        return <PassView />;
      case FAILUREVIEW:
        return <FailureView />;
      case LOADING:
        return (
          <div className="spinner-ctr">
            <Spinner
              className="growing-loader"
              animation="grow"
              variant="primary"
            />
            <Spinner
              className="growing-loader"
              animation="grow"
              variant="primary"
            />
            <Spinner
              className="growing-loader"
              animation="grow"
              variant="primary"
            />
          </div>
        );
    }
  };
  return (
    <div className="results-top-section">
      {getActiveView()}
      {activeView === FAILUREVIEW ? "" : <AboutUs activeView={activeView} />}
    </div>
  );
}
