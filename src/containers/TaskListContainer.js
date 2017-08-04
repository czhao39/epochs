import React, { Component } from "react";
import { connect } from "react-redux";

import EditTaskModal from "../components/EditTaskModal";
import TaskList from "../components/TaskList";
import { setTimeRemaining } from "../actions/setTimeRemaining";
import { moveTask } from "../actions/moveTask";
import { finishTask } from "../actions/finishTask";
import { createTask } from "../actions/createTask";
import { editTask } from "../actions/editTask";

@connect(function(state) {
    return {
        tasks: state.tasks,
    };
}, { setTimeRemaining, moveTask, finishTask, createTask, editTask })
export default class TaskListContainer extends Component {
    render() {
        return (
            <div>
                <EditTaskModal
                    index={this.props.editIndex}
                    task={this.props.editIndex === undefined ? null : this.props.tasks.list[this.props.editIndex]}
                    showEditTaskModal={this.props.showEditTaskModal}
                    toggleEditTaskModal={(show, index) => this.props.toggleEditTaskModal(show, index)}
                    editTask={this.props.editTask}
                />
                <TaskList
                    tasksArray={this.props.tasks.list}
                    setTimeRemaining={this.props.setTimeRemaining}
                    moveTask={this.props.moveTask}
                    finishTask={this.props.finishTask}
                    createTask={this.props.createTask}
                    toggleEditTaskModal={(show, index) => this.props.toggleEditTaskModal(show, index)}
                />
            </div>
        );
    }
}
