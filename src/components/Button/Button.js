import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import "./Button.scss";

export default function Button(props) {
  const { className, linkTo, color, onClick, isBlock } = props;
  const onButtonClick = e => {
    e.stopPropagation();
    navigate(linkTo);
  };
  const isBlockCls = isBlock ? "is-block" : "";

  return (
    <button
      className={`button ${className} ${color} ${isBlockCls}`}
      onClick={onClick ? onClick : onButtonClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  linkTo: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  isBlock: PropTypes.bool,
};

Button.defaultProps = {
  className: "",
  linkTo: null,
  color: "white",
  onClick: null,
  isBlock: true,
};
