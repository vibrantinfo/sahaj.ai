import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Col } from "react-bootstrap";
import FooterBar from "images/graphics/footer_bar.svg";
import "./Footer.scss";
import SocialLinks from "components/SocialLinks/SocialLinks";

export default function Footer(props) {
  const lightThemedCls = props.isLightThemed ? "light-themed" : "";
  const year = new Date().getFullYear();
  return (
    <footer className={`footer ${lightThemedCls}`}>
      <div className="footer-header">
        <img src={FooterBar}/>
      </div>
      <div className="footer-content">
        <Col
          lg="6"
          xs={{ span: "12", order: "1" }}
          className="about-sahaj pl-0"
        >
          <SocialLinks isLightThemed={props.isLightThemed} />
          <div className="about-para para-1">
            <Link to="/">
              <span className="dark-yellow">Sahaj</span>
            </Link>{" "}
            is an artisanal technology services company. We are a collective of
            individuals in pursuit of innovation and simplicity to build and
            deliver technology-based solutions that give our customers an edge.
            Our pedigree of solving complex problems in software and data
            engineering amplifies AI, ML, and data science to unlock the full
            potential of data for our clients. We combine artisanal autonomy and
            expertise with the first principles of solution design to inspire
            brilliance.
          </div>
        </Col>
        <Col className="right-side" xs={{ span: "12", order: "2" }} lg="6">
          <div className="para-2">
            Founded on the principle of reducing exploitation, we aspire, above
            all else, to be fair to people both within and outside the company
            as we conduct our business. People are at the heart of Sahaj, and
            reflected in our ethos of trust and respect. We maintain high
            standards of integrity and our employees are always treated with
            respect regardless of their identity. We strongly proscribe the evil
            practices of human trafficking, forced labour, and other
            manifestations of modern slavery, and do not indulge in them. To
            that end, we enforce transparency in our business and ensure that
            our external suppliers also do not indulge in any manifestation of
            modern slavery. As a growing business, we are committed to be in
            compliance with this.
          </div>
        </Col>
        <Col
          lg={{ span: "6", order: "3" }}
          xs={{ span: "12", order: "last" }}
          className="pl-0"
        >
          <div className="copyright-text">
            <span className="copy">© {year} Sahaj.</span> All Rights Reserved.
          </div>
        </Col>
        <Col lg="6" xs={{ span: "12", order: "4" }} className="right-side">
          <div className="csr-policy">
            <a href="/Sahaj%20CSR%20Policy.pdf" className="csr-link orange-hover" target="_blank">
              Corporate Social Responsibility Policy
            </a>
          </div>
        </Col>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  isLightThemed: PropTypes.bool,
};

Footer.defaultProps = {
  isLightThemed: false,
};
