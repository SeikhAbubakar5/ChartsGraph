//import data from json file
import data from "../ai-data.json";

// we define the fetchData function.
export const fetchData = () => {
  //its retirn another function which recieves dispatch as an argument.
  return dispatch => {
    //inside return function dispatch action success with fetch data as payload.
    dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
  };
};