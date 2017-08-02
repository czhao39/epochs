export const TOGGLE_PAUSED = "TOGGLE_PAUSED";

/**
 * Toggle timer play/pause state
 *
 * @param {boolean} paused If not given, paused state is toggled
 * @return {object}
 */
export function togglePaused(paused) {
    return {
        type: TOGGLE_PAUSED,
        paused,
    };
}
