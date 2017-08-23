import React, { PureComponent } from "react";
import { connect } from "react-redux";

import Main from "../components/Main";
import CreateTaskModal from "../components/CreateTaskModal";
import EditTaskModal from "../components/EditTaskModal";
import HelpModal from "../components/HelpModal";
import { createTask } from "../actions/createTask";
import { removeTask } from "../actions/removeTask";
import { editTask } from "../actions/editTask";
import { moveTask } from "../actions/moveTask";
import { togglePaused } from "../actions/togglePaused";


@connect(function(state) {
    return {
        tasks: state.tasks,
        completedTasks: state.completedTasks,
    };
}, { createTask, removeTask, editTask, moveTask, togglePaused })
class MainContainer extends PureComponent {
    state = {
        showCreateTaskModal: false,
        showEditTaskModal: false,
        showHelpModal: false,
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
    toggleCreateTaskModal = this.toggleCreateTaskModal.bind(this);

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
    toggleEditTaskModal = this.toggleEditTaskModal.bind(this);

    /**
     * Toggle help modal
     *
     * @param {boolean} show
     * @return {void}
     */
    toggleHelpModal(show) {
        this.setState({ showHelpModal: show });
    }
    toggleHelpModal = this.toggleHelpModal.bind(this);

    /**
     * Handle keyboard shortcuts
     *
     * @param {object} event
     * @return {void}
     */
    handleKeyPress(event) {
        if (this.state.showCreateTaskModal || this.state.showEditTaskModal || this.state.showHelpModal) {
            return;
        }
        switch (event.key) {
            case " ":
                event.preventDefault();
                this.props.togglePaused();
                break;
            case "n":
                event.preventDefault();
                this.toggleCreateTaskModal(true);
                break;
            case "c":
                event.preventDefault();
                if (this.props.tasks.length > 0) {
                    this.props.removeTask(0, true, this.props.tasks[0]);
                }
                break;
            case "e":
                event.preventDefault();
                if (this.props.tasks.length > 0) {
                    this.toggleEditTaskModal(true, 0);
                }
                break;
            case "p":
                event.preventDefault();
                if (this.props.tasks.length >= 2) {
                    this.props.moveTask(0, 1);
                }
                break;
            case "h":
                event.preventDefault();
                this.toggleHelpModal(true);
                break;
            default:
                break;
        }
    }
    handleKeyPress = this.handleKeyPress.bind(this);

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyPress);
    }

    renderModals() {
        return (
            <div>
                <CreateTaskModal
                    showCreateTaskModal={this.state.showCreateTaskModal}
                    toggleCreateTaskModal={this.toggleCreateTaskModal}
                    createTask={this.props.createTask}
                />
                <EditTaskModal
                    index={this.state.editIndex}
                    task={this.state.editIndex === undefined ? null : this.props.tasks[this.state.editIndex]}
                    showEditTaskModal={this.state.showEditTaskModal}
                    toggleEditTaskModal={this.toggleEditTaskModal}
                    editTask={this.props.editTask}
                />
                <HelpModal
                    showHelpModal={this.state.showHelpModal}
                    toggleHelpModal={this.toggleHelpModal}
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
                    toggleCreateTaskModal={this.toggleCreateTaskModal}
                    toggleEditTaskModal={this.toggleEditTaskModal}
                    toggleHelpModal={this.toggleHelpModal}
                />
            </div>
        );
    }
}

export default MainContainer;
