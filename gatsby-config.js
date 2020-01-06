module.exports = {
  siteMetadata: {
    title: `Fotobello Natalia Kalinowska`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "SWAPI",
        // This is field under which it's accessible
        fieldName: "swapi",
        // Url to query from
        url: "https://api-euwest.graphcms.com/v1/ck4z6xq9xl19h01dodyes8hkg/master"
      }
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        disable: !process.env.SENTRY_DSN, // When do you want to disable it ?
        src: "https://browser.sentry-cdn.com/5.5.0/bundle.min.js",
        onLoad: `() => Sentry.init({dsn:"${process.env.SENTRY_DSN}"})`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
