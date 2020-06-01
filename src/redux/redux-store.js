import { createStore, combineReducers, applyMiddleware } from "redux";
import messageReducer from "./reducer/messageReducer.js";
import profileReducer from "./reducer/profileReducer.js";
import usersReducer from "./reducer/usersReducer.js";
import authReducer from './reducer/authReducer.js';

import thunkMiddleware from 'redux-thunk'

let redusers = combineReducers({
  userProfile: profileReducer,
  userMessages: messageReducer,
  userList: usersReducer,
  auth: authReducer
})

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;