import React from "react";
import PropTypes from "prop-types";

import "../styles/TaskItem.css";


const TaskItem = ({ id, name, timeRemaining, setTimeRemaining }) => {
    return (
        <div className="task-item">
            <div className="task-item-time-remaining">{timeRemaining}</div>
            <div className="task-item-name">{name}</div>
        </div>
    );
};

TaskItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    // TODO: change timeRemaining to some kind of time object?
    timeRemaining: PropTypes.number.isRequired,
    setTimeRemaining: PropTypes.func.isRequired,
};

export default TaskItem;
