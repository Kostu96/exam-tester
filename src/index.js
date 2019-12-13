import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './GlobalStyle.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Question from './components/Question.js';
import Settings from './components/Settings.js';
import Ad from './components/Ad.js';

class App extends Component {
    render() {
        return (
        <>
            <GlobalStyle />
            <Header />
            <main>
                <Settings />
                <Question />
            </main>
            <Ad />
            <Footer />
        </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
