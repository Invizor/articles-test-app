const initialState = {
	articles: {
		list: [],
		status: 'initial'
	}
};

const articlesReduce = (state = initialState, action) => {
	switch (action.type) {
		case 'START_LOAD_DATA_ARTICLES':
			return Object.assign({}, state, {
				articles:  {
					list: [],
					status: 'loading'
				}
			});
			break;
		case 'SUCCESS_LOAD_DATA_ARTICLES':
			return Object.assign({}, state, {
				articles:  {
					list: action.articlesList,
					status: 'success'
				}
			});
			break;
		case 'ERROR_LOAD_DATA_ARTICLES':
			return Object.assign({}, state, {
				articles:  {
					list: [],
					status: 'error'
				}
			});
			break;
		case 'SUCCESS_ADD_COMMENT':
			return ({
				...state,
				articles: {
					list: state.articles.list.map(article => {
						if(article.id === action.article.id) {
							return action.article;
						} else {
							return article;
						}
					}),
					status: 'success'
				}
			});
			break;
		case 'ERROR_ADD_COMMENT':
			return state;
			break;
		default:
			return state
	}
};

export default articlesReduce;