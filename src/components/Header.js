import React from 'react';
import styled from 'styled-components';

const PageHeader = styled.header`
    text-align: center;
    padding: 20px;
    background-color: #222628;
    font-size: 32px;
`;

function Header() {
    return(
        <PageHeader>Exam Tester</PageHeader>
    );
}

export default Header;
