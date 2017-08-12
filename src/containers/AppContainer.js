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
     * @param {object} task
     * @return {void}
     */
    finishTaskProxy(index, done, task) {
        if (done) {
            this.playSound();
        }
        this.props.finishTask(index, done, task);
    }

    /**
     * Run the timer, which updates every 250 ms
     *
     * @return {void}
     */
    runTimer() {
        this.lastTime = Date.now();
        setInterval(() => {
            let secsSinceLast = Math.floor((Date.now() - this.lastTime) / 1000);
            if (!this.props.tasks.paused && secsSinceLast >= 1 && this.props.tasks.list.length > 0) {
                this.lastTime = Date.now();
                while (secsSinceLast > 0) {
                    if (secsSinceLast > this.props.tasks.list[0].secsRemaining) {  // finish tasks that may not have been finished due to setInterval not runnning
                        this.finishTaskProxy(0, true, this.props.tasks.list[0]);
                        secsSinceLast -= this.props.tasks.list[0].secsRemaining;
                    } else {  // decrease time remaining for current task
                        this.props.setTimeRemaining(0, this.props.tasks.list[0].secsRemaining - secsSinceLast);
                        secsSinceLast = 0;
                        if (this.props.tasks.list[0].secsRemaining <= 0) {
                            this.finishTaskProxy(0, true, this.props.tasks.list[0]);
                        }
                    }
                }
            }
        }, 250);
    }

    componentDidMount() {
        this.runTimer();
    }

    componentWillUpdate(nextProps) {
        if (this.props.tasks.paused && !nextProps.tasks.paused) {
            this.lastTime = Date.now();
        }
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
