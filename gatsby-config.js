const path = require(`path`);

module.exports = {
	siteMetadata: {
		title: 'boo'
	},
	plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: './data'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: './repos'
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
  ],
  mapping: {
    "MergedImagesJson.author": "MergedAuthorsJson"
  }
};
