import React from "react";
import PropTypes from "prop-types";

import "../styles/TaskList.scss";
import TaskItem from "./TaskItem";


const TaskList = ({ tasksArray, setTimeRemaining, moveTask, finishTask, createTask, toggleEditTaskModal }) => {
    return (
        <div className="task-list">
            {
                tasksArray.map((task, index) => {
                    return (
                        <TaskItem
                            key={index}
                            index={index}
                            name={task.name}
                            secsRemaining={task.secsRemaining}
                            color={task.color}
                            setTimeRemaining={setTimeRemaining}
                            moveTask={moveTask}
                            finishTask={finishTask}
                            createTask={createTask}
                            toggleEditTaskModal={toggleEditTaskModal}
                        />
                    );
                })
            }
        </div>
    );
}

TaskList.propTypes = {
    tasksArray: PropTypes.arrayOf(PropTypes.object).isRequired,
    setTimeRemaining: PropTypes.func.isRequired,
    moveTask: PropTypes.func.isRequired,
    finishTask: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
    toggleEditTaskModal: PropTypes.func.isRequired,
};

export default TaskList;
