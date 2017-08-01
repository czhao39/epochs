import React from "react";
import PropTypes from "prop-types";

import "../styles/TaskItem.scss";


const TaskItem = ({ index, name, timeRemaining, setTimeRemaining, finishTask }) => {
    return (
        <div className="task-item">
            <div className="task-item-time-remaining">{timeRemaining}</div>
            <div className="task-item-name">{name}</div>
            <div className="task-item-buttons">
                <i
                    className="done-button fa fa-check"
                    onClick={() => finishTask(index, true)}
                />
                <i
                    className="cancel-button fa fa-close"
                    onClick={() => finishTask(index, false)}
                />
            </div>
        </div>
    );
};

TaskItem.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    // TODO: change timeRemaining to some kind of time object?
    timeRemaining: PropTypes.number.isRequired,
    setTimeRemaining: PropTypes.func.isRequired,
    finishTask: PropTypes.func.isRequired,
};

export default TaskItem;
