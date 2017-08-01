import React, { Component } from "react";
import { connect } from "react-redux";


import Timer from "../components/Timer";

class CurTaskBox extends Component {
    render() {
        return (
            <Timer
                timeRemaining={this.props.task.timeRemaining}
            />
        );
    }
}

// TODO: use a decorator instead
export default connect(function(state) {
    return {
        task: state.tasks[0],
    };
})(CurTaskBox);
