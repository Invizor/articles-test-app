import React from 'react';
import {connect} from 'react-redux'
import ArticlesPage from '../components/page-articles/page-articles';

const mapStateToProps = (state) => {
	return {
		articles: state.articlesReduce.articles
	}
};

const ArticlesContainer = connect(
	mapStateToProps,
	null
)(ArticlesPage);

export default ArticlesContainer;