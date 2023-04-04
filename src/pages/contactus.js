import React from "react";
import Layout from "components/layout";
import ContactUs from "components/ContactUs/ContactUs";

export default function contactus({ location }) {
  return (
    <Layout location={location} title={"Contact Us"}>
      <ContactUs />
    </Layout>
  );
}
