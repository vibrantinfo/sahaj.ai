import React from "react";
import FacebookIcon from "images/icons/social/facebook.svg";
import LinkedinInIcon from "images/icons/social/linkedin.svg";
import YoutubeIcon from "images/icons/social/youtube.svg";
import TwitterIcon from "images/icons/social/twitter.svg";
import GithubIcon from "images/icons/social/github.svg";
import MediumIcon from "images/icons/social/medium.svg";
import { IconContext } from "react-icons";
import PropTypes from "prop-types";
import "./SocialLinks.scss";

export default function SocialLinks(props) {
  const { showOnlySocialMedias } = props;
  const socialIcon = ({ icon, link, className }) => {
    return (
      <a
        href={link}
        className={`social-icon-link ${className}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={className}
      >
        <IconContext.Provider value={{ className: className }}>
          <img src={icon} />
        </IconContext.Provider>
      </a>
    );
  };
  const lightThemedCls = props.isLightThemed ? "light-themed" : "";
  return (
    <div className={`social-links ${lightThemedCls}`}>
      {socialIcon({
        icon: LinkedinInIcon,
        link: "https://www.linkedin.com/company/sahajsoftware/",
        className: "linked-in",
      })}
      {socialIcon({
        icon: TwitterIcon,
        link: "https://twitter.com/SahajSoftware",
        className: "twitter",
      })}
      {socialIcon({
        icon: FacebookIcon,
        link: "https://www.facebook.com/Sahajsoftware/",
        className: "facebook",
      })}
      {!showOnlySocialMedias &&
        socialIcon({
          icon: MediumIcon,
          link: "https://medium.com/inspiredbrilliance",
          className: "medium",
        })}
      {!showOnlySocialMedias &&
        socialIcon({
          icon: GithubIcon,
          link: "https://github.com/sahajsoft",
          className: "github",
        })}
      {!showOnlySocialMedias &&
        socialIcon({
          icon: YoutubeIcon,
          link: "https://www.youtube.com/channel/UCNjiWQDAmGyd6bRBQn4bk7Q",
          className: "youtube",
        })}
    </div>
  );
}

SocialLinks.propTypes = {
  isLightThemed: PropTypes.bool,
  showOnlySocialMedias: PropTypes.bool,
};

SocialLinks.defaultProps = {
  isLightThemed: false,
  showOnlySocialMedias: false,
};
