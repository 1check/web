import React from 'react';
import Container from 'react-bootstrap/Container';

import './index.css';
import { NavigationBar } from '../Navigation';
import STRINGS from '../../assets/lang';

const Landing = () => (
    <Container className="landing-background-container" fluid>
        <NavigationBar />
        <h2 className="landing-text text-center font-weight-light">
            {STRINGS.landing_catch_phrase}
        </h2>
    </Container>
);

export default Landing;
