import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";

import "../styles/App.scss";
import CurTaskBox from "../containers/CurTaskBox";
import TaskListControlsBox from "../containers/TaskListControlsBox";
import TaskListContainer from "../containers/TaskListContainer";

const App = ({ editIndex, showEditTaskModal, toggleEditTaskModal }) => {
    return (
        <Grid fluid>
            <div className="app-title">Epochs</div>
            <div className="curtaskbox-wrapper">
                <CurTaskBox
                    toggleEditTaskModal={(show, index) => toggleEditTaskModal(show, index)}
                />
            </div>
            <TaskListControlsBox />
            <Row>
                <Col xs={12} sm={8} md={6} smOffset={2} mdOffset={3}>
                    <TaskListContainer
                        editIndex={editIndex}
                        showEditTaskModal={showEditTaskModal}
                        toggleEditTaskModal={(show, index) => toggleEditTaskModal(show, index)}
                    />
                </Col>
            </Row>
        </Grid>
    );
};

App.propTypes = {
    editIndex: PropTypes.number,
    showEditTaskModal: PropTypes.bool.isRequired,
    toggleEditTaskModal: PropTypes.func.isRequired,
};

export default App;
