import React from 'react';
import {connect} from 'react-redux'
import {getArticlesData} from '../actions';
import MainRouter from '../router/router';
import { withRouter } from 'react-router-dom'

class containerGeneral extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.loadArticlesData();
	}

	render() {
		return (
			<MainRouter/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		articles: state.articlesReduce.articles
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadArticlesData: () => {
			return dispatch(getArticlesData())
		}
	}
};

const AppContainer =  withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(containerGeneral));

export default AppContainer