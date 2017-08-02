/**
 * Convert seconds to a duration object
 *
 * @param {number} secs
 * @return {object}
 */
export function secsToDuration(secs) {
    let duration = {};
    duration.hours = Math.floor(secs / 3600);
    secs -= duration.hours * 3600;
    duration.mins = Math.floor(secs / 60);
    secs -= duration.mins * 60;
    duration.secs = secs;
    return duration;
}

/**
 * Convert duration object to seconds
 *
 * @param {object} duration
 * @return {number}
 */
export function durationToSecs(duration) {
    return duration.hours * 3600 + duration.mins * 60 + duration.secs;
}

/**
 * Convert duration to string
 *
 * @param {object} duration
 * @return {string}
 */
export function durationToString(duration) {
    return `${duration.hours.toString().padStart(2, "0")}:${duration.mins.toString().padStart(2, "0")}:${duration.secs.toString().padStart(2, "0")}`;
}
