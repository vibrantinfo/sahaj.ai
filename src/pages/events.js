import React from "react";
import Layout from "components/layout";
import Events from "components/Events/Events";

export default function events({ location }) {
  return (
    <Layout title={"Events"} className="events" location={location}>
      <Events />
    </Layout>
  );
}
