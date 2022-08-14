const initialState = {
  screenSize: '',
  isLoading: false,
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_SCREEN_SIZE':
      return { ...state, screenSize: payload };
    case 'SET_IS_LOADING':
      return { ...state, isLoading: payload };
    default:
      return state;
  }
}

export default Reducer;
