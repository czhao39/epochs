import { SET_TIME_REMAINING } from "../actions/setTimeRemaining";
import { MOVE_TASK } from "../actions/moveTask";
import { FINISH_TASK } from "../actions/finishTask";
import { TOGGLE_PAUSED } from "../actions/togglePaused";
import { CREATE_TASK } from "../actions/createTask";
import { EDIT_TASK } from "../actions/editTask";
import { durationToSecs } from "../helpers";


const DEFAULT_TASKS = {
    paused: true,
    list: [
        { key: "EX1", name: "I'm an epoch!", secsRemaining: 60, color: "grey" },
        { key: "EX2", name: "I'm another epoch!", secsRemaining: 70, color: "green" },
    ],
}

/**
 * Tasks reducer
 *
 * @param {object} state
 * @param {object} action
 * @return {array}
 */
export default function tasks(state=DEFAULT_TASKS, action) {
    let newState;
    switch (action.type) {
        case SET_TIME_REMAINING:
            newState = { ...state };
            newState.list = [...newState.list];
            newState.list[action.index].secsRemaining = typeof action.time === "object" ? durationToSecs(action.time) : action.time;
            return newState;
        case MOVE_TASK:
            newState = { ...state };
            newState.list = [...newState.list];
            if (action.newIndex < 0) {
                action.newIndex += newState.list.length;
            }
            newState.list.splice(action.newIndex, 0, newState.list.splice(action.index, 1)[0]);
            return newState;
        case FINISH_TASK:
            newState = { ...state };
            newState.list = state.list.filter((task, index) => index !== action.index);
            return newState;
        case TOGGLE_PAUSED:
            newState = { ...state };
            if (action.paused === undefined) {
                newState.paused = !newState.paused;
            } else {
                newState.paused = action.paused;
            }
            return newState;
        case CREATE_TASK:
            newState = { ...state };
            newState.list = [...newState.list, action.task];
            return newState;
        case EDIT_TASK:
            newState = { ...state };
            newState.list = [...newState.list];
            newState.list[action.index] = { key: state.list[action.index].key, ...action.newTask };
            return newState;
        default:
            return state;
    }
};
