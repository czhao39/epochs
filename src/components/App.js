import React, { PureComponent } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import "../styles/App.scss";
import CurTaskBox from "../containers/CurTaskBox";
import TaskListControlsBox from "../containers/TaskListControlsBox";
import TaskListContainer from "../containers/TaskListContainer";


class App extends PureComponent {
    state = {
        showEditTaskModal: false,
    };

    /**
     * Toggle task editor modal
     *
     * @param {number} index Index of the task being edited
     * @param {boolean} show
     * @return {void}
     */
    toggleEditTaskModal(show, index) {
        this.setState({ showEditTaskModal: show, editIndex: index });
    }

    render() {
        return (
            <Grid fluid>
                <div className="app-title">Tasks</div>
                <div className="curtaskbox-wrapper">
                    <CurTaskBox
                        toggleEditTaskModal={(show, index) => this.toggleEditTaskModal(show, index)}
                    />
                </div>
                <TaskListControlsBox />
                <Row>
                    <Col xs={12} sm={8} md={6} smOffset={2} mdOffset={3}>
                        <TaskListContainer
                            editIndex={this.state.editIndex}
                            showEditTaskModal={this.state.showEditTaskModal}
                            toggleEditTaskModal={(show, index) => this.toggleEditTaskModal(show, index)}
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
