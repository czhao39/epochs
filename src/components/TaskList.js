import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import TaskItem from "./TaskItem";


class TaskList extends PureComponent {
    render() {
        return (
            <div className="task-list">
                {
                    this.props.tasks.list.map((task, index) => {
                        return (
                            <TaskItem
                                key={index}
                                index={index}
                                name={task.name}
                                timeRemaining={task.timeRemaining}
                                setTimeRemaining={this.props.setTimeRemaining}
                                moveTask={this.props.moveTask}
                                finishTask={this.props.finishTask}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

TaskList.propTypes = {
    tasks: PropTypes.object.isRequired,
    setTimeRemaining: PropTypes.func.isRequired,
    moveTask: PropTypes.func.isRequired,
    finishTask: PropTypes.func.isRequired,
};

export default TaskList;
