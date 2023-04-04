import React from 'react';
import PropTypes from 'prop-types';
import { formatAsDateMonthYear } from "utils/dateFormatter";
import './EventCard.scss';

const EventCard = ({ event }) => {
  const { event_date, event_title, event_organizer, event_link } = event;

  return (
    <div className="event-card-ctr">
      <div className="event-card" key={event_date}>
        <a href={event_link} target="_blank" rel="noopener noreferrer">
          <div className="event-date">{formatAsDateMonthYear(event_date)}</div>
          <div className="event-title">{event_title}</div>
          <div className="event-organizer">{event_organizer}</div>
          <div className="event-view-text">View Event</div>
        </a>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    event_data: PropTypes.string,
    event_title: PropTypes.string,
    event_organizer: PropTypes.string,
    event_link: PropTypes.string
  }),
}

export default EventCard;