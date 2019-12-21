import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import allReducers from './reducers'

export default () => {
	const store = createStore(allReducers, applyMiddleware(logger));
	return store;
};