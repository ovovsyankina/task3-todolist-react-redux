import { combineReducers } from "redux";
import tasks from "../reducer/tasks";
import filter from "../reducer/filter";

const rootReducer = combineReducers({ tasks, filter });

export default rootReducer;
