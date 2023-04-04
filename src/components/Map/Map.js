import React from "react";
import "./Map.scss";
import PropTypes from "prop-types";

export default function Map(props) {
  const mapIframe = () => {
    return (
      <div>
        <iframe
          src={props.src}
          width="100%"
          height="350"
          style={{ border: 0 }}
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    );
  };
  return <div className="map">{mapIframe()}</div>;
}

Map.propTypes = {
  src: PropTypes.string,
};
Map.defaultProps = {
  src:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.837438808367!2d80.24967661482214!3d12.982247190848948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6702169cc3%3A0x597e1dce24ca54!2sSahaj%20Software%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1595444203585!5m2!1sen!2sin",
};
