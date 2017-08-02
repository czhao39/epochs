import React, { Component } from "react";
import { connect } from "react-redux";


import Timer from "../components/Timer";

@connect(function(state) {
    return {
        tasks: state.tasks,
    };
})
export default class CurTaskBox extends Component {
    render() {
        return (
            <Timer
                timeRemaining={this.props.tasks.length > 0 ? this.props.tasks[0].timeRemaining : 0}
            />
        );
    }
}
