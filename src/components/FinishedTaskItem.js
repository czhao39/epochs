import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "../styles/TaskItem.scss";


class FinishedTaskItem extends PureComponent {
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
                        className="cancel-button fa fa-fw fa-close"
                        onClick={() => this.props.removeFinishedTask(this.props.index)}
                    />
                </div>
            </div>
        );
    }
}

FinishedTaskItem.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    removeFinishedTask: PropTypes.func.isRequired,
};

export default FinishedTaskItem;
