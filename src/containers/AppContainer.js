import React, { PureComponent } from "react";
import { connect } from "react-redux";

import finishedMp3 from "../assets/finished.mp3";
import finishedOgg from "../assets/finished.ogg";
import App from "../components/App";
import { setTimeRemaining } from "../actions/setTimeRemaining";
import { finishTask } from "../actions/finishTask";

@connect(function(state) {
    return {
        tasks: state.tasks,
    };
}, { setTimeRemaining, finishTask })
class AppContainer extends PureComponent {
    /**
     * Play task completed sound effect
     *
     * @return {void}
     */
    playSound() {
        this.audio.play();
    }

    /**
     * Play sound on task finished
     *
     * @param {number} index
     * @param {boolean} done
     * @param {string} taskName
     * @param {string} color
     * @return {void}
     */
    finishTaskProxy(index, done, taskName, color) {
        if (done) {
            this.playSound();
        }
        this.props.finishTask(index, done, taskName, color);
    }

    componentDidMount() {
        setInterval(() => {
            if (this.props.tasks.paused || this.props.tasks.list.length === 0) {
                return;
            }
            this.props.setTimeRemaining(0, this.props.tasks.list[0].secsRemaining - 1);
            if (this.props.tasks.list[0].secsRemaining <= 0) {
                this.finishTaskProxy(0, true, this.props.tasks.list[0].name, this.props.tasks.list[0].color);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                <audio
                    ref={(ref) => this.audio = ref}
                    preload="auto"
                >
                    <source src={finishedMp3} type="audio/mpeg" />
                    <source src={finishedOgg} type="audio/ogg" />
                </audio>
                <App
                    tasksArray={this.props.tasks.list}
                />
            </div>
        );
    }
}

export default AppContainer;
