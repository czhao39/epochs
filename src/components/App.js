import React, { PureComponent } from "react";

import TaskListContainer from "../containers/TaskListContainer";


class App extends PureComponent {
    render() {
        return (
            <div>
                <TaskListContainer />
            </div>
        );
    }
}

export default App;
