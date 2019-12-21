const initialState = {
    count: 1,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count: action.payload,
            };
        default:
            return state;
    }
}