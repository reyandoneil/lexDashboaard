const initialState = {
  screenSize: "",
  isLoading: false,
  profileContentName: null,
  isMessage: false,
  isEditModal: false,
  message: [],
  isAlert: false,
  isNoData: false,
  airlines:[],
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "SET_PROFILE_CONTENT":
      return { ...state, profileContentName: payload };
    case "SET_SCREEN_SIZE":
      return { ...state, screenSize: payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: payload };
    case "IS_MESSAGE":
      return { ...state, isMessage: payload };
    case "MESSAGE":
      return { ...state, message: payload };
    case "IS_EDIT_MODAL":
      return { ...state, isEditModal: payload };
    case "IS_ALERT":
      return { ...state, isAlert: payload };
    case "SET_IS_NO_DATA":
      return { ...state, isNoData: payload };
    case "GET_AIRLINES":
      return { ...state, airlines: payload };
    default:
      return state;
  }
}

export default Reducer;
