import React from "react";
import PropTypes from "prop-types";

import "../styles/TaskItem.scss";


const FinishedTaskItem = ({ index, name, removeFinishedTask }) => {
    return (
        <div className="task-item">
            <div className="task-item-name">{name}</div>
            <div className="task-item-buttons">
                <i
                    className="cancel-button fa fa-fw fa-close"
                    onClick={() => removeFinishedTask(index)}
                />
            </div>
        </div>
    );
};

FinishedTaskItem.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    removeFinishedTask: PropTypes.func.isRequired,
};

export default FinishedTaskItem;
