import { TOGGLE_PAUSED } from "../actions/togglePaused";
import { FINISH_TASK } from "../actions/finishTask";


const DEFAULT_STATES = {
    paused: true,
    finishingTask: false,
};

/**
 * Boolean states reducer
 *
 * @param {object} state
 * @param {object} action
 * @return {array}
 */
export default function states(state=DEFAULT_STATES, action) {
    let newState = { ...state, finishingTask: false };
    switch (action.type) {
        case TOGGLE_PAUSED:
            if (action.paused === undefined) {
                newState.paused = !newState.paused;
            } else {
                newState.paused = action.paused;
            }
            return newState;
        case FINISH_TASK:
            if (action.done) {
                newState.finishingTask = true;
            }
            return newState;
        default:
            return newState;
    }
};
