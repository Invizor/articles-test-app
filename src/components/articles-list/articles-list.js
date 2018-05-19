import React from 'react';
import PropTypes from 'prop-types';
import './articles-list.less';
import { Link } from 'react-router-dom'

export default class ArticlesList extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	renderListArticles() {
		return (
			this.props.list.map(itemArticle => {
				return (
					<div key={itemArticle.id} className="article">
						<div className="title">
							<Link to={`/article/${itemArticle.id}`}>{itemArticle.title}</Link>
						</div>
						<i className="fas fa-angle-right"/>
					</div>
				)
			})
		)
	}

	render() {
		return (
			<div className="articles-list">
				{ this.renderListArticles() }
			</div>
		);
	}
}

ArticlesList.propTypes = {
	list: PropTypes.arrayOf(PropTypes.object)
};