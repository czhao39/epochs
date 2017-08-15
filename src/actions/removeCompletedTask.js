export const REMOVE_COMPLETED_TASK = "REMOVE_COMPLETED_TASK";

/**
 * Remove a completed task
 *
 * @param {number} index Index of the task
 * @return {object}
 */
export function removeCompletedTask(index) {
    return {
        type: REMOVE_COMPLETED_TASK,
        index,
    };
}
