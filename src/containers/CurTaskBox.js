import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/CurTaskBox.scss";
import Timer from "../components/Timer";
import { togglePaused } from "../actions/togglePaused";
import { finishTask } from "../actions/finishTask";


@connect(function(state) {
    return {
        tasks: state.tasks,
    };
}, { togglePaused, finishTask })
export default class CurTaskBox extends Component {
    render() {
        return (
            <div>
                <Timer
                    secsRemaining={this.props.tasks.list.length > 0 ? this.props.tasks.list[0].secsRemaining : 0}
                    togglePaused={this.props.togglePaused}
                />
                <div className="cur-task-controls">
                    <i
                        className="done-button fa fa-check"
                        onClick={() => this.props.finishTask(0, true)}
                    />
                    <i
                        className="cancel-button fa fa-close"
                        onClick={() => this.props.finishTask(0, false)}
                    />
                    <i
                        className="edit-button fa fa-pencil"
                        onClick={() => this.props.toggleEditTaskModal(true, 0)}
                    />
                </div>
            </div>
        );
    }
}
