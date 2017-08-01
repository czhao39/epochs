import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import TaskItem from "./TaskItem";


class TaskList extends PureComponent {
    render() {
        return (
            <div className="task-list">
                {
                    this.props.tasks.map((task, index) => {
                        return (
                            <TaskItem
                                key={index}
                                id={task.id}
                                name={task.name}
                                timeRemaining={task.timeRemaining}
                                setTimeRemaining={this.props.setTimeRemaining}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    setTimeRemaining: PropTypes.func.isRequired,
};

export default TaskList;
