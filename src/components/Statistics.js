import React, { Component } from 'react';
import styled from 'styled-components';
import questionDataBase from './../database.js';

const Wrapper = styled.div`
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
                <span>Liczba pytań: { questionDataBase.multimediaAndInterfaces.length }</span>
                <span>Nauczonych pytań: { this.state.learntQuestions }</span>
                <span>Udzielonych odpowiedzi: { this.state.answers }</span>
                <span>Dobrych odpowiedzi: { this.state.goodAnswers }</span>
                <span>Wynik: { Math.round(this.state.goodAnswers / this.state.answers * 100) }%</span>
            </Wrapper>
        );
    }
}

export default Statistics;
