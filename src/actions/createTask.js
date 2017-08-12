export const CREATE_TASK = "CREATE_TASK";

/**
 * Create a task
 *
 * @param {object} task
 * @param {number} index Index of the new task (optional)
 * @return {object}
 */
export function createTask(task, index) {
    return {
        type: CREATE_TASK,
        task,
        index,
    };
}
