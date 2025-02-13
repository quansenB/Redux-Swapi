import {
  ADD_CHARACTERS,
  FAILURE,
  SUCCESS,
  FETCH,
  fetchData,
  failure,
  success
} from "../actions";
import { combineReducers } from "redux";

const initialStateChars = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  fetching: false,
  error: ""
};
/* 
const initialStateFetching = {
  fetching: false
};

const initialStateError = {
  error: ""
}; */

export const charsReducer = (state = initialStateChars, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case ADD_CHARACTERS:
      console.log({ characters: action.payload, fetching: false, error: "" });
      return { characters: action.payload, fetching: false, error: "" };
    case FETCH:
      return { ...state, fetching: action.payload };
    case SUCCESS:
      return { ...state, error: "" };
    case FAILURE:
      return { ...state, error: "Fetching failed, try again" };
    default:
      return state;
  }
};

export const rootReducer = combineReducers(charsReducer);
