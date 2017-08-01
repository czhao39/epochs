export const SET_TIME_REMAINING = "SET_TIME_REMAINING";

/**
 * Set time remaining for a task
 *
 * @param {number} id ID of the task
 * @param {number} time Time remaining
 * @return {object}
 */
export function setTimeRemaining(id, time) {
    return {
        type: SET_TIME_REMAINING,
        id,
        time,
    };
}
