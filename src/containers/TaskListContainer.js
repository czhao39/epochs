import React, { PureComponent } from "react";
import { connect } from "react-redux";

import TaskList from "../components/TaskList";
import { setTimeRemaining } from "../actions/setTimeRemaining";
import { moveTask } from "../actions/moveTask";
import { removeTask } from "../actions/removeTask";
import { createTask } from "../actions/createTask";

@connect(function(state, ownProps) {
    return {
        tasks: state.tasks,
        toggleEditTaskModal: ownProps.toggleEditTaskModal,
    };
}, { setTimeRemaining, moveTask, removeTask, createTask })
export default class TaskListContainer extends PureComponent {
    render() {
        return (
            <div>
                <TaskList
                    tasks={this.props.tasks}
                    setTimeRemaining={this.props.setTimeRemaining}
                    moveTask={this.props.moveTask}
                    removeTask={this.props.removeTask}
                    createTask={this.props.createTask}
                    toggleEditTaskModal={this.props.toggleEditTaskModal}
                />
            </div>
        );
    }
}
