export const SET_TIME_REMAINING = "SET_TIME_REMAINING";

/**
 * Set time remaining for a task
 *
 * @param {number} index Index of the task
 * @param {number, object} time Time remaining (either seconds or a duration object)
 * @return {object}
 */
export function setTimeRemaining(index, time) {
    return {
        type: SET_TIME_REMAINING,
        index,
        time,
    };
}
