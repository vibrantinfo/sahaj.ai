const offices = require("./static_data/offices");
const path = require("path");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Sahaj Software Solutions`,
    description: `Sahaj is an artisanal technology services company. Our pedigree of solving complex problems in software and data engineering amplifies AI, ML, and data science to unlock the full potential of data for our clients. We combine artisanal autonomy and expertise with the first principles of solution design to inspire brilliance.`,
    author: `sahaj`,
    siteUrl: `https://www.sahaj.ai`,
    keywords: `sahaj, sahaj software solutions, software consultancy, artisanal engineering, premium software development, product development, premium software consulting, Technology Advisory, Product Design, Custom Development`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sahaj`,
        short_name: `Sahaj`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/images/icons/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
        pages: path.join(__dirname, "src/pages"),
        images: path.join(__dirname, "src/images"),
        styles: path.join(__dirname, "src/styles"),
        utils: path.join(__dirname, "src/utils"),
        "custom-hooks": path.join(__dirname, "src/custom-hooks"),
        "page-components": path.join(__dirname, "src/page-components"),
        "page-styles": path.join(__dirname, "src/page-styles"),
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: [`300`, `400`, `500`, `600`, `700`, `800`],
              fontDisplay: "swap",
              strategy: "selfHosted", // 'base64' || 'cdn'
            },
            {
              family: "Playfair Display",
              variants: [`300`, `400`, `500`, `600`, `700`, `800`],
              fontDisplay: "swap",
              strategy: "selfHosted",
            },
            {
              family: "Raleway",
              variants: [`300`, `400`, `500`, `600`, `700`, `800`],
              fontDisplay: "swap",
              strategy: "selfHosted",
            },
            {
              family: "Zilla Slab",
              variants: [`300`, `400`, `500`, `600`, `700`, `800`],
              fontDisplay: "swap",
              strategy: "selfHosted",
            },
            {
              family: "Mulish",
              variants: [`300`, `400`, `500`, `600`, `700`, `800`],
              fontDisplay: "swap",
              strategy: "selfHosted",
            },
          ],
        },
        useMinify: true,
        usePreload: true,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.CMS_URL,
        queryLimit: 1000, // Default to 100
        contentTypes: [
          `sahaj-events`,
          "stories",
          "story-categories",
          "members",
          "testimonials",
        ],
        loginData: {
          identifier: process.env.CMS_USERNAME,
          password: process.env.CMS_PASSWORD,
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-141698459-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: process.env.FB_PIXEL_ID,
      },
    }
  ],
};
