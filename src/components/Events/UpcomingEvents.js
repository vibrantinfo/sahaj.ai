import React from 'react';
import Image from 'gatsby-image';
import './UpcomingEvents.scss';
import Button from "components/Button/Button";

const EventImage = ({ event={} }) => {
  const { image, event_link } = event;
  const imgSrc = image ? image.childImageSharp.fluid : null;

  if (!imgSrc) 
    return null;

  return (
    <div className="event-img-ctr">
      <a href={event_link} target="_blank" rel="noopener noreferrer">
        <div className="button-ctr">
          <Button
              className="accept-btn light-red-background light-purple-hover"
            >
              Register Now!
          </Button>
        </div>
        <Image className="event-img" fluid={imgSrc} />
      </a>
    </div>
  );
};


const UpcomingEvents = ({ events=[] }) => {
  if (!events.length) {
    return <h2 className="events-title">No Upcoming Events</h2>
  }

  return (
    <div className="upcoming-events">
      <h2 className="events-title">Upcoming Events</h2>
      <div className="event-img-list">
        {events.map((sahajEvent, index) => <EventImage event={sahajEvent} key={index} />)}
      </div>
    </div>
  );
}

export default UpcomingEvents;
