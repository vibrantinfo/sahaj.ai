import PropTypes from "prop-types";
import React from "react";

import FacebookIconG from "images/icons/social/facebook.svg";
import LinkedInIconG from "images/icons/social/linkedin.svg";
import TwitterIconG from "images/icons/social/twitter.svg";
import { ShareButton, ShareBlock } from "react-custom-share";
import { IconContext } from "react-icons";
import { css } from "@emotion/css";
import "./CustomReactShare.scss";

const CustomReactShare = props => {
  const locationUrl = props.location.href;
  const { title } = props;

  const socialMediaButtonCss = css`
    border: none;
    width: 30px;
    height: 30px;
    padding: 0;
    background: none;
    margin-right: 10px;
  `;

  function LinkedInIcon() {
    return (
      <img src={LinkedInIconG} className="linkedin" />
    );
  }

  function FacebookIcon() {
    return (
      <img src={FacebookIconG} className="facebook" />
    );
  }

  function TwitterIcon() {
    return (
      <img src={TwitterIconG} className="twitter" />
    );
  }
  const shareBlockProps = {
    url: locationUrl,
    button: ShareButton,
    buttons: [
      {
        network: "Linkedin",
        icon: LinkedInIcon,
        className: socialMediaButtonCss,
      },
      {
        network: "Facebook",
        icon: FacebookIcon,
        className: socialMediaButtonCss,
      },
      {
        network: "Twitter",
        icon: TwitterIcon,
        className: socialMediaButtonCss,
      },
    ],
    text: title,
  };

  return <ShareBlock {...shareBlockProps} />;
};

CustomReactShare.propTypes = {
  title: PropTypes.string,
  location: PropTypes.object,
};

export default CustomReactShare;
