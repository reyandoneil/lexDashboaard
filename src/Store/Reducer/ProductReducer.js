const initialState = {
  dataProduct: [],
  isLoading: false,
  isNoDataProduct: false,
  dataEdit: [],
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_DATA_PRODUCT":
      return { ...state, dataProduct: payload };
    case "SET_NO_DATA_PRODUCT":
      return { ...state, dataProduct: payload };
    case "SET_IS_LOADING_PRODUCT":
      return { ...state, isLoading: payload };
    case "SET_DATA_EDIT_PRODUCT":
      return { ...state, dataEdit: payload };
    default:
      return state;
  }
}

export default Reducer;
