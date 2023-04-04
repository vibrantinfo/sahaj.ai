import React from "react";
import LightThemeInput from "../../LightThemeInput/LightThemeInput";
import { OFFCAMPUS_RESULTS_VIEWS } from "../../../../constants/constants";
import "./WelcomeView.scss";

export default function WelcomeView(props) {
  const { onSubmit } = props;
  const onMobileSubmit = async mobileNumber => {
    onSubmit(OFFCAMPUS_RESULTS_VIEWS.LOADING);
    const response = await fetch(
      `https://remotecampusapi.sahaj.ai/result/mobile/${mobileNumber}`
    );

    const result = await response.text();
    if (result === "pursue") {
      onSubmit(OFFCAMPUS_RESULTS_VIEWS.PASSVIEW);
    } else {
      onSubmit(OFFCAMPUS_RESULTS_VIEWS.FAILUREVIEW);
    }
  };
  const onEmailSubmit = async emailId => {
    onSubmit(OFFCAMPUS_RESULTS_VIEWS.LOADING);
    const response = await fetch(
      `https://remotecampusapi.sahaj.ai/result/email/${emailId}`
    );
    const result = await response.text();
    if (result === "pursue") {
      onSubmit(OFFCAMPUS_RESULTS_VIEWS.PASSVIEW);
    } else {
      onSubmit(OFFCAMPUS_RESULTS_VIEWS.FAILUREVIEW);
    }
  };
  return (
    <div className="welcome-view">
      <div className="welcome">Welcome to our</div>
      <div className="main-heading">VIRTUAL OFF-CAMPUS PLACEMENT EVENT</div>
      <div className="results-heading">
        <h2>THE RESULTS ARE OUT!</h2>
      </div>
      <div className="instruction">
        Please enter your phone number <b>or</b> email address to view your
        result
      </div>
      <div className="input-buttons">
        <div className="phone-input">
          <LightThemeInput
            onSubmit={mobileNum => {
              onMobileSubmit(mobileNum);
            }}
          />
        </div>
        <div>
          <LightThemeInput
            onSubmit={emailId => {
              onEmailSubmit(emailId);
            }}
            type="email"
          />
        </div>
      </div>
    </div>
  );
}
