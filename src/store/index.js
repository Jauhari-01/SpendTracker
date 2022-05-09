import { createStore,applyMiddleware } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";


//redusres
import rootReducer from './reducers'


const initialstate = {};
const middlewares = [thunk];


const store = createStore(
    rootReducer,
    initialstate,
    applyMiddleware(...middlewares)
)

export default store;