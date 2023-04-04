import React from "react";
import PropTypes from "prop-types";
import DotsCloseIcon from "images/icons/dots_close.svg";
import { Link } from "gatsby";
import SocialLinks from "components/SocialLinks/SocialLinks";
import "./SideBar.scss";
import offices from "../../../static_data/offices";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

export default function SideBar(props) {
  const backgroundImageData = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "backgrounds/home_background.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const collapsedCls = props.collapsed ? "collapsed" : "";
  const clickCollapse = {
    onClick: () => {
      props.onSideBarClose();
    },
  };
  offices.sort((a, b) => a.location > b.location ? 1:-1);
  // const officeMapLinks = () => {
  //   return offices.map(office => (
  //     <div className="location-link">
  //       <a
  //         href={office.mapUrl}
  //         target="_blank"
  //         {...clickCollapse}
  //         rel="noopener noreferrer"
  //       >
  //         {office.location}
  //       </a>
  //     </div>
  //   ))
  // };
  const Layout = () => {
    return (
      <div className="sidebar-encloser">
        <div className="what-links hide-desktop">
          <h2 className="what-link">
            <Link to="/who-we-are" {...clickCollapse} activeClassName="active">
              Who we are
            </Link>
          </h2>
          <h2 className="what-link">
            <Link to="/what-we-do" {...clickCollapse} activeClassName="active">
              What we do
            </Link>
          </h2>
          <h2 className="what-link">
            <Link
              to="/what-we-think"
              {...clickCollapse}
              activeClassName="active"
            >
              What we think
            </Link>
          </h2>
        </div>
        <div className="sidebar-links">
          <h2 className="sidebar-link">
            <Link to="/people" {...clickCollapse} activeClassName="active">
              Our People
            </Link>
          </h2>
          <h2 className="sidebar-link">
            <Link to="/joinus" {...clickCollapse} activeClassName="active">
              Join Us
            </Link>
          </h2>
          <h2 className="sidebar-link">
            <Link to="/news-and-media" {...clickCollapse} activeClassName="active">
              News & Media
            </Link>
          </h2>
          <h2 className="sidebar-link">
            <Link to="/events" {...clickCollapse} activeClassName="active">
              Events
            </Link>
          </h2>
          <h2 className="sidebar-link">
            <Link to="/contactus" {...clickCollapse} activeClassName="active">
              Contact Us
            </Link>
          </h2>
        </div>
        <div className="social-and-location-links">
          <div className="location-links hide-mobile">
          {
            offices.map(office => (
                        <div className="location-link">
                          <a
                            href={office.mapUrl}
                            target="_blank"
                            {...clickCollapse}
                            rel="noopener noreferrer"
                          >
                            {office.location}
                          </a>
                        </div>
                      ))
          }
          </div>
          <SocialLinks />
        </div>
      </div>
    );
  };

  return (
    <div className={`sidebar ${collapsedCls}`} tabIndex={0}>
      <BackgroundImage
        fluid={backgroundImageData.image.childImageSharp.fluid}
        style={{ height: "100%" }}
      >
        <div className="sidebar-content">
          <div className="close-icon-ctr">
            <img
              className="close-icon clickable"
              src={DotsCloseIcon}
              alt=""
              onClick={() => {
                props.onSideBarClose();
              }}
            />
          </div>
          <Layout />
        </div>
      </BackgroundImage>
    </div>
  );
}

SideBar.propTypes = {
  collapsed: PropTypes.bool,
};
