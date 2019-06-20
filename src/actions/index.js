// we'll need axios
import axios from "axios";
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH = "FETCH";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const ADD_CHARACTERS = "ADD_CHARACTERS";
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export function fetchData() {
  return dispatch => {
    dispatch(isFetching(true));
    axios
      .get("https://swapi.co/api/people")
      .then(res => {
        dispatch(addCharacters(res.data.results));
        dispatch(success());
      })
      .catch(err => {
        dispatch(failure());
        console.log("Error while fetching characters. Please try again");
      })
      .finally(dispatch(isFetching(false)));
  };
}

export function isFetching(bool) {
  return {
    type: FETCH,
    payload: bool
  };
}

export function addCharacters(res) {
  return {
    type: ADD_CHARACTERS,
    payload: res
  };
}

export function failure() {
  return {
    type: FAILURE
  };
}

export function success() {
  return {
    type: SUCCESS
  };
}
