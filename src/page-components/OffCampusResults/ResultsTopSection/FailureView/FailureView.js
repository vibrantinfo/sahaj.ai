import React from "react";
import CubeGridYellow from "images/svgs/offcampus/cube_grid_yellow.svg";
import ThreeStones from "images/svgs/offcampus/three_stones.svg";
import OneStone from "images/svgs/offcampus/one_stone.svg";
import SocialLinks from "components/SocialLinks/SocialLinks";
import LightThemeButton from "page-components/OffCampusResults/LightThemeButton/LightThemeButton";
import "./FailureView.scss";

export default function FailureView() {
  return (
    <div className="failure-view">
      <div className="text-content container">
        <h4 className="sry-msg">WE ARE SO SORRY THAT YOU DID NOT MAKE IT</h4>
        <div className="try-msg">
          We hope that you will continue to try and participate in our next
          event.
        </div>
      </div>
      <div className="text-content container">
        <h1 className="opp">
          Keep an eye out for upcoming events and opportunities
        </h1>
      </div>
      <SocialLinks showOnlySocialMedias isLightThemed />
      <LightThemeButton linkTo="/">About Sahaj</LightThemeButton>
    </div>
  );
}
