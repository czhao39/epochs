import React, { PureComponent } from "react";
import { connect } from "react-redux";

import CompletedTasksPage from "../components/CompletedTasksPage";


@connect(function(state) {
    return {
        tasks: state.tasks,
        completedTasks: state.completedTasks,
    };
})
export default class CompletedTasksPageContainer extends PureComponent {
    render() {
        return (
            <CompletedTasksPage
                tasks={this.props.tasks}
                completedTasks={this.props.completedTasks}
            />
        );
    }
}
