import React from "react";
import PropTypes from "prop-types";

import "../styles/TaskItem.scss";


const FinishedTaskItem = ({ index, name }) => {
    return (
        <div className="task-item">
            <div className="task-item-name">{name}</div>
        </div>
    );
};

FinishedTaskItem.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};

export default FinishedTaskItem;
