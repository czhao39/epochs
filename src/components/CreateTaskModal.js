import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Modal, Grid, Row, Col, FormControl, Button } from "react-bootstrap";

import "../styles/CreateTaskModal.scss";
import TaskEditor from "./TaskEditor";


class CreateTaskModal extends PureComponent {
    /**
     * Create the task
     *
     * @param {object} task
     * @return {void}
     */
    submitTask(task) {
        this.props.createTask(task);
        this.props.hideCreateTaskModal();
    }
    submitTask = this.submitTask.bind(this);

    render() {
        return (
            <Modal
                show={this.props.showCreateTaskModal}
                onHide={this.props.hideCreateTaskModal}
                dialogClassName="create-task-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create a task</Modal.Title>
                    <Modal.Body>
                        <TaskEditor submitTask={this.submitTask} />
                    </Modal.Body>
                </Modal.Header>
            </Modal>
        );
    }
}

CreateTaskModal.propTypes = {
    showCreateTaskModal: PropTypes.bool.isRequired,
    hideCreateTaskModal: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
};

export default CreateTaskModal;
