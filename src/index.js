import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './GlobalStyle.js';
import Header from './components/Header.js';
import NavBar from './components/NavBar.js';
import Statistics from './components/Statistics.js';
import Settings from './components/Settings.js';
import Question from './components/Question.js';
import Ad from './components/Ad.js';
import Footer from './components/Footer.js';

class App extends Component {
    render() {
        return (
        <>
            <GlobalStyle />
            <Header />
            <NavBar />
            <main>
                <Statistics />
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
