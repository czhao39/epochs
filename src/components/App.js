import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Navbar } from "react-bootstrap";

import "../assets/css/App.scss";
import MainContainer from "../containers/MainContainer";
import FinishedTasksPageContainer from "../containers/FinishedTasksPageContainer";;


const App = ({ tasksArray }) => {
    return (
        <BrowserRouter>
            <div>
                <Navbar
                    fluid
                    staticTop
                    className={tasksArray.length > 0 ? tasksArray[0].color : "grey"}
                >
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Epochs</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={MainContainer} />
                    <Route path="/finished" component={FinishedTasksPageContainer} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

App.propTypes = {
    tasksArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
