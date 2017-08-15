import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap";

import "../assets/css/CurTaskBox.scss";
import Timer from "../components/Timer";
import { togglePaused } from "../actions/togglePaused";
import { moveTask } from "../actions/moveTask";
import { removeTask } from "../actions/removeTask";


@connect(function(state) {
    return {
        tasks: state.tasks,
        paused: state.states.paused,
    };
}, { togglePaused, moveTask, removeTask })
export default class CurTaskBox extends PureComponent {
    render() {
        return (
            <div>
                <Grid fluid>
                    <div className="timer-wrapper">
                        <Timer
                            paused={this.props.paused}
                            secsRemaining={this.props.tasks.length > 0 ? this.props.tasks[0].secsRemaining : 0}
                            color={this.props.tasks.length > 0 ? this.props.tasks[0].color : "grey"}
                            togglePaused={this.props.togglePaused}
                        />
                    </div>
                    {
                        this.props.tasks.length > 0 ?
                            <div>
                                <Row>
                                    <Col sm={10} md={8} smOffset={1} mdOffset={2}>
                                        <div className="cur-task">
                                            {this.props.tasks[0].name}
                                        </div>
                                    </Col>
                                </Row>
                                <div className="cur-task-controls">
                                    <i
                                        title="Complete"
                                        className="complete-button fa fa-fw fa-check"
                                        onClick={() => this.props.removeTask(0, true, this.props.tasks[0])}
                                    />
                                    <i
                                        title="Delete"
                                        className="cancel-button fa fa-fw fa-close"
                                        onClick={() => this.props.removeTask(0, false)}
                                    />
                                    <i
                                        title="Edit"
                                        className="edit-button fa fa-fw fa-pencil"
                                        onClick={() => this.props.toggleEditTaskModal(true, 0)}
                                    />
                                    <i
                                        title="Postpone"
                                        className="fa fa-fw fa-angle-down"
                                        onClick={() => this.props.moveTask(0, 1)}
                                    />
                                </div>
                            </div>
                        :
                            <div>You're done!</div>
                    }
                </Grid>
            </div>
        );
    }
}
