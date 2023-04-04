import React from "react";
import Button from "../Button/Button";
import UpcomingEvents from "./UpcomingEvents";
import useEvents from "../../custom-hooks/useEvents";
import { EVENT_TYPE, EMAIL_DOMAIN } from "../../constants/constants.js";
import "./Events.scss";

const Events = () => {
  const emailDomain = EMAIL_DOMAIN;
  const sortedUpcomingEvents = useEvents(EVENT_TYPE.UPCOMING);

  return (
    <div className="events-front-page">
      <div className="caption">Events</div>
      <div className="upcoming-events-ctr">
        <UpcomingEvents events={sortedUpcomingEvents} />
      </div>
      <div className="link-ctr">
        <Button color="light-red-background light-purple-hover" linkTo="/past-events">
          View Past Events
        </Button>
      </div>
      <div className="description">
        At Sahaj, we like to talk almost as much as we like to listen. That’s
        why we host regular events.
      </div>
      <h2 className="header-text">
        Want someone at Sahaj to speak at your event?
      </h2>
      <div className="link-ctr">
        <Button color="light-blue-background light-purple-hover">
          <a href={"mailto:contact@" + emailDomain} rel="noopener noreferrer">
            Connect With Us
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Events;
