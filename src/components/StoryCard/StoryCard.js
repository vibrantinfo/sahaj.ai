import React from "react";
import PropTypes from "prop-types";
import "./StoryCard.scss";
import { STORY_CATEGORY } from "../../constants/constants";
import { Link } from "@reach/router";

const StoryCard = props => {
  const { UNIQUELY_TOGETHER, UNIQUELY_TRANSPARENT } = STORY_CATEGORY;
  const {
    className,
    title,
    slug,
    transparent,
    isTechnologyCategory,
    categorySlug,
  } = props;

  let backgroundColor = "";
  if (categorySlug === UNIQUELY_TRANSPARENT.slug)
    backgroundColor = `${UNIQUELY_TRANSPARENT.color}-background`;
  else if (categorySlug === UNIQUELY_TOGETHER.slug)
    backgroundColor = `${UNIQUELY_TOGETHER.color}-background`;

  const prevLocation = isTechnologyCategory
    ? "technology-and-business"
    : "founding-stories";
  let titleCls = "title",
    hoverCls = "";
  if (transparent) {
    titleCls = "title-large";
    hoverCls = "light-red-hover";
  }
  return (
    <Link to={`/stories/${slug}`} state={{ previousLocation: prevLocation }}>
      <div className={`story-card ${className} ${backgroundColor} ${hoverCls}`}>
        <h3 className={titleCls} title={title}>
          {title}
        </h3>
        <div className="read-more-text">Read More</div>
      </div>
    </Link>
  );
};

StoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string,
  transparent: PropTypes.bool,
  isTechnologyCategory: PropTypes.bool,
};

StoryCard.defaultProps = {
  className: "",
  transparent: false,
  isTechnologyCategory: false,
};

export default StoryCard;
