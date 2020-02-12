import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'

import './index.css';
import * as ROUTES from '../../constants/routes';

const Landing = () => (
    <Container className="landing-container" fluid>
        <Nav className="justify-content-end p-5">
            <Nav.Item>
                <Nav.Link className="landing-nav-link" as={NavLink} to={ROUTES.SIGN_IN}>Sign In</Nav.Link>
            </Nav.Item>
        </Nav>

        <h2 className="landing-text text-center font-weight-light">
            OneCheck, the perfect business opportunity.
            <br/>
            Get started now.
        </h2>
    </Container>
);

export default Landing;
