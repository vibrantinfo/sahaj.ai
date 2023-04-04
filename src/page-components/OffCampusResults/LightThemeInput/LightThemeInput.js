import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import "./LightThemeInput.scss";

export default function LightThemeInput(props) {
  const inputType = props.type === "mobile" ? "tel" : "email";
  const [inputValue, setInputValue] = useState("");
  const [isInvalid, setInvalidInput] = useState(false);
  const placeholder = props.type === "mobile" ? "mobile number" : "email";
  const invalidMessage =
    props.type === "mobile"
      ? "Please enter a valid mobile number"
      : "Please enter a valid email";
  const onChange = e => {
    setInputValue(e.target.value);
  };
  const validateAndSubmit = e => {
    e.preventDefault();
    if (props.type === "mobile") {
      if (inputValue.length !== 10) {
        setInvalidInput(true);
        return;
      } else {
        setInvalidInput(false);
      }
    } else {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isValidEmail = re.test(String(inputValue).toLowerCase());
      if (!isValidEmail) {
        setInvalidInput(true);
        return;
      } else {
        setInvalidInput(false);
      }
    }
    props.onSubmit(inputValue);
  };
  return (
    <form
      className={`light-theme-input ${props.type}`}
      onSubmit={validateAndSubmit}
    >
      <div className="input-with-arrow">
        {props.type === "mobile" ? <div className="country-code">+91</div> : ""}
        <input
          className="input-box"
          type={inputType}
          placeholder={placeholder}
          onChange={onChange}
          value={inputValue}
          maxLength={props.type === "mobile" ? 10 : undefined}
        />
        <FaArrowRight className="right-arrow" onClick={validateAndSubmit} />
      </div>
      {isInvalid && <div className="invalid-message">{invalidMessage}</div>}
    </form>
  );
}

LightThemeInput.propTypes = {
  type: PropTypes.string,
  onSubmit: PropTypes.func,
};

LightThemeInput.defaultProps = {
  type: "mobile",
  onSubmit: () => {},
};
