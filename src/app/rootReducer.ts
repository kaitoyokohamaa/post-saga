import { combineReducers } from "redux";
import signup from "../ducks/signup/reducer";
const rootReducer = combineReducers({ signup });
export default rootReducer;
