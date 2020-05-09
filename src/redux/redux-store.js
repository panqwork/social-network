import { createStore, combineReducers } from "redux";
import messageReducer from "./reducer/messageReducer";
import profileReducer from "./reducer/profileReducer";

let redusers = combineReducers({
  userProfile: profileReducer,
  userMessages: messageReducer,
})

let store = createStore(redusers);

export default store;