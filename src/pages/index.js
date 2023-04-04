import React from "react";
import Layout from "components/layout";
import SEO from "components/seo";
import HomeSection from "components/HomePage/HomeSection";
import Principles from "components/HomePage/Principles";

const IndexPage = ({ location }) => (
  <Layout title="Home" location={location}>
    <HomeSection />
    <Principles />
  </Layout>
);

export default IndexPage;
