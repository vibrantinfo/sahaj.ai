import React from "react";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export default function GraphicPlaceholder() {
  const graphicImageData = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "graphics/placeholder_graphic.png" }) {
        childImageSharp {
          fluid(maxWidth: 540, maxHeight: 430) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <Image
      className="graphic-img"
      fluid={graphicImageData.image.childImageSharp.fluid}
      style={{ maxWidth: 540, maxHeight: 430 }}
    />
  );
}
