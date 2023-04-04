import React, { useEffect } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { navigate } from "gatsby";
import "page-styles/404.scss";
import BackButton from "components/BackButton/BackButton";

const NotFoundPage = () => {
  return (
    <Layout className="not-found-page">
      <SEO title="404: Not found" />
      <div className="not-found-ctr">
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist.</p>
        <BackButton to="/" backLabel="Go To Homepage" />
      </div>
    </Layout>
  );
};

export default NotFoundPage;
