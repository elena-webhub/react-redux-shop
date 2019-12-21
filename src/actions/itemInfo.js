export const setCount = (item, count) => ({
    type: 'SET_COUNT',
    payload: item.count = count,
});