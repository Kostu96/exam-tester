import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center;
`;

class Statistics extends Component {
    render() {
        return(
            <Wrapper>
                <span>Liczba pytań:</span>
                <span>Nauczonych pytań:</span>
                <span>Udzielonych odpowiedzi: </span>
                <span>Dobrych odpowiedzi: </span>
                <span>Wynik:</span>
            </Wrapper>
        );
    }
}

export default Statistics;
