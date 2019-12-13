import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './GlobalStyle.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <h2>Exam Tester v2.0 is comming...</h2>
            <Footer />
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
