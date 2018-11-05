const path = require(`path`);

module.exports = {
	siteMetadata: {
		title: 'boo'
	},
	plugins: [
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: 'Json',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: './repos'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: path.join(__dirname,'images')
      }
    }
  ]
};
