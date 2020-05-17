import { createStore, combineReducers } from "redux";
import messageReducer from "./reducer/messageReducer.js";
import profileReducer from "./reducer/profileReducer.js";
import usersReducer from "./reducer/usersReducer.js";

let redusers = combineReducers({
  userProfile: profileReducer,
  userMessages: messageReducer,
  userList: usersReducer
})

let store = createStore(redusers);

export default store;