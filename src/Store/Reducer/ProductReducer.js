const initialState = {
    dataProduct: [],
    isLoading: false
};

function Reducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'GET_DATA_PRODUCT':
            return { ...state, dataProduct: payload };
        case 'SET_IS_LOADING_PRODUCT':
            return { ...state, dataProduct: payload };
        default:
            return state;
    }
}

export default Reducer;