import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
    , document.getElementById("root")
);
