import React, { PureComponent } from "react";
import { connect } from "react-redux";

import FinishedTasksPage from "../components/FinishedTasksPage";


@connect(function(state) {
    return {
        tasks: state.tasks,
        finishedTasks: state.finishedTasks,
    };
})
export default class FinishedTasksPageContainer extends PureComponent {
    render() {
        return (
            <FinishedTasksPage
                tasks={this.props.tasks}
                finishedTasks={this.props.finishedTasks}
            />
        );
    }
}
