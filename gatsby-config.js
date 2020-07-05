module.exports = {
  siteMetadata: {
    title: `LEARNING GATSBY`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Abel`,
    blogs: [
      {
        title: "first blog",
        excerpt: "this the blog 1",
        author: "abel",
        slug: "first-blog",
        image: "1.jpg",
        description:
          "this is my first blog post. i wrote it with normal graphql",
      },
      {
        title: "second blog",
        excerpt: "this the blog 2",
        author: "abel",
        slug: "second-blog",
        image: "2.jpg",
        description:
          "this is my second blog post. i wrote it with normal graphql",
      },
      {
        title: "new blog",
        excerpt: "this the blog 3",
        author: "abel",
        slug: "new-blog",
        image: "3.jpg",
        description: "this is my new blog post. i wrote it with normal graphql",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
