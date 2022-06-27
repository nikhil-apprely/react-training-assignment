// Actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Action Creators
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

// Initial State
const initialState = {
  counter: 0,
};

// Root Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default rootReducer;
