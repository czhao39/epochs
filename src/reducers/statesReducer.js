import { TOGGLE_PAUSED } from "../actions/togglePaused";
import { REMOVE_TASK } from "../actions/removeTask";


const DEFAULT_STATES = {
    paused: true,
    removingCompletedTask: false,
};

/**
 * Boolean states reducer
 *
 * @param {object} state
 * @param {object} action
 * @return {array}
 */
export default function states(state=DEFAULT_STATES, action) {
    let newState = { ...state, removingCompletedTask: false };
    switch (action.type) {
        case TOGGLE_PAUSED:
            if (action.paused === undefined) {
                newState.paused = !newState.paused;
            } else {
                newState.paused = action.paused;
            }
            return newState;
        case REMOVE_TASK:
            if (action.completed) {
                newState.removingCompletedTask = true;
            }
            return newState;
        default:
            return newState;
    }
};
