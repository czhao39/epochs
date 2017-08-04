import { combineReducers } from "redux";

import tasks from "./tasksReducer";
import finishedTasks from "./finishedTasksReducer";


const rootReducer = combineReducers({
    tasks,
    finishedTasks,
});

export default rootReducer;
