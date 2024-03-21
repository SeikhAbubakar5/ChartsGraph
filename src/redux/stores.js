
import {applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from "redux-thunk";
import rootReducer from "../redux/reducer";
// Configure Redux store.
const store = configureStore(
   // we set the rootReducer and apply thunk middleware
    {reducer:rootReducer} , applyMiddleware(thunk));

export default store;
