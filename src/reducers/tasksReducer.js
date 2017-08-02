import { SET_TIME_REMAINING } from "../actions/setTimeRemaining";
import { MOVE_TASK } from "../actions/moveTask";
import { FINISH_TASK } from "../actions/finishTask";
import { TOGGLE_PAUSED } from "../actions/togglePaused";


const DEFAULT_TASKS = {
    paused: true,
    list: [
        { name: "I'm a task!", timeRemaining: 10 },
        { name: "I'm another task!", timeRemaining: 30 },
    ],
}

/**
 * Tasks reducer
 *
 * @param {object} state
 * @param {object} action
 * @return {array}
 */
export default function tasks(state, action) {
    let newState;
    switch (action.type) {
        case SET_TIME_REMAINING:
            newState = { ...state };
            newState.list[action.index].timeRemaining = action.time;
            return newState;
        case MOVE_TASK:
            newState = { ...state };
            newState.list.splice(action.newIndex, 0, newState.list.splice(action.index, 1)[0]);
            return newState;
        case FINISH_TASK:
            newState = { ...state };
            newState.list = state.list.filter((item, index) => index !== action.index);
            return newState;
        case TOGGLE_PAUSED:
            newState = { ...state };
            if (action.paused === undefined) {
                newState.paused = !newState.paused;
            } else {
                newState.paused = action.paused;
            }
            return newState;
        default:
            return DEFAULT_TASKS;
    }
};
