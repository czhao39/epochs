import React, { Component } from "react";
import { connect } from "react-redux";


import Timer from "../components/Timer";
import { togglePaused } from "../actions/togglePaused";

@connect(function(state) {
    return {
        tasks: state.tasks,
    };
}, { togglePaused })
export default class CurTaskBox extends Component {
    render() {
        return (
            <Timer
                secsRemaining={this.props.tasks.list.length > 0 ? this.props.tasks.list[0].secsRemaining : 0}
                togglePaused={this.props.togglePaused}
            />
        );
    }
}
