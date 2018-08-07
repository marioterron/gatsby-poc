const contentfulConfig = require('./.contentful.json');

module.exports = {
	siteMetadata: {
		title: 'Gatsby Default Starter'
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-remark',
		{
			resolve: 'gatsby-source-contentful',
			options: contentfulConfig
		}
	]
};
