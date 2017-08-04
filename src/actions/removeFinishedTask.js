export const REMOVE_FINISHED_TASK = "REMOVE_FINISHED_TASK";

/**
 * Remove a finished task
 *
 * @param {number} index Index of the task
 * @return {object}
 */
export function removeFinishedTask(index) {
    return {
        type: REMOVE_FINISHED_TASK,
        index,
    };
}
