import { combineReducers } from "redux";

import tasks from "./tasksReducer";
import finishedTasks from "./finishedTasksReducer";
import states from "./statesReducer";


const rootReducer = combineReducers({
    tasks,
    finishedTasks,
    states,
});

export default rootReducer;
