export const REMOVE_TASK = "REMOVE_TASK";

/**
 * Remove a task from the task list
 *
 * @param {number} index Index of the task
 * @param {boolean} completed True if completed, false if canceled
 * @param {object} task
 * @return {object}
 */
export function removeTask(index, completed, task) {
    return {
        type: REMOVE_TASK,
        index,
        completed,
        task,
    };
}
