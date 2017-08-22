import { SET_TIME_REMAINING } from "../actions/setTimeRemaining";
import { MOVE_TASK } from "../actions/moveTask";
import { REMOVE_TASK } from "../actions/removeTask";
import { CREATE_TASK } from "../actions/createTask";
import { EDIT_TASK } from "../actions/editTask";
import { durationToSecs } from "../helpers";


const DEFAULT_TASKS = [
    { key: "EX1", name: "I'm an epoch!", secsRemaining: 60, color: "grey" },
    { key: "EX2", name: "I'm another epoch!", secsRemaining: 10, color: "green" },
];

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
            if (state.length === 0) {
                return state;
            }
            newState = [...state];
            newState[action.index].secsRemaining = typeof action.time === "object" ? durationToSecs(action.time) : action.time;
            return newState;
        case MOVE_TASK:
            if (state.length <= 1) {
                return state;
            }
            newState = [...state];
            if (action.newIndex < 0) {
                action.newIndex += newState.length;
            }
            newState.splice(action.newIndex, 0, newState.splice(action.index, 1)[0]);
            return newState;
        case REMOVE_TASK:
            newState = state.filter((task, index) => index !== action.index);
            return newState;
        case CREATE_TASK:
            if (!action.task) {
                return state;
            }
            if (action.index === undefined || action.index  > state.length) {
                newState = [...state, action.task];
            } else {
                newState = [...state.slice(0, action.index), action.task, ...state.slice(action.index)];
            }
            return newState;
        case EDIT_TASK:
            if (action.index >= state.length || !action.newTask) {
                return state;
            }
            newState = [...state];
            newState[action.index] = { key: state[action.index].key, ...action.newTask };
            return newState;
        default:
            return state;
    }
};
