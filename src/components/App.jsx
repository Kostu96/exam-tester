import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyle from './../GlobalStyle';
import Header from './Header';
import NavBar from './NavBar';
import Statistics from './Statistics';
import Settings from './Settings';
import QuestionWrapper from './QuestionWrapper';
import Ad from './Ad';
import Footer from './Footer';
import questionDataBase from './../database.js';

const Wrapper = styled.main`
    width: 1000px;
    margin: 0 auto;
    font-size: 16px;

    @media (max-width: 600px) {
        width: 100%;
        font-size: 12px;
    }
`;

class App extends Component {
    state = {
        questionIndexes: this.shuffleArray([...Array(questionDataBase.modernPhysics.length).keys()]),
        currentQuestionIndex: 0,
        learntQuestionsCount: 0,
        answersCount: 0,
        goodAnswersCount: 0,
        answered : false
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
        if (!this.state.answered) {
            var addToGood = 0;
            if (isCorrect) addToGood = 1;

            this.setState({
                answersCount: this.state.answersCount + 1,
                goodAnswersCount: this.state.goodAnswersCount + addToGood,
                answered: true
            });
        }
    }

    handleNextQuestion = () => {
        if (this.state.answered) {
            var newQuestionIndex;
            var shouldShuffle = false;
            if (this.state.currentQuestionIndex < questionDataBase.modernPhysics.length - 1)
                newQuestionIndex = this.state.currentQuestionIndex + 1;
            else {
                newQuestionIndex = 0;
                shouldShuffle = true;
            }
    
            this.setState({
                questionIndexes: shouldShuffle ? this.shuffleArray(this.state.questionIndexes) : this.state.questionIndexes,
                currentQuestionIndex: newQuestionIndex,
                answered: false
            });
        }
    }

    render() {
        return (
        <>
            <GlobalStyle />
            <Header />
            <NavBar />
            <Wrapper>
                <Statistics
                    numberOfQuestions={ questionDataBase.modernPhysics.length }
                    learntQuestionsCount={ this.state.learntQuestionsCount }
                    answersCount={ this.state.answersCount }
                    goodAnswersCount={ this.state.goodAnswersCount }
                />
                <Settings />
                <QuestionWrapper
                    onClick={ this.handleNextQuestion }
                    question={ questionDataBase.modernPhysics[this.state.questionIndexes[this.state.currentQuestionIndex]] }
                    answerHandler={ this.handleAnswer }
                    answered={ this.state.answered }
                />
            </Wrapper>
            <Ad />
            <Footer />
        </>
        );
    }
}

export default App;
