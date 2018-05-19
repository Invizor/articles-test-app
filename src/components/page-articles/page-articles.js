import React from 'react';
import PropTypes from 'prop-types';
import './page-articless.less';
import ArticlesList from '../articles-list/articles-list';

export default class ArticlesPage extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="page-articles">
				<div className="title-page">
					Статьи
				</div>
				<ArticlesList list={this.props.articles.list}/>
			</div>
		);
	}
}

ArticlesPage.propTypes = {
	articles: PropTypes.shape({
		status: PropTypes.string,
		list: PropTypes.arrayOf(PropTypes.object)
	})
};