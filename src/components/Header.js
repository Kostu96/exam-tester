import React from 'react';
import styled from 'styled-components';

const page_header = styled.header`
    text-align: center;
    padding: 30px;
    background-color: #252525;
    font-size: 36px;
`;

function Header() {
    return(
        <page_header>Exam Tester</page_header>
    );
}

export default Header;
