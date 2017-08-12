import React, { PureComponent } from "react";
import { connect } from "react-redux";

import "../assets/css/CurTaskBox.scss";
import finishedMp3 from "../assets/finished.mp3";
import finishedOgg from "../assets/finished.ogg";
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
    /**
     * Play task completed sound effect
     *
     * @return {void}
     */
    playSound() {
        this.audio.play();
    }

    /**
     * Play sound on task finished
     *
     * @param {number} index
     * @param {boolean} done
     * @param {object} task
     * @return {void}
     */
    finishTaskProxy(index, done, task) {
        if (done) {
            this.playSound();
        }
        this.props.finishTask(index, done, task);
    }

    render() {
        return (
            <div>
                <audio
                    ref={(ref) => this.audio = ref}
                    preload="auto"
                >
                    <source src={finishedMp3} type="audio/mpeg" />
                    <source src={finishedOgg} type="audio/ogg" />
                </audio>
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
                                    title="Finish"
                                    className="done-button fa fa-fw fa-check"
                                    onClick={() => this.finishTaskProxy(0, true, this.props.tasks.list[0])}
                                />
                                <i
                                    title="Delete"
                                    className="cancel-button fa fa-fw fa-close"
                                    onClick={() => this.finishTaskProxy(0, false)}
                                />
                                <i
                                    title="Edit"
                                    className="edit-button fa fa-fw fa-pencil"
                                    onClick={() => this.props.toggleEditTaskModal(true, 0)}
                                />
                                <i
                                    title="Postpone"
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
