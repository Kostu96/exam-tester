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

class Answer {
    constructor(text) {
        this.text = text;
        this.isCorrect = false;
    }

    makeCorrect() {
        this.isCorrect = true;
    }
}

class Question {
    constructor(number, text, answers) {
        this.number = number;
        this.text = text;
        this.answers = answers;
        this.correntAttempts = 0;
    }
}

class App extends Component {
    state = {
        questions: [],
        questionCount: 0,
        currentQuestionIndex: 0
    }

    constructor() {
        super();
        this.loadQuestionsData('/resources/mii_questions.txt');
    }

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

    loadQuestionsData(filePath) {
        var file = null;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", filePath, false);
        xmlhttp.send();

        if (xmlhttp.status === 200)
            file = xmlhttp.responseText;
        else alert("Error while loading questions database!");

        file = file.split('\n');

        var numberOfAnswers, questionText, questionAnswers = [];
        this.state.questionCount = parseInt(file[0]);
        file.shift();
        for (var i = 0; i < this.state.questionCount; ++i) {
            questionText = file[0].substr(file[0].indexOf(')') + 1);
            file.shift();
            numberOfAnswers = parseInt(file[0]);
            file.shift();

            for (var j = 0; j < numberOfAnswers; ++j) {
                questionAnswers.push(new Answer(file[0]));
                file.shift();
            }

            var num = parseInt(file[0]);
            questionAnswers[num - 1].makeCorrect();
            file.shift();

            this.state.questions.push(new Question(i + 1, questionText, questionAnswers));
            questionAnswers = [];
        }
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
