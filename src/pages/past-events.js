import React from "react";
import Layout from "components/layout";
import PastEvents from "components/Events/PastEvents";

export default function pastevents({ location }) {
  return (
    <Layout title="Past Events" className="event-list-page" location={location}>
      <PastEvents />
    </Layout>
  );
}
