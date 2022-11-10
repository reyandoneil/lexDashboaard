const initialState = {
  isScheduleForm: false,
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "IS_SCHEDULE_FORM":
      return { ...state, isScheduleForm: payload };
    default:
      return state;
  }
}

export default Reducer;
