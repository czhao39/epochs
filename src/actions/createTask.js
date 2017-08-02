export const CREATE_TASK = "CREATE_TASK";

/**
 * Create a task
 *
 * @param {object} task
 * @return {object}
 */
export function createTask(task) {
    return {
        type: CREATE_TASK,
        task,
    };
}
