const initialState = {
  isLogin: false,
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_IS_LOGIN':
      return { ...state, isLogin: payload };
    default:
      return state;
  }
}

export default Reducer;
