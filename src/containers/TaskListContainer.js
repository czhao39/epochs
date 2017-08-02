import React, { Component } from "react";
import { connect } from "react-redux";

import TaskList from "../components/TaskList";
import { setTimeRemaining } from "../actions/setTimeRemaining";
import { finishTask } from "../actions/finishTask";

@connect(function(state) {
    return {
        tasks: state.tasks,
    };
}, { setTimeRemaining, finishTask })
export default class TaskListContainer extends Component {

    componentDidMount() {
        setInterval(() => {
            if (this.props.tasks.length === 0) {
                return;
            }
            this.props.setTimeRemaining(0, this.props.tasks[0].timeRemaining - 1);
            if (this.props.tasks[0].timeRemaining <= 0) {
                this.props.finishTask(0, true);
            }
        }, 1000);
    }

    render() {
        return (
            <TaskList
                tasks={this.props.tasks}
                setTimeRemaining={this.props.setTimeRemaining}
                finishTask={this.props.finishTask}
            />
        );
    }
}
