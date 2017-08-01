import React, { Component } from "react";
import { connect } from "react-redux";


import Timer from "../components/Timer";

@connect(function(state) {
    return {
        task: state.tasks[0],
    };
})
export default class CurTaskBox extends Component {
    render() {
        return (
            <Timer
                timeRemaining={this.props.task.timeRemaining}
            />
        );
    }
}
