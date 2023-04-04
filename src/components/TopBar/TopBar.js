import React, { useState } from "react";
import "./TopBar.scss";
import SahajLogo from "images/logos/sahaj_logo.svg";
import DotsIcon from "images/icons/dots_icon.svg";
import SideBar from "components/SideBar/SideBar";
import { Link } from "gatsby";

export default function TopBar(props) {
  const [isSideBarCollapsed, setSideBarCollapsed] = useState(true);

  const onSideBarOpen = () => {
    setSideBarCollapsed(false);
    props.setShowOverlay(true);
  };
  const onSideBarClose = () => {
    setSideBarCollapsed(true);
    props.setShowOverlay(false);
  };

  const { location } = props;
  const getLocationClsIfActive = locationUrl => {
    if (
      location &&
      location.pathname &&
      location.pathname.includes(locationUrl)
    ) {
      return "active";
    }
    return "";
  };

  return (
    <>
      <div className={`topbar`}>
        <div className="topbar-brand">
          <Link to="/">
            <img className="sahaj-icon" src={SahajLogo} alt="Sahaj" />
          </Link>
        </div>
        <div className="topbar-items">
          <div
            className={`topbar-item who-we-are-item ${getLocationClsIfActive(
              "/who-we-are"
            )}`}
          >
            <Link to="/who-we-are">Who we are</Link>
          </div>
          <div
            className={`topbar-item what-we-do-item ${getLocationClsIfActive(
              "/what-we-do"
            )}`}
          >
            <Link to="/what-we-do">What we do</Link>
          </div>
          <div
            className={`topbar-item what-we-think-item ${getLocationClsIfActive(
              "/what-we-think"
            )}`}
          >
            <Link to="/what-we-think">What we think</Link>
          </div>
        </div>
        <div className="dot-icon-container">
          <img
            className="dot-icon"
            src={DotsIcon}
            alt="More"
            onClick={onSideBarOpen}
          />
        </div>
      </div>
      <SideBar collapsed={isSideBarCollapsed} onSideBarClose={onSideBarClose} />
    </>
  );
}
