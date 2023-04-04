import React from "react";
import ArrowUpIcon from "images/svgs/scroll_top.svg";
import "./ScrollTopButton.scss";

const ScrollTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="scroll-to-top"
      onClick={scrollToTop}
      aria-label="scroll-top"
    >
      <ArrowUpIcon />
    </button>
  );
};

export default ScrollTopButton;
