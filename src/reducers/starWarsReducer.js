import {ADD_CHARACTERS, FAILURE, SUCCESS, fetchData, failure, success} from "../actions";
const initialState = {
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case (ADD_CHARACTERS):
      return action.payload;
    case: 
      return
    default:
      return state;
  }
};
