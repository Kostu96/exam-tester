import React, { Component } from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from './../GlobalStyle';
import Header from './Header';
import NavBar from './NavBar';
import Exam from './Exam';
import Footer from './Footer';
import questionDataBase from './../database.jsx';

const ExamLinkContainer = styled.div`
    line-height: 60%;
`;

const ExamLink = styled(Link)`
    display: block;
    padding: 16px;
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

// const InactiveLink = styled(ExamLink)`
//     color: grey;
// 
//     &:hover {
//         background-color: #403846;
//         cursor: not-allowed;
//     }
// `;

const ChangeLog = styled.div`
    text-align: left;
    margin: 0 20px
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
                        <h4>Politechnika Gdańska:</h4>
                        <ExamLinkContainer>
                            <ExamLink to="/cybersecurity">Wprowadzenie do Cyberbezpieczeństwa </ExamLink><br />
                            <ExamLink to="/modern_physics">Fizyka Współczesna </ExamLink><br />
                            <ExamLink to="/graphics">Grafika Komputerowa </ExamLink><br />
                            <ExamLink to="/mii">Multimedia i Interfejsy </ExamLink><br />
                        </ExamLinkContainer>
                        <br />
                        <hr />
                        <h4>Pozostałe:</h4>
                        <ExamLinkContainer>
                            <ExamLink to="/ham">Egzamin krótkofalarski UKE </ExamLink>
                        </ExamLinkContainer>
                    </Route>
                    <Route path="/cybersecurity">
                        <Exam questionDB={ questionDataBase.cybersecurity } />
                    </Route>
                    <Route path="/modern_physics">
                        <Exam questionDB={ questionDataBase.modernPhysics } />
                    </Route>
                    <Route path="/graphics">
                        <Exam questionDB={ questionDataBase.graphics } />
                    </Route>
                    <Route path="/mii">
                        <Exam questionDB={ questionDataBase.multimediaAndInterfaces } />
                    </Route>
                    <Route path="/ham">
                        <Exam questionDB={ questionDataBase.ham } />
                    </Route>
                    <Route path="/changelog">
                        <ChangeLog>
                            20-05-2022
                            <ul>
                                <li>Dodano egzamin krótkofalarski UKE</li>
                                <li>Dodano losowanie kolejności odpowiedzi - uproszczono format bazy z pytaniami</li>
                                <li>Dodano changelog</li>
                                <li>Zmieniono stopkę strony</li>
                                <li>Usunięto niekompletny test z fizyki</li>
                                <li>Naprawionio wyświetlanie grafiki w pytaniach</li>
                                <li>Naprawionio drobne błędy</li>
                            </ul>
                            17-04-2022
                            <ul>
                                <li>Dodano egzamin z Wprowadzenia do Cyberbezpieczeństwa</li>
                                <li>Usunięto nieaktywne linki</li>
                            </ul>
                        </ChangeLog>
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
                <Footer />
            </Router>
        );
    }
}

export default App;
