import React, { PureComponent } from "react";
import { connect } from "react-redux";

import "../styles/CurTaskBox.scss";
import Timer from "../components/Timer";
import { togglePaused } from "../actions/togglePaused";
import { moveTask } from "../actions/moveTask";
import { finishTask } from "../actions/finishTask";


@connect(function(state) {
    return {
        tasks: state.tasks,
    };
}, { togglePaused, moveTask, finishTask })
export default class CurTaskBox extends PureComponent {
    render() {
        return (
            <div>
                <div className="timer-wrapper">
                    <Timer
                        paused={this.props.tasks.paused}
                        secsRemaining={this.props.tasks.list.length > 0 ? this.props.tasks.list[0].secsRemaining : 0}
                        color={this.props.tasks.list.length > 0 ? this.props.tasks.list[0].color : "grey"}
                        togglePaused={this.props.togglePaused}
                    />
                </div>
                {
                    this.props.tasks.list.length > 0 ?
                        <div>
                            <div className="cur-task">
                                {this.props.tasks.list[0].name}
                            </div>
                            <div className="cur-task-controls">
                                <i
                                    className="done-button fa fa-fw fa-check"
                                    onClick={() => this.props.finishTask(0, true, this.props.tasks.list[0].name, this.props.tasks.list[0].color)}
                                />
                                <i
                                    className="cancel-button fa fa-fw fa-close"
                                    onClick={() => this.props.finishTask(0, false)}
                                />
                                <i
                                    className="edit-button fa fa-fw fa-pencil"
                                    onClick={() => this.props.toggleEditTaskModal(true, 0)}
                                />
                                <i
                                    className="fa fa-fw fa-angle-down"
                                    onClick={() => this.props.moveTask(0, 1)}
                                />
                            </div>
                        </div>
                    :
                        <div>You're done!</div>
                }
            </div>
        );
    }
}
