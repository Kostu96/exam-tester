import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    min-height: 75vh;
`;

const QuestionText = styled.p`
    margin: 16px 4px;
    font-size: 16px;
`;

const AnswersWrapper = styled.div`
    display: flex;
    flex-flow: column;
`;

const AnswerButtonWrapper = styled.div`
    margin: 1px auto;
    padding: 10px;
    font-size: 14px;
    ${ props => props.wasClicked ? props.isCorrect ? "background-color: green;" : "background-color: red;" : "" }

    ${ props => props.answered ? "" : `
        @media (hover: hover) {
            &:hover {
                background-color: #403846;
                cursor: pointer;
                margin: 0 auto;
                border: 1px solid gray;
            }
        }
    `}

    @media (max-width: 600px) {
        font-size: 12px;
    }
`;

class AnswerButton extends Component {
    state = {
        wasClicked: false
    };

    handleClick = () => {
        if (!this.props.answered)
            this.setState({ wasClicked: true });
        this.props.onClick();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.wasClicked)
            this.setState({ wasClicked: false })
    }

    render() {
        return (
            <AnswerButtonWrapper
                onClick={ this.handleClick }
                answered={ this.props.answered }
                wasClicked={ this.state.wasClicked } 
                isCorrect={ this.props.answer.isCorrect }
            >
                { String.fromCharCode('A'.charCodeAt(0) + this.props.index) + ") " }
                { this.props.answer.text }
            </AnswerButtonWrapper>
        );
    }
}

class QuestionWrapper extends Component {
    render() {
        return(
            <Wrapper onClick={ this.props.onClick }>
                <hr />
                <QuestionText>
                    { this.props.question.questionID + ". " }
                    { this.props.question.questionText }
                </QuestionText>
                <AnswersWrapper>
                    { this.props.question.questionAnswers.map(
                        (answer, index) =>
                        <AnswerButton
                            key={ index }
                            index={ index }
                            answered={ this.props.answered }
                            answer={ answer }
                            onClick={ () => this.props.answerHandler(answer.isCorrect) }
                        />
                    ) }
                </AnswersWrapper>
            </Wrapper>
        );
    }
}

export default QuestionWrapper;
