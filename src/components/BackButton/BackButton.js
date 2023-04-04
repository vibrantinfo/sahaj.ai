import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import "./BackButton.scss";

export default function BackButton(props) {
  const { to } = props;

  return (
    <Link className="back-button-anchor" to={to}>
      <button className="back-button">
        <div className="text light-purple-hover">{props.backLabel}</div>
      </button>
    </Link>
  );
}

BackButton.propTypes = {
  to: PropTypes.string.isRequired,
  backLabel: PropTypes.string,
};

BackButton.defaultProps = {
  backLabel: "Back",
};
