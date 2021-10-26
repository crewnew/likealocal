const initialState = { query: "", location: "" };
export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOCATION":
      return {
        ...state,
        location: action.payload,
      };
    case "CHANGE":
      return {
        ...state,
        query: action.payload,
      };
    case "RESET":
      return {
        ...state,
        query: "",
      };
    default:
      return state;
  }
};
