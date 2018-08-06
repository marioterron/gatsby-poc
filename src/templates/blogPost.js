import React from 'react';
import PropTypes from 'prop-types';

export default function BlogPost({ data }) {
	const { title } = data.contentfulBlogPost;
	return (
		<div>
			<h1>{title}</h1>
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
		}
	}
`;
