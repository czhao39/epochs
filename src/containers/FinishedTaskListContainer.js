import React, { PureComponent } from "react";
import { connect } from "react-redux";

import FinishedTaskList from "../components/FinishedTaskList";
import { removeFinishedTask } from "../actions/removeFinishedTask";

@connect(function(state) {
    return {
        finishedTasks: state.finishedTasks,
    };
}, { removeFinishedTask })
export default class FinishedTaskListContainer extends PureComponent {
    render() {
        return (
            <div>
                <FinishedTaskList
                    finishedTasks={this.props.finishedTasks}
                    removeFinishedTask={this.props.removeFinishedTask}
                />
            </div>
        );
    }
}
