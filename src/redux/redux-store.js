import { createStore, combineReducers, applyMiddleware } from "redux";
import messageReducer from "./reducer/messageReducer.js";
import profileReducer from "./reducer/profileReducer.js";
import usersReducer from "./reducer/usersReducer.js";
import authReducer from './reducer/authReducer.js';
import {appReducer} from './reducer/appReducer.js';

import thunkMiddleware from 'redux-thunk'

import {reducer as formReducer} from 'redux-form'

let redusers = combineReducers({
  userProfile: profileReducer,
  userMessages: messageReducer,
  userList: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer
})

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;