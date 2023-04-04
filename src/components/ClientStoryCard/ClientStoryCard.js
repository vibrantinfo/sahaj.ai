import React from "react";
import "./ClientStoryCard.scss";

export default function ClientStoryCard({ title, desc }) {
  return (
    <div className="client-story-card">
      <div className="small-title-text">Client Story</div>
      <h5 className="header-text">{title}</h5>
      <div className="desc">{desc}</div>
    </div>
  );
}
