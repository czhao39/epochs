import { SET_TIME_REMAINING } from "../actions/setTimeRemaining";


/**
 * Tasks reducer
 *
 * @param {object} state
 * @param {object} action
 * @return {array}
 */
export default function tasks(state, action) {
    switch (action.type) {
        default:
            return [
                { id: 0, name: "I'm a task!", timeRemaining: 10 },
                { id: 1, name: "I'm another task!", timeRemaining: 30 },
            ];
    }
};
