import React, { PureComponent } from "react";
import { connect } from "react-redux";

import "../assets/css/TaskListControlsBox.scss"


@connect(function(state, ownProps) {
    return {
        toggleCreateTaskModal: ownProps.toggleCreateTaskModal,
    }
})
export default class TaskListControlsBox extends PureComponent {
    render() {
        return (
            <div>
                <div className="task-list-controls">
                    <i
                        title="New"
                        className="create-task-button fa fa-fw fa-plus-circle"
                        onClick={() => this.props.toggleCreateTaskModal(true)}
                    />
                </div>
            </div>
        );
    }
}
