import apiArticles from '../api/articles';

export function getArticlesData() {
	return (dispatch) => {
		dispatch({
			type: 'START_LOAD_DATA_ARTICLES',
		});
		return apiArticles.getArticles()
			.then((result) => {
				return dispatch({
					type: 'SUCCESS_LOAD_DATA_ARTICLES',
					articlesList: result
				});
			})
			.catch((error) => {
				return dispatch({
					type: 'ERROR_LOAD_DATA_ARTICLES',
					error: error
				});
			})
	};
};

export function addCommentForArticle(article) {
	return (dispatch) => {
		return apiArticles.updateArticle(article)
			.then((result) => {
				return dispatch({
					type: 'SUCCESS_ADD_COMMENT',
					article: article
				});
			})
			.catch((error) => {
				return dispatch({
					type: 'ERROR_ADD_COMMENT',
					error: error
				});
			})
	};
}
