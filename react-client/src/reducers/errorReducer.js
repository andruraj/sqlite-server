const initState = {};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ERRORS":
      return action.payload;
    case "CLEAR_ERRORS":
      return {};
    default:
      return state;
  }
};

export default errorReducer;
