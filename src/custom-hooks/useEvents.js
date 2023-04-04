import { useStaticQuery, graphql } from "gatsby";
import moment from 'moment';
import { EVENT_TYPE } from "../constants/constants";

export default function useEvents(eventType) {
  const eventsData = useStaticQuery(graphql`
    query sahajEventsQuery {
      allStrapiSahajEvents(sort: {order: DESC, fields: event_date}) {
        nodes {
          event_date
          event_title
          event_organizer
          event_link
          image {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        totalCount
      }
    }
  `);

  const sortedSahajEvents = eventsData.allStrapiSahajEvents.nodes;
  const upcomingEvents = getUpcomingEvents(sortedSahajEvents);
  const pastEvents = getPastEvents(sortedSahajEvents);

  if (eventType === EVENT_TYPE.PAST) {
    return pastEvents;
  } else return upcomingEvents;
}

const TODAY = moment().format();

function getPastEvents(sahajEvents) {
  let pastEvents = [];

  if (sahajEvents !== 0) {
    sahajEvents.forEach(event => {
      let dateOfEvent = moment(event.event_date);
      if (dateOfEvent.isBefore(TODAY)) {
        pastEvents.push(event);
      }
    });
  }
  return pastEvents;
}

function getUpcomingEvents(sahajEvents) {
  let upcomingEvents = [];

  if (sahajEvents !== 0) {
    sahajEvents.forEach(event => {
      let dateOfEvent = moment(event.event_date);
      if (dateOfEvent.isAfter(TODAY)) {
        upcomingEvents.push(event);
      }
    });
  }
  return upcomingEvents;
}
