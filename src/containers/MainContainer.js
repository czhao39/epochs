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
                    hideCreateTaskModal={() => this.hideCreateTaskModal()}
                    createTask={this.props.createTask}
                />
                <EditTaskModal
                    index={this.props.editIndex}
                    task={this.props.editIndex === undefined ? null : this.props.tasks[this.props.editIndex]}
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
                    editIndex={this.state.editIndex}
                    toggleCreateTaskModal={(show, index) => this.toggleCreateTaskModal(show, index)}
                    toggleEditTaskModal={(show, index) => this.toggleEditTaskModal(show, index)}
                />
            </div>
        );
    }
}

export default MainContainer;
