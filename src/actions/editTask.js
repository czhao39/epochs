export const EDIT_TASK = "EDIT_TASK";

/**
 * Edit a task
 *
 * @param {number} index Index of the task
 * @param {object} newTask
 * @return {object}
 */
export function editTask(index, newTask) {
    return {
        type: EDIT_TASK,
        index,
        newTask,
    };
}
