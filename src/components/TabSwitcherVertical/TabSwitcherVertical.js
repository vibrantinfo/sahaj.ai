import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Collapse, Container } from "react-bootstrap";
import { FaAngleUp } from "react-icons/fa";
import "./TabSwitcherVertical.scss";

export default function TabSwitcherVertical(props) {
  const {
    className,
    tabs,
    activeTab,
    onChange,
    activeColor,
    tabHoverClass,
    inactiveColor,
    noGutters,
  } = props;
  const [isActiveOnly, setActiveOnly] = useState(false);
  const activatedTab = props.tabs.find(tab => tab.value === activeTab);
  const descList = activatedTab.desc;
  const contentRef = useRef(null);
  const noPaddingCls = noGutters ? "no-padding" : "";
  const singleTabViewCls = isActiveOnly ? "single-tab" : "";
  const scrollToTopOfContent = () => {
    const topOfContent = contentRef ? contentRef.current : null;
    if (topOfContent) {
      topOfContent.scrollIntoView({ behavior: "smooth" });
    }
  };
  const onCollapse = () => {
    setActiveOnly(isActive => {
      return !isActive;
    });
  };
  return (
    <div
      className={`tab-switcher-vertical ${className} ${singleTabViewCls} ${noPaddingCls}`}
    >
      <div className="tabs-container">
        <div className="tabs">
          {tabs.map(tab => {
            const isActiveTab = tab.value === activatedTab.value;
            const activeTabCls = isActiveTab
              ? `active ${activeColor}`
              : inactiveColor;
            const isCollapsed = isActiveOnly ? !isActiveTab : false;
            return (
              <Collapse in={!isCollapsed} key={tab.value}>
                <div>
                  <div className="tab-item-container">
                    <div>
                      <h6
                        className={`tab-item ${activeTabCls} ${tabHoverClass}`}
                        key={tab.value}
                      >
                        <button
                          onClick={() => {
                            onChange(tab.value);
                            scrollToTopOfContent();
                          }}
                        >
                          {tab.label}
                        </button>
                      </h6>
                    </div>
                    <div>
                      <span className={`dot ${activeTabCls}-background`}></span>
                    </div>
                  </div>
                </div>
              </Collapse>
            );
          })}
        </div>
        <div className="collapse-icon-ctr">
          <FaAngleUp className="collapse-icon" onClick={onCollapse} />
        </div>
      </div>
      <div ref={contentRef} className="non-sticky-ctr">
        {descList ? <div className="description">{descList.map(desc =>
          <p>{desc}</p>
        )}</div> : null}
        <div className="active-content">{activatedTab.component}</div>
      </div>
    </div>
  );
}

TabSwitcherVertical.propTypes = {
  className: PropTypes.string,
  desc: PropTypes.string,
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
  activeColor: PropTypes.string,
  tabHoverClass: PropTypes.string,
  noGutters: PropTypes.bool,
};

TabSwitcherVertical.defaultProps = {
  className: "",
  tabs: [],
  isLeftTabs: false,
  activeColor: "",
  tabHoverClass: "white-hover",
  noGutters: false,
};
