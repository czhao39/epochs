import { TOGGLE_PAUSED } from "../actions/togglePaused";


const DEFAULT_STATES = {
    paused: true,
};

/**
 * Boolean states reducer
 *
 * @param {object} state
 * @param {object} action
 * @return {array}
 */
export default function states(state=DEFAULT_STATES, action) {
    let newState;
    switch (action.type) {
        case TOGGLE_PAUSED:
            newState = { ...state };
            if (action.paused === undefined) {
                newState.paused = !newState.paused;
            } else {
                newState.paused = action.paused;
            }
            return newState;
        default:
            return state;
    }
};
