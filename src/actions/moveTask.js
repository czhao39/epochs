export const MOVE_TASK = "MOVE_TASK";

/**
 * Move a task's position in the task list
 *
 * @param {number} index Index of the task
 * @param {number} newIndex
 * @return {object}
 */
export function moveTask(index, newIndex) {
    return {
        type: MOVE_TASK,
        index,
        newIndex,
    };
}
