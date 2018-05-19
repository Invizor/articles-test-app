import { createStore, applyMiddleware } from 'redux';
import promise from "redux-promise-middleware";
import thunk from "redux-thunk"
import { createLogger } from "redux-logger";
import appReducer from './reducers';

const middleware = applyMiddleware(  promise(),  thunk,  createLogger() );

export default function configureStore() {
	return createStore(appReducer, middleware);
}