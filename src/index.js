import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './GlobalStyle.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

class App extends Component {
    render() {
        return (
        <>
            <GlobalStyle />
            <Header />
            <main>
                <h2>Exam Tester v2.0 is comming...</h2>
            </main>
            <Footer />
        </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
