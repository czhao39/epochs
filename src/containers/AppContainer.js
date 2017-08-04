import React, { PureComponent } from "react";
import { connect } from "react-redux";

import App from "../components/App";
import { setTimeRemaining } from "../actions/setTimeRemaining";
import { finishTask } from "../actions/finishTask";

@connect(function(state) {
    return {
        tasks: state.tasks,
        finishedTasks: state.finishedTasks,
    };
}, { setTimeRemaining, finishTask })
class AppContainer extends PureComponent {
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
                this.props.finishTask(0, true, this.props.tasks.list[0].name);
            }
        }, 1000);
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

    render() {
        return (
            <App
                tasksArray={this.props.tasks.list}
                finishedTasks={this.props.finishedTasks}
                editIndex={this.state.editIndex}
                showEditTaskModal={this.state.showEditTaskModal}
                toggleEditTaskModal={(show, index) => this.toggleEditTaskModal(show, index)}
            />
        );
    }
}

export default AppContainer;
