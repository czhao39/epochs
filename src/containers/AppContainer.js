import React, { PureComponent } from "react";
import { connect } from "react-redux";

import App from "../components/App";
import { setTimeRemaining } from "../actions/setTimeRemaining";
import { finishTask } from "../actions/finishTask";

@connect(function(state) {
    return {
        tasks: state.tasks,
    };
}, { setTimeRemaining, finishTask })
class AppContainer extends PureComponent {
    componentDidMount() {
        setInterval(() => {
            if (this.props.tasks.paused || this.props.tasks.list.length === 0) {
                return;
            }
            this.props.setTimeRemaining(0, this.props.tasks.list[0].secsRemaining - 1);
            if (this.props.tasks.list[0].secsRemaining <= 0) {
                this.props.finishTask(0, true, this.props.tasks.list[0].name, this.props.tasks.list[0].color);
            }
        }, 1000);
    }

    render() {
        return (
            <App
                tasksArray={this.props.tasks.list}
            />
        );
    }
}

export default AppContainer;
