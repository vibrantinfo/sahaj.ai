import React from "react";
import PropTypes from "prop-types";
import { FaMediumM } from "react-icons/fa";
import "./ThoughtLeadershipCard.scss";

export default function ThoughtLeadershipCard({
  title,
  link,
  showMediumIcon,
  isClientShowcase,
}) {
  return (
    <div className={`thought-leadership-card`}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="small-title-text">
          {isClientShowcase ? "Client Showcase" : "Thought Leadership"}
        </div>
        <h2 className="medium-blog-title">{title}</h2>
        <div className="bottom-section">
          <div className="icon-with-link">
            {showMediumIcon && <FaMediumM className="medium-icon" />}
            <span className="medium-link">Read More</span>
          </div>
        </div>
      </a>
    </div>
  );
}

ThoughtLeadershipCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  showMediumIcon: PropTypes.bool,
  isClientShowcase: PropTypes.bool,
};

ThoughtLeadershipCard.defaultProps = {
  className: "",
  showMediumIcon: true,
  isClientShowcase: false,
};
