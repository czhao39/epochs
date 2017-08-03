import React from "react";
import PropTypes from "prop-types";

import "../styles/TaskItem.scss";
import { secsToDuration, durationToString } from "../helpers";


const TaskItem = ({ index, name, secsRemaining, setTimeRemaining, moveTask, finishTask, toggleEditTaskModal }) => {
    return (
        <div className="task-item">
            <div className="task-item-time-remaining">{durationToString(secsToDuration(secsRemaining))}</div>
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
                <i
                    className="edit-button fa fa-pencil"
                    onClick={() => toggleEditTaskModal(true, index)}
                />
                <i
                    className="fa fa-angle-up"
                    onClick={() => moveTask(index, index-1)}
                />
                <i
                    className="fa fa-angle-down"
                    onClick={() => moveTask(index, index+1)}
                />
                <i
                    className="fa fa-angle-double-up"
                    onClick={() => moveTask(index, 0)}
                />
                <i
                    className="fa fa-angle-double-down"
                    onClick={() => moveTask(index, -1)}
                />
            </div>
        </div>
    );
};

TaskItem.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    secsRemaining: PropTypes.number.isRequired,
    setTimeRemaining: PropTypes.func.isRequired,
    moveTask: PropTypes.func.isRequired,
    finishTask: PropTypes.func.isRequired,
    toggleEditTaskModal: PropTypes.func.isRequired,
};

export default TaskItem;
