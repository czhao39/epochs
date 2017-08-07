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
                tasksArray={this.props.tasks.list}
                finishedTasks={this.props.finishedTasks}
            />
        );
    }
}
