import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Statistics from './components/Statistics';
import Settings from './components/Settings';
import QuestionWrapper from './components/QuestionWrapper';
import Ad from './components/Ad';
import Footer from './components/Footer';
import questionDataBase from './database.js';

const Wrapper = styled.main`
    width: 1000px;
    margin: 0 auto;
    font-size: 16px;
    min-height: 84vh;

    @media (max-width: 600px) {
        width: 100%;
        font-size: 12px;
    }
`;

class App extends Component {
    state = {
        currentQuestionIndex: 0
    };

    render() {
        return (
        <>
            <GlobalStyle />
            <Header />
            <NavBar />
            <Wrapper>
                <Statistics numberOfQuestions={ questionDataBase.multimediaAndInterfaces.length } />
                <Settings />
                <QuestionWrapper question={ questionDataBase.multimediaAndInterfaces[this.state.currentQuestionIndex] } />
            </Wrapper>
            <Ad />
            <Footer />
        </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
