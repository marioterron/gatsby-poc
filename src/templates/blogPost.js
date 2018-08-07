import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default function BlogPost({ data }) {
	const {
		title, publishDate, body, heroImage
	} = data.contentfulBlogPost;
	const { siteMetadata } = data.site;
	return (
		<div style={{ background: '#fff' }}>
			<Helmet title={`${title} | ${siteMetadata.title}`} />
			<div>
				<Img alt={title} sizes={heroImage.sizes} />
			</div>
			<div className="wrapper">
				<h1 className="section-headline">{title}</h1>
				<p
					style={{
						display: 'block'
					}}
				>
					{publishDate}
				</p>
				<div
					dangerouslySetInnerHTML={{
						__html: body.childMarkdownRemark.html
					}}
				/>
			</div>
		</div>
	);
}

BlogPost.propTypes = {
	data: PropTypes.shape({
		contentfulBlogPost: PropTypes.shape({
			title: PropTypes.string
		})
	})
};

BlogPost.defaultProps = {
	data: {
		contentfulBlogPost: {
			title: 'Gatsby Default Starter'
		}
	}
};

export const query = graphql`
	query blogPostQuery($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			publishDate(formatString: "MMMM Do, YYYY")
			heroImage {
				sizes(maxWidth: 1180, background: "rgb:000000") {
					...GatsbyContentfulSizes_tracedSVG
				}
			}
			body {
				childMarkdownRemark {
					html
				}
			}
		}
		site {
			siteMetadata {
				title
			}
		}
	}
`;
