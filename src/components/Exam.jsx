import React, { Component } from 'react';
import styled from 'styled-components';
import Statistics from './Statistics';
import QuestionWrapper from './QuestionWrapper';
import shuffleArray from '../shuffle_array';

const Wrapper = styled.main`
    width: 1000px;
    margin: 0 auto;
    font-size: 16px;

    @media (max-width: 600px) {
        width: 100%;
        font-size: 12px;
    }
`;

class Exam extends Component {
    state = {
        questionsView: shuffleArray(Array(this.props.questionDB.length).fill(undefined).map(function(_, idx) { return { index: idx, goodAcc: 0 } })),
        learntQuestionsCount: 0,
        currentQuestionIndex: 0,
        answersCount: 0,
        goodAnswersCount: 0,
        answered : false
    };

    handleAnswer = (isCorrect) => {
        if (!this.state.answered) {
            if (isCorrect) {
                let newQuestionsView = this.state.questionsView;
                newQuestionsView[this.state.currentQuestionIndex].goodAcc = this.state.questionsView[this.state.currentQuestionIndex].goodAcc + 1;
                
                this.setState({
                    questionsView: newQuestionsView,
                    answersCount: this.state.answersCount + 1,
                    goodAnswersCount: this.state.goodAnswersCount + 1,
                    answered: true
                });
            }
            else
                this.setState({
                    answersCount: this.state.answersCount + 1,
                    goodAnswersCount: this.state.goodAnswersCount + 0,
                    answered: true
                });
        }
    }

    handleNextQuestion = () => {
        if (this.state.answered) {
            let addToLearnt = 0;
            let newQuestionsView = this.state.questionsView;
            if (newQuestionsView[this.state.currentQuestionIndex].goodAcc >= 2) {
                newQuestionsView.splice(this.state.currentQuestionIndex, 1);
                addToLearnt = 1;
            }
            
            var newQuestionIndex;
            var shouldShuffle = false;
            if (this.state.currentQuestionIndex < newQuestionsView.length - 1)
                newQuestionIndex = this.state.currentQuestionIndex + 1;
            else {
                newQuestionIndex = 0;
                shouldShuffle = true;
            }
    
            this.setState({
                questionsView: shouldShuffle ? this.shuffleArray(newQuestionsView) : newQuestionsView,
                currentQuestionIndex: newQuestionIndex,
                learntQuestionsCount: this.state.learntQuestionsCount + addToLearnt,
                answered: false
            });
        }
    }

    render() {
        let content;
        if (this.state.questionsView.length > 0)
            content = <QuestionWrapper
                onClick={ this.handleNextQuestion }
                question={ this.props.questionDB[(this.state.questionsView[this.state.currentQuestionIndex]).index] }
                answerHandler={ this.handleAnswer }
                answered={ this.state.answered }
            />;
        else
            content = (Math.floor(Math.random() * 100) % 2) === 0 ? 
                <h3>
                Gratulacje!
                <br />
                Wszystkie pytanka ogarnięte!
                <br />
                Prawdopodobieństwo tego, że zdasz zostało zwiększone.
                </h3>
                :
                <h3>
                Nieźle Ziomeczku!
                <br />
                Teraz to już na pewno zdasz.
                </h3>
        return (
            <Wrapper>
                <Statistics
                    numberOfQuestions={ this.props.questionDB.length }
                    learntQuestionsCount={ this.state.learntQuestionsCount }
                    answersCount={ this.state.answersCount }
                    goodAnswersCount={ this.state.goodAnswersCount }
                />
                { content }
            </Wrapper>
        );
    }
}

export default Exam;
