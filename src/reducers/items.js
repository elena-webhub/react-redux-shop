import items from '../json/items.json';

const initialState = {
	items,
	category: [],
	itemInfo: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT_ITEM':
			return {
				items: items,
				itemInfo: action.payload,
			};
		default:
			return state;
	}
}