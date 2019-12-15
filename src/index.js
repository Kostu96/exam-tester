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
        questionIndexes: this.shuffleArray([...Array(questionDataBase.multimediaAndInterfaces.length).keys()]),
        currentQuestionIndex: 0,
        learntQuestionsCount: 0,
        answersCount: 0,
        goodAnswersCount: 0
    };

    shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
  
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
  
        return array;
    }

    handleAnswer = (isCorrect) => {
        var addToGood = 0;
        if (isCorrect) addToGood = 1;

        var newQuestionIndex;
        var shouldShuffle = false;
        if (this.state.currentQuestionIndex < questionDataBase.multimediaAndInterfaces.length)
            newQuestionIndex = this.state.currentQuestionIndex + 1;
        else {
            newQuestionIndex = 0;
            shouldShuffle = true;
        }

        this.setState({
            questionIndexes: shouldShuffle ? this.shuffleArray(this.state.questionIndexes) : this.state.questionIndexes,
            currentQuestionIndex: newQuestionIndex,
            answersCount: this.state.answersCount + 1,
            goodAnswersCount: this.state.goodAnswersCount + addToGood
        });
    }

    render() {
        return (
        <>
            <GlobalStyle />
            <Header />
            <NavBar />
            <Wrapper>
                <Statistics
                    numberOfQuestions={ questionDataBase.multimediaAndInterfaces.length }
                    learntQuestionsCount={ this.state.learntQuestionsCount }
                    answersCount={ this.state.answersCount }
                    goodAnswersCount={ this.state.goodAnswersCount }
                />
                <Settings />
                <QuestionWrapper
                    question={ questionDataBase.multimediaAndInterfaces[this.state.questionIndexes[this.state.currentQuestionIndex]] }
                    answerHandler={ this.handleAnswer }
                />
            </Wrapper>
            <Ad />
            <Footer />
        </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
