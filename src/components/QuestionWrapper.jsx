import React, { Component } from 'react';
import styled from 'styled-components';

const QuestionText = styled.p`
    margin: 16px 4px;
`;

const AnswersWrapper = styled.div`
    display: flex;
    flex-flow: column;
`;

const AnswerButton = styled.div`
    margin: 0 auto;
    padding: 10px;
    font-size: 14px;

    @media (hover: hover) {
        &:hover {
            background-color: #403846;
            cursor: pointer;
        }
    }
    
    @media (max-width: 600px) {
        font-size: 12px;
    }
`;

class QuestionWrapper extends Component {
    render() {
        return(
            <div>
                <hr />
                <QuestionText>
                    { this.props.question.questionID + ". " }
                    { this.props.question.questionText }
                </QuestionText>
                <AnswersWrapper>
                    { this.props.question.questionAnswers.map(
                        (answer, index) =>
                        <AnswerButton
                            key={ answer.id }
                            onClick={ () => this.props.answerHandler(answer.isCorrect) }
                        >
                            { String.fromCharCode('A'.charCodeAt(0) + index) + ") " }
                            { answer.text }
                        </AnswerButton>
                    ) }
                </AnswersWrapper>
            </div>
        );
    }
}

export default QuestionWrapper;
