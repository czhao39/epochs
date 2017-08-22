import React from "react";
import ReactDOM from "react-dom";
import localforage from "localforage";

import AppContainer from "./containers/AppContainer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { setStoreState } from "./actions/setStoreState";


/**
 * Renders the app with the given redux store
 *
 * @param {object} store
 * @return {void}
 */
function renderApp(store) {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer />
        </Provider>
        , document.getElementById("root")
    );
}

// Attempts to use local storage for store state, if it exists
localforage.getItem("store").then((localStoreState) => {
    let store = createStore(rootReducer);
    if (localStoreState !== null) {
        localStoreState.states.paused = true;  // make timer paused initially
        store.dispatch(setStoreState(localStoreState));
    }
    store.subscribe(() => localforage.setItem("store", store.getState()));
    renderApp(store);
});
