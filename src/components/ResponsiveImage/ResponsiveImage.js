import React from "react";
import Image from "gatsby-image";

export default function ResponsiveImage(props) {
  if (typeof window === "undefined") return <></>;
  return <Image {...props} />;
}
