import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "../assets/css/TaskItem.scss";


class CompletedTaskItem extends PureComponent {
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
        this.taskButtons.style.opacity = 0;
        setTimeout(() => this.taskButtons.style.display = "none", 200);
    }
    hideButtons = this.hideButtons.bind(this);

    render() {
        return (
            <div
                className={`task-item ${this.props.color}`}
                tabIndex="-1"
                onMouseEnter={() => this.showButtons()}
                onFocus={() => this.showButtons()}
                onMouseLeave={() => this.hideButtons()}
                onBlur={() => this.hideButtons()}
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
