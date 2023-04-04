import React from 'react';
import useEvents from "../../custom-hooks/useEvents";
import { EVENT_TYPE } from "../../constants/constants";
import BackButton from 'components/BackButton/BackButton';
import EventList from '../EventList/EventList';
import './PastEvents.scss';

const PastEvents = () => {
  const events = useEvents(EVENT_TYPE.PAST);

  return (
    <div className="event-list-ctr">
      <div className="top-section">
        <div className="caption">Events</div>
        <h1 className="header-text">Past Events</h1>
      </div>
      <EventList events={events} />
      <div className="back-btn-ctr">
        <BackButton to="/events" />
      </div>
    </div>
  );
};

export default PastEvents;