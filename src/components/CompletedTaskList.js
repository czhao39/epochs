import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { TransitionMotion, spring, presets } from "react-motion";

import "../assets/css/TaskList.scss";
import CompletedTaskItem from "./CompletedTaskItem";


class CompletedTaskList extends PureComponent {
    getDefaultStyles() {
        return this.props.completedTasks.map((task) => (
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
        return this.props.completedTasks.map((task) => (
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
            opacity: 1,
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
                                    <CompletedTaskItem
                                        index={index}
                                        name={task.data.name}
                                        color={task.data.color}
                                        removeCompletedTask={this.props.removeCompletedTask}
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

CompletedTaskList.propTypes = {
    completedTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeCompletedTask: PropTypes.func.isRequired,
};

export default CompletedTaskList;
