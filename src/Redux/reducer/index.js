import { combineReducers } from "redux";
import userReducer from "./user";
import reducer from "./reducer";
const rootReducer = combineReducers({ userReducer,reducer });
export default rootReducer;