export const CREATE_TASK = "CREATE_TASK";

/**
 * Create a task
 *
 * @param {object} duration
 * @param {string} taskName
 * @return {object}
 */
export function createTask(duration, taskName) {
    return {
        type: CREATE_TASK,
        duration,
        taskName,
    };
}
