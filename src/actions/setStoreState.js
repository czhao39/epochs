export const SET_STORE_STATE = "SET_STORE_STATE";

/**
 * Set store state (e.g. from local storage)
 *
 * @param {object} state
 * @return {object}
 */
export function setStoreState(state) {
    return {
        type: SET_STORE_STATE,
        state,
    };
}
