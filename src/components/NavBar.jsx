import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

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

// const InactiveLink = styled(InternalLink)`
//     color: grey;
// 
//     &:hover {
//         background-color: #403846;
//         cursor: not-allowed;
//     }
// `;

class NavBar extends Component {
    render() {
        return(
            <CustomNav>
                <InternalLink to="/">Strona Główna</InternalLink>
                <ExternalLink
                    href="https://github.com/Kostu96/exam-tester"
                    target="_blank"
                >
                    GitHub
                </ExternalLink>
                <InternalLink to="/changelog">Changelog</InternalLink>
                <hr />
            </CustomNav>
        );
    }
}

export default NavBar;
