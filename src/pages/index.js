import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

export default function BlogPostList({ data: { allContentfulBlogPost } }) {
	return (
		<ul>
			{allContentfulBlogPost.edges.map(edge => (
				<li key={edge.node.id}>
					<Link to={edge.node.slug}>{edge.node.slug}</Link>
				</li>
			))}
		</ul>
	);
}

BlogPostList.propTypes = {
	data: PropTypes.shape({
		allContentfulBlogPost: PropTypes.shape({
			edge: PropTypes.shape({
				node: PropTypes.shape({
					id: PropTypes.string,
					slug: PropTypes.string
				})
			})
		})
	})
};

BlogPostList.defaultProps = {
	data: {
		allContentfulBlogPost: {
			edge: {
				node: {
					id: '',
					slug: ''
				}
			}
		}
	}
};

export const query = graphql`
	query allBlogPost {
		allContentfulBlogPost(limit: 100) {
			edges {
				node {
					id
					slug
				}
			}
		}
	}
`;
