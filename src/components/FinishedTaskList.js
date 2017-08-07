import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "../styles/TaskList.scss";
import FinishedTaskItem from "./FinishedTaskItem";


const FinishedTaskList = ({ finishedTasks, removeFinishedTask }) => (
    <div className="task-list">
        <TransitionGroup>
            {
                finishedTasks.map((task, index) => (
                    <CSSTransition
                        key={index}
                        classNames="task-item"
                        timeout={{ enter: 300, exit: 0 }}
                    >
                        <div>
                            <FinishedTaskItem
                                index={index}
                                name={task.name}
                                color={task.color}
                                removeFinishedTask={removeFinishedTask}
                            />
                        </div>
                    </CSSTransition>
                ))
            }
        </TransitionGroup>
    </div>
);

FinishedTaskList.propTypes = {
    finishedTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeFinishedTask: PropTypes.func.isRequired,
};

export default FinishedTaskList;
