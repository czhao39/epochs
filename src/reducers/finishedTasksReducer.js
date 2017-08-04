import { FINISH_TASK } from "../actions/finishTask";


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
                newState = [...state, action.taskName]
                return newState;
            }
            return state;
        default:
            return state;
    }
};
