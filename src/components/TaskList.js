import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { TransitionMotion, spring, presets } from "react-motion";

import "../assets/css/TaskList.scss";
import TaskItem from "./TaskItem";


class TaskList extends PureComponent {
    getDefaultStyles() {
        return this.props.tasks.map((task) => (
            {
                key: task.key,
                data: task,
                style: {
                    height: 0,
                    opacity: 1
                },
            }
        ));
    }

    getStyles() {
        return this.props.tasks.map((task) => (
            {
                key: task.key,
                data: task,
                style: {
                    height: spring(4, presets.gentle),
                    opacity: spring(1, presets.gentle),
                },
            }
        ));
    }

    willEnter() {
        return {
            height: 0,
            opacity: 0,
        };
    }

    willLeave() {
        return {
            height: spring(0),
            opacity: spring(0),
        };
    }

    render() {
        return (
            <div className="task-list">
                <TransitionMotion
                    defaultStyles={this.getDefaultStyles()}
                    styles={this.getStyles()}
                    willLeave={this.willLeave}
                    willEnter={this.willEnter}
                >
                    {(styles) =>
                        <div>
                            {styles.map((task, index) => (
                                <div
                                    key={task.key}
                                    className="task-item-wrapper"
                                    style={{ opacity: task.style.opacity, height: `${task.style.height}em` }}
                                >
                                    <TaskItem
                                        index={index}
                                        name={task.data.name}
                                        secsRemaining={task.data.secsRemaining}
                                        color={task.data.color}
                                        setTimeRemaining={this.props.setTimeRemaining}
                                        moveTask={this.props.moveTask}
                                        removeTask={this.props.removeTask}
                                        createTask={this.props.createTask}
                                        toggleEditTaskModal={this.props.toggleEditTaskModal}
                                    />
                                </div>
                            ))}
                        </div>
                    }
                </TransitionMotion>
            </div>
        );
    }
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    setTimeRemaining: PropTypes.func.isRequired,
    moveTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
    toggleEditTaskModal: PropTypes.func.isRequired,
};

export default TaskList;
