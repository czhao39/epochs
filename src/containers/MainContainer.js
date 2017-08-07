import React, { PureComponent } from "react";
import { connect } from "react-redux";

import Main from "../components/Main";
import { setTimeRemaining } from "../actions/setTimeRemaining";
import { finishTask } from "../actions/finishTask";


@connect(function(state) {
    return {
        tasks: state.tasks,
        finishedTasks: state.finishedTasks,
    };
}, { setTimeRemaining, finishTask })
class MainContainer extends PureComponent {
    state = {
        showEditTaskModal: false,
    };

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

    render() {
        return (
            <Main
                tasksArray={this.props.tasks.list}
                finishedTasks={this.props.finishedTasks}
                editIndex={this.state.editIndex}
                showEditTaskModal={this.state.showEditTaskModal}
                toggleEditTaskModal={(show, index) => this.toggleEditTaskModal(show, index)}
            />
        );
    }
}

export default MainContainer;
