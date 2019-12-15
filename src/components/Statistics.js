import React, { Component } from 'react';
import styled from 'styled-components';
import questionDataBase from './../database.js';

const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;
`;

const Stat = styled.span`
    flex-grow: 1;
    text-align: center;
`;

class Statistics extends Component {
    state = {
        learntQuestions: 0,
        answers: 0,
        goodAnswers: 0
    };

    render() {
        return(
            <Wrapper>
                <Stat>
                    <div>Liczba pytań:</div>
                    <div>{ questionDataBase.multimediaAndInterfaces.length }</div>
                </Stat>
                <Stat>
                    <div>Nauczonych pytań:</div>
                    <div>{ this.state.learntQuestions }</div>
                </Stat>
                <Stat>
                    <div>Udzielonych odpowiedzi:</div>
                    <div>{ this.state.answers }</div>
                </Stat>
                <Stat>
                    <div>Dobrych odpowiedzi:</div>
                    <div>{ this.state.goodAnswers }</div>
                </Stat>
                <Stat>
                    <div>Wynik:</div>
                    <div>{ Math.round(this.state.goodAnswers / this.state.answers * 100) }%</div>
                </Stat>
            </Wrapper>
        );
    }
}

export default Statistics;
