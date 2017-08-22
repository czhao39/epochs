import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";

import InfoBar from "./InfoBar";
import CompletedTaskListContainer from "../containers/CompletedTaskListContainer";

const CompletedTasksPage = ({ tasks, completedTasks }) => (
    <Grid fluid>
        <div className="info-bar-wrapper">
            <InfoBar
                tasks={tasks}
                completedTasks={completedTasks}
                showReturn
            />
        </div>
        <div className="completed-title">Completed Epochs</div>
        <Row>
            <Col xs={12} sm={8} md={6} smOffset={2} mdOffset={3}>
                <CompletedTaskListContainer />
            </Col>
        </Row>
    </Grid>
);

CompletedTasksPage.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    completedTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CompletedTasksPage;
