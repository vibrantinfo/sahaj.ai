import React from 'react';
import EventCard from '../EventCard/EventCard';
import './EventList.scss';

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      {events.map((sahajEvent, index) => <EventCard event={sahajEvent} key={index} />)}
    </div>
  )
};

export default EventList;
