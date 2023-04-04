import React from "react";
import { FaMediumM } from "react-icons/fa";
import moment from "moment";
import "./MediumBlogCard.scss";

export default function MediumBlogCard(props) {
  return (
    <div className="medium-blog-card">
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
      <div className="blog-details">
        <div className="blog-title">{props.title}</div>
        <div className="blog-icon-with-caption">
          <FaMediumM className="medium-icon" />
          <span className="caption">View Discussion</span>
        </div>
      </div>
      </a>
    </div>
  );
}
