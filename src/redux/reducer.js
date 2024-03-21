// Define initial state for reducer and data set to null
const initialState = {
    data: null
  };
  // first we define the rootReducer function
  const rootReducer = (state = initialState, action) => {

    switch (action.type) {
      // Case use for successful data fetching action return a new state object with updated data.
      case "FETCH_DATA_SUCCESS":
        return { ...state, data: action.payload };
        //we use default for when no action matches, return the current state
      default:
        return state;
    }
  };
  
  export default rootReducer;
  