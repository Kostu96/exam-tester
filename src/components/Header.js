import React, { Component } from 'react';
import styled from 'styled-components';

const PageHeader = styled.header`
    text-align: center;
    padding: 20px;
    margin-bottom: 10px;
    background-color: #222628;
    font-size: 35px;
    font-weight: 700;
    letter-spacing: 3px;
`;

class Header extends Component {
    render() {
        return(
            <PageHeader>EXAM TESTER</PageHeader>
        );
    }
}

export default Header;
