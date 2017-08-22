import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";

import TotalInfoBox from "./TotalInfoBox";
import CompletedTaskListContainer from "../containers/CompletedTaskListContainer";

const CompletedTasksPage = ({ tasks, completedTasks }) => (
    <Grid fluid>
        <div className="total-info-box-wrapper">
            <TotalInfoBox
                tasks={tasks}
                completedTasks={completedTasks}
            />
            <div className="return-to-timer"><Link to="/"><i className="fa fa-fw fa-long-arrow-left" />Return to the timer!</Link></div>
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
