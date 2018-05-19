import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import ArticlesContainer from '../containers/articles-container';
import ArticleViewContainer from '../containers/article-view-container';

const MainRouter = () => (
	<main>
		<Switch>
			<Route exact path='/' render={() => (
				<Redirect to="/articles"/>
			)}/>
			<Route exact path='/articles' component={ArticlesContainer}/>
			<Route exact path='/article/:id' component={ArticleViewContainer}/>
		</Switch>
	</main>
);

export default MainRouter;