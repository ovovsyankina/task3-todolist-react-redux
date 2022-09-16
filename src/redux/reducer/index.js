import { combineReducers } from "redux";
import tasks from "../reducer/tasks";

const rootReducer = combineReducers({ tasks });

export default rootReducer;
