import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import TopBar from "./TopBar/TopBar";
import Footer from "./Footer/Footer";
import ScrollTopButton from "./ScrollTopButton/ScrollTopButton";
import CookiePolicy from "./CookiePolicy/CookiePolicy";
import { debounce } from "underscore";
import SEO from "./seo";
import ResponsiveImage from "components/ResponsiveImage/ResponsiveImage";

const Layout = ({ children, className, location, title }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const backgroundImages = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "backgrounds/home_background.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobile: file(
        relativePath: { eq: "backgrounds/home_background_mobile.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const onScroll = event => {
    const currentScrollTop =
      event.target && event.target.scrollingElement
        ? event.target.scrollingElement.scrollTop
        : 0;
    if (currentScrollTop > 700 && !showScrollTop) {
      setShowScrollTop(true);
    }
    if (currentScrollTop < 700 && showScrollTop) {
      setShowScrollTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", debounce(onScroll), 200);
  });

  const overlayCls = showOverlay ? "full-overlay" : "";
  return (
    <>
      <SEO title={title} />
      <TopBar location={location} setShowOverlay={setShowOverlay} />
      <main className={`_app-content ${className} ${overlayCls}`}>
        <div className="_app-main-content">
          {children}
        </div>
      </main>
      {showScrollTop && <ScrollTopButton />}
      <CookiePolicy />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: "",
};

export default Layout;
