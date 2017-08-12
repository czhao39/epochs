import { FINISH_TASK } from "../actions/finishTask";
import { REMOVE_FINISHED_TASK } from "../actions/removeFinishedTask";


/**
 * Finished tasks reducer
 *
 * @param {array} state
 * @param {object} action
 * @return {array}
 */
export default function finishedTasks(state=[], action) {
    let newState;
    switch (action.type) {
        case FINISH_TASK:
            if (action.done) {
                newState = [...state, action.task]
                return newState;
            }
            return state;
        case REMOVE_FINISHED_TASK:
            newState = state.filter((task, index) => index !== action.index);
            return newState;
        default:
            return state;
    }
};
