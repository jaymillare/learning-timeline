import authReducer from "./authReducer";
import timelineReducer from "./timelineReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  timeline: timelineReducer
});

export default rootReducer;
