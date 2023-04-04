import React from "react";
import SahajLogo from "images/logos/sahaj_logo.svg";
import { Link } from "gatsby";
import Footer from "components/Footer/Footer";
import "../../page-styles/off-campus-results.scss";
import ResultsTopSection from "page-components/OffCampusResults/ResultsTopSection/ResultsTopSection";

export default function results() {
  return (
    <div className="off-campus-results">
      <div className="top-section">
        <Link to="/">
          <div className="logo-container">
            <img className="logo-light" src={SahajLogo} alt="Sahaj" />
          </div>
        </Link>
      </div>
      <div className="results-content">
        <ResultsTopSection></ResultsTopSection>
      </div>
      <Footer/>
    </div>
  );
}
