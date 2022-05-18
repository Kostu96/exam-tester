import React, { Component } from 'react';
import styled from 'styled-components';

const PageFooter = styled.footer`
    padding: 5px;
    margin-top: 80px;
    background-color: #202426;
    font-size: 14px;
    line-height: 150%

    @media (max-width: 600px) {
        font-size: 12px;
    }
`;

class Footer extends Component {
    render() {
        return(
            <PageFooter>
                <i>Ostatnia aktualizacja: 19-05-2022</i>
                <br />
                <b>Konstanty Misiak &copy; 2019 - 2022</b>
            </PageFooter>
        );
    }
}

export default Footer;
