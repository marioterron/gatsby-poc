import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import './index.scss';

const Layout = ({ children, data }) => (
	<div>
		<Helmet
			title={data.site.siteMetadata.title}
			meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
		/>
		<Header siteTitle={data.site.siteMetadata.title} />
		<div
			style={{
				maxWidth: 1180,
				margin: '0 auto'
			}}
		>
			{children()}
		</div>
	</div>
);

Layout.propTypes = {
	children: PropTypes.func,
	data: PropTypes.shape({
		site: PropTypes.shape({
			siteMetadata: PropTypes.shape({
				title: PropTypes.string
			})
		})
	})
};

Layout.defaultProps = {
	children: () => {},
	data: {
		site: {
			siteMetadata: {
				title: 'Gatsby Default Starter'
			}
		}
	}
};

export default Layout;

export const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
