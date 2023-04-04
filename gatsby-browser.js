/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const onClientEntry = async () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
  }
};
