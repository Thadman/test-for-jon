const path = require("path")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Canberra`,
    description: `Ranked as the world’s most liveable city and region, Canberra offers a quality of life incomparable to anywhere else.`,
    author: `@avenue`,
    siteUrl: "https://canberra.com.au/",
  },
  plugins: [
    `gatsby-plugin-svgr`,
    // `gatsby-plugin-offline`,
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        components: path.join(__dirname, `src/components`),
        context: path.join(__dirname, `src/context`),
        pages: path.join(__dirname, "src/pages"),
        images: path.join(__dirname, `src/images`),
        icons: path.join(__dirname, `src/images/icons`),
        utils: path.join(__dirname, `src/utils`),
        helpers: path.join(__dirname, `src/utils/helpers`),
        breakpoints: path.join(__dirname, `src/utils/breakpoints`),
        queries: path.join(__dirname, `src/queries`),
        hooks: path.join(__dirname, "src/hooks"),
      },
    },
    "gatsby-plugin-remove-console",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 2000,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/preview/*`] },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        url: process.env.GATSBY_GRAPHQL_ENDPOINT,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KCJTG8J"
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:300,600`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
   
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
