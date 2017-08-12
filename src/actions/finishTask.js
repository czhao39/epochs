export const FINISH_TASK = "FINISH_TASK";

/**
 * Finish a task
 *
 * @param {number} index Index of the task
 * @param {boolean} done True if completed, false if canceled
 * @param {object} task
 * @return {object}
 */
export function finishTask(index, done, task) {
    return {
        type: FINISH_TASK,
        index,
        done,
        task,
    };
}
