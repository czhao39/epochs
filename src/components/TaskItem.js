import React from "react";
import PropTypes from "prop-types";


const TaskItem = ({ id, name, timeRemaining, setTimeRemaining }) => {
    return (
        <div className="task-item">
            <span className="task-item-time-remaining">{timeRemaining}</span>
            <span className="task-item-name">{name}</span>
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
