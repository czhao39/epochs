import React, { PureComponent } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import "../styles/App.scss";
import CurTaskBox from "../containers/CurTaskBox.js";
import TaskListContainer from "../containers/TaskListContainer";


class App extends PureComponent {
    render() {
        return (
            <Grid fluid>
                <div className="app-title">Tasks</div>
                <div className="curtaskbox-wrapper">
                    <CurTaskBox />
                </div>
                <Row>
                    <Col xs={12} sm={8} md={6} smOffset={2} mdOffset={3}>
                        <TaskListContainer />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
