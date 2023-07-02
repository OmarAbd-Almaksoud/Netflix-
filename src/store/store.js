import thunk from "redux-thunk";
import languageReducer from "./reducer";
import {applyMiddleware, legacy_createStore as createStore }from 'redux'

const store=createStore(languageReducer,applyMiddleware(thunk));

export default store;