import { combineReducers } from "redux";
import register from "../ducks/signup/reducer";
const rootReducer = combineReducers({ register });
export default rootReducer;
