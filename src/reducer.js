//initially the basket is completely empty
export const initialState = {
  user: null,
  story: {} // Stories viewed by the user
};

//This is the listener present in every component
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    case "SET_STORY":
      return {
        ...state,
        story: action.story
      };

    default:
      return state;
  }
};

export default reducer;
