import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

import TaskEditor from "./TaskEditor";


class EditTaskModal extends PureComponent {
    /**
     * Edit the task
     *
     * @param {object} task
     * @return {void}
     */
    submitTask(task) {
        this.props.editTask(this.props.index, task);
        this.props.toggleEditTaskModal(false);
    }
    submitTask = this.submitTask.bind(this);

    render() {
        return (
            <Modal
                show={this.props.showEditTaskModal}
                onHide={() => this.props.toggleEditTaskModal(false)}
                dialogClassName="edit-task-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit task</Modal.Title>
                    <Modal.Body>
                        <TaskEditor
                            task={this.props.task}
                            submitTask={this.submitTask}
                        />
                    </Modal.Body>
                </Modal.Header>
            </Modal>
        );
    }
}

EditTaskModal.propTypes = {
    index: PropTypes.number,
    task: PropTypes.object,
    showEditTaskModal: PropTypes.bool.isRequired,
    toggleEditTaskModal: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
};

export default EditTaskModal;
