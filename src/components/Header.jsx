import React, { Component } from 'react';
import styled from 'styled-components';

const PageHeader = styled.header`
    padding: 20px;
    background-color: #202426;
    font-size: 35px;
    font-weight: 700;
    letter-spacing: 3px;

    @media (max-width: 600px) {
        padding: 8px;
        font-size: 28px;
        letter-spacing: 2px;
    }
`;

class Header extends Component {
    render() {
        return(
            <PageHeader>EXAM TESTER</PageHeader>
        );
    }
}

export default Header;
