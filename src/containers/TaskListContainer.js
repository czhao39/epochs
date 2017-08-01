import React, { Component } from "react";
import { connect } from "react-redux";

import TaskList from "../components/TaskList";
import { setTimeRemaining } from "../actions/setTimeRemaining";
import { finishTask } from "../actions/finishTask";


class TaskListContainer extends Component {
    render() {
        return (
            <TaskList
                tasks={this.props.tasks}
                setTimeRemaining={this.props.setTimeRemaining}
                finishTask={this.props.finishTask}
            />
        );
    }
}

// TODO: use a decorator instead
export default connect(function(state) {
    return {
        tasks: state.tasks,
    };
}, { setTimeRemaining, finishTask })(TaskListContainer);
