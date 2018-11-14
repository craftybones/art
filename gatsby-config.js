const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'boo',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: './data',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: './repos',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: './avatars',
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
  ],
  mapping: {
    'MergedImagesJson.author': 'MergedAuthorsJson',
  },
};
