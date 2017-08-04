export const FINISH_TASK = "FINISH_TASK";

/**
 * Finish a task
 *
 * @param {number} index Index of the task
 * @param {boolean} done True if completed, false if canceled
 * @param {string} taskName
 * @return {object}
 */
export function finishTask(index, done, taskName) {
    return {
        type: FINISH_TASK,
        index,
        done,
        taskName,
    };
}
