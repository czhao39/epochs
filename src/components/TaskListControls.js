import React from "react";
import PropTypes from "prop-types";

import "../assets/css/TaskListControls.scss"


const TaskListControls = ({ toggleCreateTaskModal }) => {
    return (
        <div>
            <div className="task-list-controls">
                <i
                    title="New"
                    className="create-task-button fa fa-fw fa-plus-circle"
                    onClick={() => toggleCreateTaskModal(true)}
                />
            </div>
        </div>
    );
}

TaskListControls.propTypes = {
    toggleCreateTaskModal: PropTypes.func.isRequired,
};

export default TaskListControls;
