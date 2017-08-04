import React from "react";
import PropTypes from "prop-types";

import "../styles/TaskList.scss";
import FinishedTaskItem from "./FinishedTaskItem";


const FinishedTaskList = ({ finishedTasks }) => {
    return (
        <div className="task-list">
            {
                finishedTasks.map((task, index) => {
                    return (
                        <FinishedTaskItem
                            key={index}
                            index={index}
                            name={task}
                        />
                    );
                })
            }
        </div>
    );
}

FinishedTaskList.propTypes = {
    finishedTasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FinishedTaskList;
