const initialState = {
  isLogin: false,
  isProfileMenu: false,
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_IS_LOGIN':
      return { ...state, isLogin: payload };
    case 'SET_PROFILE_MENU':
      return { ...state, isProfileMenu: payload };
    default:
      return state;
  }
}

export default Reducer;
