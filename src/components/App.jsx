import React, { Component } from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from './../GlobalStyle';
import Header from './Header';
import NavBar from './NavBar';
import Exam from './Exam';
import DataBaseHelp from './DataBaseHelp';
import Ad from './Ad';
import Footer from './Footer';
import questionDataBase from './../database.js';

const ExamLink = styled(Link)`
    display: block;
    padding: 20px;
    text-decoration: none;
    color: whitesmoke;
    width: 320px;
    margin: 0 auto;

    @media (max-width: 600px) {
        width: 100%;
    }

    &:hover {
        background-color: #403846;
        cursor: pointer;
    }
`;

class App extends Component {
    render() {
        return (
            <Router>
                <GlobalStyle />
                <Header />
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <h3>Wybierz test, który Cię interesuje:</h3>
                        <div>
                            <ExamLink
                                to="/physics">Podstawy Fizyki [WIP]
                            </ExamLink>
                            <ExamLink
                                to="/modern_physics">Fizyka Współczesna
                            </ExamLink>
                            <ExamLink
                                to="/mii">Multimedia i Interfejsy
                            </ExamLink>
                        </div>
                    </Route>
                    <Route path="/physics">
                        <Exam
                            questionDB={ questionDataBase.physics }
                        />
                    </Route>
                    <Route path="/modern_physics">
                        <Exam
                            questionDB={ questionDataBase.modernPhysics }
                        />
                    </Route>
                    <Route path="/mii">
                        <Exam
                            questionDB={ questionDataBase.multimediaAndInterfaces }
                        />
                    </Route>
                    <Route path="/question_db">
                        <DataBaseHelp />
                    </Route>
                    <Route path="/*">
                        <br />
                        <h1>Error 404</h1>
                        <p>Dotarłeś do miejsca, gdzie diabeł mówi dobranoc. Zawróć.</p>
                        <br />
                        <br />
                        <br />
                    </Route>
                </Switch>
                <Ad />
                <Footer />
            </Router>
        );
    }
}

export default App;