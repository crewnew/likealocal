const initialState = { query: "" };
export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        query: action.payload,
      };
    case "RESET":
      return {
        query: "",
      };
    default:
      return state;
  }
};
