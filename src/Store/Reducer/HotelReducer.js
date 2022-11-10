const initialState = {
  isAddHotel: false,
  listHotel: [],
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_IS_ADD_HOTEL':
      return { ...state, isAddHotel: payload };
    case `GET_ALL_DATA_HOTEL`:
      return { ...state, listHotel: payload}
    default:
      return state;
  }
}

export default Reducer;