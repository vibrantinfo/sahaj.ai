import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Collapse } from "react-bootstrap";
import "./Dropdown.scss";

export default function Dropdown(props) {
  const [isExpanded, setExpanded] = useState(false);
  const expandedCls = isExpanded ? "expanded" : "";
  const relativeMenuCls = props.isRelativeMenu ? "relative" : "";
  const whiteBgndCls = props.forWhiteBgnd ? "white-bg" : "";
  const transparentBgndCls = props.transparentBgnd ? "transparent-bg" : "";
  const onDropdownToggle = () => {
    setExpanded(isExpanded => !isExpanded);
  };

  const onDropDownClose = () => {
    setExpanded(false);
  };

  return (
    <div
      className={`dropdown ${props.className} ${expandedCls} ${relativeMenuCls} ${whiteBgndCls} ${transparentBgndCls}`}
      onClick={onDropdownToggle}
      onBlur={onDropDownClose}
      tabIndex={0}
    >
      <div className="label-with-icon">
        <div className="dropdown-label">{props.label}</div>
        <div className="dropdown-icon">
          <FaAngleDown />
        </div>
      </div>
      <Collapse in={isExpanded} timeout={200}>
        <div className={`custom-dropdown-menu`}>
          {props.options.map((option, index) => (
            <div key={index} className="dropdown-option clickable">
              {option}
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
}

Dropdown.defaultProps = {
  className: "",
  label: "",
  relativeMenu: false,
  forWhiteBgnd: false,
  transparentBgnd: false,
};
