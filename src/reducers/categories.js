import categories from '../json/categories.json'

const initialState = {
	categories,
	category: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SELECT_CATEGORY':
			return {
				categories: categories,
				category: action.payload,
			};
		default:
			return state;
	}
}