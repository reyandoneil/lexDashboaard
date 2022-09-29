const initialState = {
    dataProduct: []
};

function Reducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'GET_DATA_PRODUCT':
            return { ...state, dataProduct: payload };
        default:
            return state;
    }
}

export default Reducer;