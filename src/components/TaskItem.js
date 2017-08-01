import React from "react";
import PropTypes from "prop-types";

import "../styles/TaskItem.css";


const TaskItem = ({ index, name, timeRemaining, setTimeRemaining, finishTask }) => {
    return (
        <div className="task-item">
            <div className="task-item-time-remaining">{timeRemaining}</div>
            <div className="task-item-name">{name}</div>
            <div className="task-item-buttons">
                <span
                    className="done-button"
                    onClick={() => finishTask(index, true)}
                >
                    done
                </span>
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
