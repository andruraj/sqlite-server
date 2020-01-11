import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
  errors: errorReducer,
  projects: projectReducer
});

export default rootReducer;
