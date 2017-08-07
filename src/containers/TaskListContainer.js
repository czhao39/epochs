import React, { PureComponent } from "react";
import { connect } from "react-redux";

import finishedMp3 from "../assets/finished.mp3";
import finishedOgg from "../assets/finished.ogg";
import EditTaskModal from "../components/EditTaskModal";
import TaskList from "../components/TaskList";
import { setTimeRemaining } from "../actions/setTimeRemaining";
import { moveTask } from "../actions/moveTask";
import { finishTask } from "../actions/finishTask";
import { createTask } from "../actions/createTask";
import { editTask } from "../actions/editTask";

@connect(function(state) {
    return {
        tasks: state.tasks,
    };
}, { setTimeRemaining, moveTask, finishTask, createTask, editTask })
export default class TaskListContainer extends PureComponent {
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
     * @param {string} taskName
     * @param {string} color
     * @return {void}
     */
    finishTaskProxy(index, done, taskName, color) {
        if (done) {
            this.playSound();
        }
        this.props.finishTask(index, done, taskName, color);
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
                <EditTaskModal
                    index={this.props.editIndex}
                    task={this.props.editIndex === undefined ? null : this.props.tasks.list[this.props.editIndex]}
                    showEditTaskModal={this.props.showEditTaskModal}
                    toggleEditTaskModal={(show, index) => this.props.toggleEditTaskModal(show, index)}
                    editTask={this.props.editTask}
                />
                <TaskList
                    tasksArray={this.props.tasks.list}
                    setTimeRemaining={this.props.setTimeRemaining}
                    moveTask={this.props.moveTask}
                    finishTask={(index, done, name, color) => this.finishTaskProxy(index, done, name, color)}
                    createTask={this.props.createTask}
                    toggleEditTaskModal={(show, index) => this.props.toggleEditTaskModal(show, index)}
                />
            </div>
        );
    }
}
