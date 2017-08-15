import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "../assets/css/TaskItem.scss";


class CompletedTaskItem extends PureComponent {
    render() {
        return (
            <div
                className={`task-item ${this.props.color}`}
                onMouseOver={() => this.taskButtons.style.opacity = 1}
                onMouseOut={() => this.taskButtons.style.opacity = 0}
            >
                <div className="task-item-name">{this.props.name}</div>
                <div
                    ref={(ref) => this.taskButtons = ref}
                    className="task-item-buttons"
                >
                    <i
                        title="Delete"
                        className="cancel-button fa fa-fw fa-close"
                        onClick={() => this.props.removeCompletedTask(this.props.index)}
                    />
                </div>
            </div>
        );
    }
}

CompletedTaskItem.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    removeCompletedTask: PropTypes.func.isRequired,
};

export default CompletedTaskItem;
