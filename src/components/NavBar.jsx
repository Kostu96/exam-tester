import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const CustomNav = styled.nav`
    padding: 8px 0;
`;

const InternalLink = styled(Link)`
    text-decoration: none;
    color: whitesmoke;
    padding: 10px;
    display: inline-block;

    &:hover {
        background-color: #403846;
        cursor: pointer;
    }
`;

const ExternalLink = styled.a`
    text-decoration: none;
    color: whitesmoke;
    padding: 10px;
    display: inline-block;

    &:hover {
        background-color: #403846;
        cursor: pointer;
    }
`;

class NavBar extends Component {
    render() {
        return(
            <CustomNav>
                <InternalLink to="/">Strona Główna</InternalLink>
                <InternalLink to="/question_db">Baza Pytań</InternalLink>
                <ExternalLink
                    href="https://github.com/Kostu96/exam-tester"
                    target="_blank"
                >
                    GitHub
                </ExternalLink>
                <hr />
            </CustomNav>
        );
    }
}

export default NavBar;
