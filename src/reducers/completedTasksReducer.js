import { REMOVE_TASK } from "../actions/removeTask";
import { REMOVE_COMPLETED_TASK } from "../actions/removeCompletedTask";


/**
 * Completed tasks reducer
 *
 * @param {array} state
 * @param {object} action
 * @return {array}
 */
export default function completedTasks(state=[], action) {
    let newState;
    switch (action.type) {
        case REMOVE_TASK:
            if (action.completed) {
                newState = [...state, action.task]
                return newState;
            }
            return state;
        case REMOVE_COMPLETED_TASK:
            newState = state.filter((task, index) => index !== action.index);
            return newState;
        default:
            return state;
    }
};
