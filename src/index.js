import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import appReduce from './reducers';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './configure-store';
import App from './app';

let store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);

module.hot.accept();
