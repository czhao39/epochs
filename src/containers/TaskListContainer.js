import React, { Component } from "react";
import { connect } from "react-redux";

import TaskList from "../components/TaskList";
import { setTimeRemaining } from "../actions/setTimeRemaining";
import { moveTask } from "../actions/moveTask";
import { finishTask } from "../actions/finishTask";

@connect(function(state) {
    return {
        tasks: state.tasks,
    };
}, { setTimeRemaining, moveTask, finishTask })
export default class TaskListContainer extends Component {

    componentDidMount() {
        setInterval(() => {
            if (this.props.tasks.paused || this.props.tasks.list.length === 0) {
                return;
            }
            this.props.setTimeRemaining(0, this.props.tasks.list[0].secsRemaining - 1);
            if (this.props.tasks.list[0].secsRemaining <= 0) {
                this.props.finishTask(0, true);
            }
        }, 1000);
    }

    render() {
        return (
            <TaskList
                tasks={this.props.tasks}
                setTimeRemaining={this.props.setTimeRemaining}
                moveTask={this.props.moveTask}
                finishTask={this.props.finishTask}
            />
        );
    }
}
