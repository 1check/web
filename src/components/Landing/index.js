import React from 'react';
import Container from 'react-bootstrap/Container';

import './index.css';
import Navigation, { themes } from '../Navigation';
import STRINGS from '../../assets/lang';

const Landing = () => (
    <Container className="landing-background-container" fluid>
        <Navigation theme={themes.light} />
        <h2 className="landing-text text-center font-weight-light">
            {STRINGS.landing_catch_phrase}
        </h2>
    </Container>
);

export default Landing;
