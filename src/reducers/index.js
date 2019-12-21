import { combineReducers } from 'redux';

import items from './items';
import cart from './cart';
import categories from './categories';
import itemInfo from "./itemInfo";

export default combineReducers({
	categories,
	items,
	cart,
	itemInfo,
});