import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import './index.css';
import { NavigationBar } from '../Navigation';
import LangDropDown from '../LangDropDown';
import STRINGS from '../../assets/lang';
import * as ROUTES from '../../constants/routes';

const Landing = () => (
    <Container className="landing-background-container" fluid>
        <NavigationBar />
        <h2 className="landing-text text-center font-weight-light">
            {STRINGS.landing_catch_phrase}
        </h2>
    </Container>
);

export default Landing;
