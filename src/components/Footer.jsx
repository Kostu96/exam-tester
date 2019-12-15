import React, { Component } from 'react';
import styled from 'styled-components';

const PageFooter = styled.footer`
    padding: 5px;
    margin-top: 10px;
    background-color: #222628;
    font-size: 16px;

    @media (max-width: 600px) {
        font-size: 13px;
    }
`;

class Footer extends Component {
    render() {
        return(
            <PageFooter>v2.0.0 Konstanty Misiak &copy; 2019</PageFooter>
        );
    }
}

export default Footer;
