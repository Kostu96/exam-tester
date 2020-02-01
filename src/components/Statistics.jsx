import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;
    padding-bottom: 4px;
`;

const Stat = styled.span`
    flex-grow: 1;
`;

class Statistics extends Component {
    render() {
        return(
            <Wrapper>
                <Stat>
                    <div>Liczba pytań:</div>
                    <div>{ this.props.numberOfQuestions }</div>
                </Stat>
                <Stat>
                    <div>Nauczonych pytań:</div>
                    <div>{ this.props.learntQuestionsCount }</div>
                </Stat>
                <Stat>
                    <div>Udzielonych odpowiedzi:</div>
                    <div>{ this.props.answersCount }</div>
                </Stat>
                <Stat>
                    <div>Dobrych odpowiedzi:</div>
                    <div>{ this.props.goodAnswersCount }</div>
                </Stat>
                <Stat>
                    <div>Wynik:</div>
                    <div>{ Math.round(this.props.goodAnswersCount / this.props.answersCount * 100) }%</div>
                </Stat>
            </Wrapper>
        );
    }
}

export default Statistics;
