import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './GlobalStyle.js'
import Header from './components/Header.js'

function App() {
    return (
        <>
            <Header />
            <h2>Exam Tester v2.0 is comming...</h2>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
