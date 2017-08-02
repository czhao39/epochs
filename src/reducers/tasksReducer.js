import { SET_TIME_REMAINING } from "../actions/setTimeRemaining";
import { MOVE_TASK } from "../actions/moveTask";
import { FINISH_TASK } from "../actions/finishTask";


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
            newState = [ ...state ];
            newState[action.index].timeRemaining = action.time;
            return newState;
        case MOVE_TASK:
            newState = [ ...state ];
            newState.splice(action.newIndex, 0, newState.splice(action.index, 1)[0]);
            return newState;
        case FINISH_TASK:
            newState = state.filter((item, index) => index !== action.index);
            return newState;
        default:
            return [
                { name: "I'm a task!", timeRemaining: 10 },
                { name: "I'm another task!", timeRemaining: 30 },
            ];
    }
};
