import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Navbar } from "react-bootstrap";

import "../assets/css/App.scss";
import MainContainer from "../containers/MainContainer";
import CompletedTasksPageContainer from "../containers/CompletedTasksPageContainer";;


const App = ({ tasks }) => {
    return (
        <BrowserRouter>
            <div>
                <Navbar
                    fluid
                    staticTop
                    className={tasks.length > 0 ? tasks[0].color : "grey"}
                >
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Epochs</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={MainContainer} />
                    <Route path="/completed" component={CompletedTasksPageContainer} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

App.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
