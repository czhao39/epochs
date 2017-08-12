import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { TransitionMotion, spring, presets } from "react-motion";

import "../assets/css/TaskList.scss";
import FinishedTaskItem from "./FinishedTaskItem";


class FinishedTaskList extends PureComponent {
    getDefaultStyles() {
        return this.props.finishedTasks.map((task) => (
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
        return this.props.finishedTasks.map((task) => (
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
                                    <FinishedTaskItem
                                        index={index}
                                        name={task.data.name}
                                        color={task.data.color}
                                        removeFinishedTask={this.props.removeFinishedTask}
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

FinishedTaskList.propTypes = {
    finishedTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeFinishedTask: PropTypes.func.isRequired,
};

export default FinishedTaskList;
