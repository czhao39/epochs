export const FINISH_TASK = "FINISH_TASK";

/**
 * Finish a task
 *
 * @param {number} index Index D of the task
 * @param {boolean} done
 * @return {object}
 */
export function finishTask(index, done) {
    return {
        type: FINISH_TASK,
        index,
        done,
    };
}
