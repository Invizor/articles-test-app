import React from 'react';
import {connect} from 'react-redux'
import ArticlePreview from '../components/article-preview/article-preview';
import {addCommentForArticle} from '../actions'

const mapStateToProps = (state) => {
	return {
		articles: state.articlesReduce.articles
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateArticle: (article) => {
			return dispatch(addCommentForArticle(article))
		}
	}
};

const ArticleViewContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ArticlePreview);

export default ArticleViewContainer;