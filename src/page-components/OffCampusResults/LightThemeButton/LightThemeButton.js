import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./LightThemeButton.scss";

export default function LightThemeButton(props) {
  const { linkTo, children, onClick } = props;
  return (
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <button className="light-theme-button" onClick={onClick ? onClick : null}>
        {children}
        <FaArrowRight className="right-arrow" />
      </button>
    </a>
  );
}
