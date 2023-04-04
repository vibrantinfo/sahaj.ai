import React from "react";
import Image from "gatsby-image";
import { IconContext } from "react-icons";
import GithubIcon from "images/icons/social/github.svg";
import TwitterIcon from "images/icons/social/twitter.svg";
import LinkedinIcon from "images/icons/social/linkedin.svg";
import useMembers from "custom-hooks/useMembers";
import "./PeopleListing.scss";
import PropTypes from "prop-types";
import { MEMBER_TYPE } from "../../constants/constants";

export const SocialLink = ({ icon, url, className }) => {
  return (
    <div className="social-profile-link">
      <a
        className={className}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </a>
    </div>
  );
};

export const PeopleCard = ({
  name,
  linkedinURL,
  twitterURL,
  githubURL,
  profileImage,
  showTitle,
  memberTitle,
}) => {
  let withTitleCls = "";
  if (showTitle) {
    withTitleCls = "with-title";
  }
  return (
    <div className={`people-card ${withTitleCls}`}>
      <div className="profile-img-ctr">
        {profileImage ? (
          <Image className="profile-img" fluid={profileImage} />
        ) : (
          <img className="profile-img" src="/placeholder_pic.png" alt="" />
        )}
      </div>

      <div className="people-details">
        <div className="social-handles">
          {linkedinURL && (
            <SocialLink
              className="linked-in"
              icon={<img src={LinkedinIcon} />}
              url={linkedinURL}
            />
          )}
          {twitterURL && (
            <SocialLink
              className="twitter"
              icon={<img src={TwitterIcon} />}
              url={twitterURL}
            />
          )}
          {githubURL && (
            <SocialLink
              className="github"
              icon={<img src={GithubIcon} />}
              url={githubURL}
            />
          )}
        </div>
        <div className="name">{name}</div>
        {showTitle && (
          <div className="member-title">{memberTitle}</div>
        )}
      </div>
    </div>
  );
};

PeopleCard.propTypes = {
  name: PropTypes.string.isRequired,
  linkedinURL: PropTypes.string,
  twitterURL: PropTypes.string,
  githubURL: PropTypes.string,
  profileImage: PropTypes.any,
  showTitle: PropTypes.bool,
};

PeopleCard.defaultProps = {
  memberType: MEMBER_TYPE.MEMBER,
  showTitle: false,
};

export default function PeopleListing({ memberTypes, showMemberType }) {
  let currentMembersData = useMembers(memberTypes);
  return (
    <div className="people-listing">
      {currentMembersData.map(member => (
        <PeopleCard
          key={member.id}
          name={member.name}
          linkedinURL={member.linkedinURL}
          twitterURL={member.twitterURL}
          githubURL={member.githubURL}
          profileImage={
            member.profileImage
              ? member.profileImage.childImageSharp.fluid
              : null
          }
          showTitle={showMemberType}
          memberTitle={member.title}
        />
      ))}
    </div>
  );
}

PeopleListing.propTypes = {
  memberTypes: PropTypes.array,
  showMemberType: PropTypes.bool,
};

PeopleListing.defaultProps = {
  memberTypes: [],
  showMemberType: false,
};
