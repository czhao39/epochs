import React, { PureComponent } from "react";
import { connect } from "react-redux";

import "../assets/css/TaskListControlsBox.scss"
import CreateTaskModal from "../components/CreateTaskModal";
import { createTask } from "../actions/createTask";


@connect(null, { createTask })
export default class TaskListControlsBox extends PureComponent {
    state = {
        showCreateTaskModal: false,
    };

    hideCreateTaskModal() {
        this.setState({ showCreateTaskModal: false });
    }

    render() {
        return (
            <div>
                <CreateTaskModal
                    showCreateTaskModal={this.state.showCreateTaskModal}
                    hideCreateTaskModal={() => this.hideCreateTaskModal()}
                    createTask={this.props.createTask}
                />
                <div className="task-list-controls">
                    <i
                        title="New"
                        className="create-task-button fa fa-fw fa-plus-circle"
                        onClick={() => this.setState({ showCreateTaskModal: true })}
                    />
                </div>
            </div>
        );
    }
}
