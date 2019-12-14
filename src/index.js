import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle.js';
import Header from './components/Header.js';
import NavBar from './components/NavBar.js';
import Statistics from './components/Statistics.js';
import Settings from './components/Settings.js';
import QuestionWrapper from './components/QuestionWrapper.js';
import Ad from './components/Ad.js';
import Footer from './components/Footer.js';

const Wrapper = styled.main`
    width: 1000px;
    margin: 0 auto;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

class App extends Component {
    render() {
        return (
        <>
            <GlobalStyle />
            <Header />
            <NavBar />
            <Wrapper>
                <Statistics />
                <Settings />
                <QuestionWrapper />
            </Wrapper>
            <Ad />
            <Footer />
        </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
