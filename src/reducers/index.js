import { combineReducers } from "redux";

import tasks from "./tasksReducer";
import completedTasks from "./completedTasksReducer";
import states from "./statesReducer";


const rootReducer = combineReducers({
    tasks,
    completedTasks,
    states,
});

export default rootReducer;
