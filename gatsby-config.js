const contentfulConfig = require('./.contentful.json');

module.exports = {
	siteMetadata: {
		title: 'Gatsby Default Starter'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-contentful',
			options: contentfulConfig
		}
	]
};
