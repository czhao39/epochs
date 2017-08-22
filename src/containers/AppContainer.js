import React, { PureComponent } from "react";
import { connect } from "react-redux";

import completedMp3 from "../assets/audio/completed.mp3";
import completedOgg from "../assets/audio/completed.ogg";
import App from "../components/App";
import { setTimeRemaining } from "../actions/setTimeRemaining";
import { removeTask } from "../actions/removeTask";

@connect(function(state) {
    return {
        tasks: state.tasks,
        states: state.states,
    };
}, { setTimeRemaining, removeTask })
class AppContainer extends PureComponent {
    /**
     * Play task completed sound effect
     *
     * @return {void}
     */
    playSound() {
        this.audio.play();
    }
    playSound = this.playSound.bind(this);

    /**
     * Run the timer, which updates every 250 ms
     *
     * @return {void}
     */
    runTimer() {
        this.lastTime = Date.now();
        setInterval(() => {
            let secsSinceLast = Math.floor((Date.now() - this.lastTime) / 1000);
            if (!this.props.states.paused && secsSinceLast >= 1 && this.props.tasks.length > 0) {
                this.lastTime = Date.now();
                while (secsSinceLast > 0) {
                    if (secsSinceLast > this.props.tasks[0].secsRemaining) {  // complete tasks that may not have been completed due to setInterval not runnning
                        this.props.removeTask(0, true, this.props.tasks[0]);
                        secsSinceLast -= this.props.tasks[0].secsRemaining;
                    } else {  // decrease time remaining for current task
                        this.props.setTimeRemaining(0, this.props.tasks[0].secsRemaining - secsSinceLast);
                        secsSinceLast = 0;
                        if (this.props.tasks[0].secsRemaining <= 0) {
                            this.props.removeTask(0, true, this.props.tasks[0]);
                        }
                    }
                }
            }
        }, 250);
    }

    componentDidMount() {
        this.runTimer();
        document.body.className = this.props.tasks.length > 0 ? this.props.tasks[0].color : "";
    }

    componentWillUpdate(nextProps) {
        if (this.props.states.paused && !nextProps.states.paused) {
            this.lastTime = Date.now();
        }
    }

    componentDidUpdate() {
        document.body.className = this.props.tasks.length > 0 ? this.props.tasks[0].color : "";
        if (this.props.states.removingCompletedTask) {
            this.playSound();
        }
    }

    render() {
        return (
            <div>
                <audio
                    ref={(ref) => this.audio = ref}
                    preload="auto"
                >
                    <source src={completedMp3} type="audio/mpeg" />
                    <source src={completedOgg} type="audio/ogg" />
                </audio>
                <App
                    tasks={this.props.tasks}
                />
            </div>
        );
    }
}

export default AppContainer;
