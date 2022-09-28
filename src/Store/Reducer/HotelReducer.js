const initialState = {
   isAddHotel:false
  };
  
  function Reducer(state = initialState, { type, payload }) {
    switch (type) {
      case 'SET_IS_ADD_HOTEL':
        return { ...state, isAddHotel: payload };
      default:
        return state;
    }
  }
  
  export default Reducer;