import React from 'react';
import styled from 'styled-components';

const PageFooter = styled.footer`
    text-align: center;
    padding: 5px;
    margin-top: 10px;
    background-color: #222628;
    font-size: 16px;
`;

function Footer() {
    return(
        <PageFooter>Konstanty Misiak &copy; 2019</PageFooter>
    );
}

export default Footer;
