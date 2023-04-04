import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import "./TabSwitcher.scss";

export default function TabSwitcher(props) {
  const { className, title, tabs, activeTab, onChange, isLeftTabs } = props;
  const activatedTab = props.tabs.find(tab => tab.value === activeTab);
  const leftTabsCls = isLeftTabs ? "left-tabs" : "";

  return (
    <div className={`tab-switcher ${className} ${leftTabsCls}`}>
      <Col md="8" xs="12" className="active-content">
        {activatedTab.component}
      </Col>
      <Col md="4" xs="12" className="tabs">
        <div className="sticky-content">
          <div className="title-text orange">{title}</div>
          {tabs.map(tab => {
            const activeTabCls =
              tab.value === activatedTab.value ? "active" : "";
            return (
              <h4 className={`tab-item ${activeTabCls}`} key={tab.value}>
                <button
                  onClick={() => {
                    onChange(tab.value);
                  }}
                >
                  {tab.label}
                </button>
              </h4>
            );
          })}
        </div>
      </Col>
    </div>
  );
}

TabSwitcher.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      component: PropTypes.element,
    })
  ),
  baseUrl: PropTypes.string,
  activeTab: PropTypes.string,
  isLeftTabs: PropTypes.bool,
};

TabSwitcher.defaultProps = {
  className: "",
  tabs: [],
  isLeftTabs: false,
};
