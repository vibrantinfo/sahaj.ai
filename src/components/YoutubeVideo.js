import React from "react";

export default function YoutubeVideo(props) {
  const { videoUrl, className } = props;
  const autoPlay = props.autoPlay ? 1 : 0;
  const controls = props.controls ? 1 : 0;
  const loop = props.loop ? 1 : 0;
  const queryParams = `?rel=0&autoplay=${autoPlay}&controls=${controls}&loop=${loop}&modestbranding=0`;
  return (
    <div
      className={`youtube-video-container ${className}`}
      style={{ height: "100%" }}
    >
      <iframe
        title={videoUrl}
        width="100%"
        height="100%"
        src={videoUrl + queryParams}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

YoutubeVideo.defaultProps = {
  className: "",
  autoPlay: false,
  controls: false,
  loop: false,
};
