import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from './../GlobalStyle';
import Header from './Header';
import NavBar from './NavBar';
import Exam from './Exam';
import Ad from './Ad';
import Footer from './Footer';
import questionDataBase from './../database.js';

class App extends Component {
    render() {
        return (
            <Router>
                <GlobalStyle />
                <Header />
                <NavBar />
                <Switch>
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
                    <Route path="/">
                    <ul>
                        <li>
                            <Link to="/physics">Podstawy Fizyki [WIP]</Link>
                        </li>
                        <li>
                            <Link to="/modern_physics">Fizyka Współczesna</Link>
                        </li>
                        <li>
                            <Link to="/mii">Multimedia i Interfejsy</Link>
                        </li>
                    </ul>
                    </Route>
                </Switch>
                <Ad />
                <Footer />
            </Router>
        );
    }
}

export default App;
