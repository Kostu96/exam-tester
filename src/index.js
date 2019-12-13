import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header'

function App() {
    return (
        <>
            <Header />
            <h2>Exam Tester v2.0 is comming...</h2>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
