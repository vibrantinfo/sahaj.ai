import React from "react";
import { Col } from "react-bootstrap";
import "./ContactUs.scss";
import offices from "../../../static_data/offices";
import { EMAIL_DOMAIN } from "../../constants/constants";

export default function ContactUs() {
  const emailDomain = EMAIL_DOMAIN;
  const renderOfficeAddress = () => {
    offices.sort((a, b) => a.location > b.location ? 1:-1);
    return offices.map(office => (
      <div className="office-details">
        <div className="office-location">{office.location}</div>
        <div className="office-address">{office.addressLine1}</div>
        <div className="office-address">{office.addressLine2}</div>
        <div className="office-address">{office.addressLine3}</div>
        <div className="office-address">{office.addressLine4}</div>
        <div className="office-phone-list">
          {office.phoneNumbers.map(phoneNumber =>
            <div>{phoneNumber}</div>
          )}
        </div>
        <div className="light-purple map-link">
          {" "}
          <a href={office.mapUrl} target="_blank" rel="noopener noreferrer">
            View on Map
          </a>
        </div>
      </div>
    ));
  };

  return (
    <div className="contact-us">
      <Col className="enquiries-container" lg="4" xs="12">
        <div className="header">Contact Us</div>

        <div className="enquiries">
          <div className="client-enquiries-div">
            <h1 className="playfairFont">Business & Media Enquiries</h1>
            <div>Write to us at</div>
            <div className="dark-yellow">
              <a
                href={"mailto:contact@" + emailDomain}
                rel="noopener noreferrer"
              >
                contact@{emailDomain}
              </a>
            </div>
          </div>

          <div className="job-seekers-div">
            <h1 className="playfairFont">Join Us</h1>
            <div>Showcase your artisanship and tell us why at</div>
            <div className="dark-yellow">
              <a
                href={"mailto:connect@" + emailDomain}
                rel="noopener noreferrer"
              >
                connect@{emailDomain}
              </a>
            </div>
          </div>
        </div>
      </Col>
      <Col
        className="offices-container"
        lg={{ offset: 2, span: 6 }}
        xs="12"
      >
        <div className="header">All Offices</div>
        <div className="office-listing">{renderOfficeAddress()}</div>
      </Col>
    </div>
  );
}
