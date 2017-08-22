import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "../assets/css/TaskItem.scss";
import { secsToDuration, durationToString } from "../helpers";


class TaskItem extends PureComponent {
    showButtons() {
        if (this.taskButtons !== null) {
            setTimeout(() => {
                this.taskButtons.style.display = "initial";
                this.taskButtons.style.opacity = 1;
            }, 0);
        }
    }
    showButtons = this.showButtons.bind(this);

    hideButtons() {
        if (this.taskButtons !== null) {
            this.taskButtons.style.opacity = 0;
            setTimeout(() => this.taskButtons.style.display = "none", 200);
        }
    }
    hideButtons = this.hideButtons.bind(this);

    render() {
        return (
            <div
                className={`task-item ${this.props.color}${this.props.index === 0 ? " current" : ""}`}
                tabIndex="-1"
                onMouseEnter={this.showButtons}
                onFocus={this.showButtons}
                onMouseLeave={this.hideButtons}
                onBlur={this.hideButtons}
            >
                <div className="task-item-time-remaining">{durationToString(secsToDuration(this.props.secsRemaining))}</div>
                <div className="task-item-name">{this.props.name}</div>
                <div
                    ref={(ref) => this.taskButtons = ref}
                    className="task-item-buttons"
                >
                    <i
                        title="Complete"
                        className="complete-button fa fa-fw fa-check"
                        onClick={() => this.props.removeTask(this.props.index, true, { key: `T${Date.now()}`, name: this.props.name, color: this.props.color })}
                    />
                    <i
                        title="Delete"
                        className="cancel-button fa fa-fw fa-close"
                        onClick={() => this.props.removeTask(this.props.index, false)}
                    />
                    <i
                        title="Edit"
                        className="edit-button fa fa-fw fa-pencil"
                        onClick={() => this.props.toggleEditTaskModal(true, this.props.index)}
                    />
                    <i
                        title="Duplicate"
                        className="fa fa-fw fa-copy"
                        onClick={() => this.props.createTask({ key: `T${Date.now()}`, name: this.props.name, secsRemaining: this.props.secsRemaining, color: this.props.color }, this.props.index+1)}
                    />
                    <i
                        title="Move up"
                        className="fa fa-fw fa-angle-up"
                        onClick={() => this.props.moveTask(this.props.index, this.props.index-1)}
                    />
                    <i
                        title="Postpone"
                        className="fa fa-fw fa-angle-down"
                        onClick={() => this.props.moveTask(this.props.index, this.props.index+1)}
                    />
                    <i
                        title="Move to top"
                        className="fa fa-fw fa-angle-double-up"
                        onClick={() => this.props.moveTask(this.props.index, 0)}
                    />
                    <i
                        title="Postpone to end"
                        className="fa fa-fw fa-angle-double-down"
                        onClick={() => this.props.moveTask(this.props.index, -1)}
                    />
                </div>
            </div>
        );
    }
}

TaskItem.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    secsRemaining: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    setTimeRemaining: PropTypes.func.isRequired,
    moveTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
    toggleEditTaskModal: PropTypes.func.isRequired,
};

export default TaskItem;
