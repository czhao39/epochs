import React, { Component } from "react";
import { connect } from "react-redux";

import EditTaskModal from "../components/EditTaskModal";
import TaskList from "../components/TaskList";
import { setTimeRemaining } from "../actions/setTimeRemaining";
import { moveTask } from "../actions/moveTask";
import { finishTask } from "../actions/finishTask";
import { editTask } from "../actions/editTask";

@connect(function(state) {
    return {
        tasks: state.tasks,
    };
}, { setTimeRemaining, moveTask, finishTask, editTask })
export default class TaskListContainer extends Component {
    state = {
        showEditTaskModal: false,
    };

    componentDidMount() {
        setInterval(() => {
            if (this.props.tasks.paused || this.props.tasks.list.length === 0) {
                return;
            }
            this.props.setTimeRemaining(0, this.props.tasks.list[0].secsRemaining - 1);
            if (this.props.tasks.list[0].secsRemaining <= 0) {
                this.props.finishTask(0, true);
            }
        }, 1000);
    }

    /**
     * Toggle task editor modal
     *
     * @param {number} index Index of the task being editted
     * @param {boolean} show
     * @return {void}
     */
    toggleEditTaskModal(show, index) {
        this.setState({ showEditTaskModal: show, editIndex: index });
    }

    render() {
        return (
            <div>
                <EditTaskModal
                    index={this.state.editIndex}
                    task={this.state.editIndex === undefined ? null : this.props.tasks.list[this.state.editIndex]}
                    showEditTaskModal={this.state.showEditTaskModal}
                    toggleEditTaskModal={(show, index) => this.toggleEditTaskModal(show, index)}
                    editTask={this.props.editTask}
                />
                <TaskList
                    tasks={this.props.tasks}
                    setTimeRemaining={this.props.setTimeRemaining}
                    moveTask={this.props.moveTask}
                    finishTask={this.props.finishTask}
                    toggleEditTaskModal={(show, index) => this.toggleEditTaskModal(show, index)}
                />
            </div>
        );
    }
}
