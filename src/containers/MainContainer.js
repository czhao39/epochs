import React, { PureComponent } from "react";
import { connect } from "react-redux";

import Main from "../components/Main";
import CreateTaskModal from "../components/CreateTaskModal";
import EditTaskModal from "../components/EditTaskModal";
import { createTask } from "../actions/createTask";
import { editTask } from "../actions/editTask";


@connect(function(state) {
    return {
        tasks: state.tasks,
        completedTasks: state.completedTasks,
    };
}, { createTask, editTask })
class MainContainer extends PureComponent {
    state = {
        showCreateTaskModal: false,
        showEditTaskModal: false,
    };

    /**
     * Toggle task creator modal
     *
     * @param {boolean} show
     * @return {void}
     */
    toggleCreateTaskModal(show) {
        this.setState({ showCreateTaskModal: show });
    }

    /**
     * Toggle task editor modal
     *
     * @param {number} index Index of the task being edited
     * @param {boolean} show
     * @return {void}
     */
    toggleEditTaskModal(show, index) {
        this.setState({ showEditTaskModal: show, editIndex: index });
    }

    renderModals() {
        return (
            <div>
                <CreateTaskModal
                    showCreateTaskModal={this.state.showCreateTaskModal}
                    toggleCreateTaskModal={(show) => this.toggleCreateTaskModal(show)}
                    createTask={this.props.createTask}
                />
                <EditTaskModal
                    index={this.state.editIndex}
                    task={this.state.editIndex === undefined ? null : this.props.tasks[this.state.editIndex]}
                    showEditTaskModal={this.state.showEditTaskModal}
                    toggleEditTaskModal={(show, index) => this.toggleEditTaskModal(show, index)}
                    editTask={this.props.editTask}
                />
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderModals()}
                <Main
                    tasks={this.props.tasks}
                    completedTasks={this.props.completedTasks}
                    toggleCreateTaskModal={(show) => this.toggleCreateTaskModal(show)}
                    toggleEditTaskModal={(show, index) => this.toggleEditTaskModal(show, index)}
                />
            </div>
        );
    }
}

export default MainContainer;
