import React, { PureComponent } from "react";
import { connect } from "react-redux";

import CompletedTaskList from "../components/CompletedTaskList";
import { removeCompletedTask } from "../actions/removeCompletedTask";

@connect(function(state) {
    return {
        completedTasks: state.completedTasks,
    };
}, { removeCompletedTask })
export default class CompletedTaskListContainer extends PureComponent {
    render() {
        return (
            <div>
                <CompletedTaskList
                    completedTasks={this.props.completedTasks}
                    removeCompletedTask={this.props.removeCompletedTask}
                />
            </div>
        );
    }
}
