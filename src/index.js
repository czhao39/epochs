import React from "react";
import ReactDOM from "react-dom";
import localforage from "localforage";

import AppContainer from "./containers/AppContainer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import registerServiceWorker from "./registerServiceWorker";


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
    registerServiceWorker();
}

// Attempts to use local storage for store state, if it exists
localforage.getItem("reduxStore").then((localStoreState) => {
    let store;
    if (localStoreState !== null) {
        localStoreState.states.paused = true;  // make timer paused initially
        store = createStore(rootReducer, localStoreState);
    } else {
        store = createStore(rootReducer);
    }
    store.subscribe(() => localforage.setItem("reduxStore", store.getState()));
    renderApp(store);
});
