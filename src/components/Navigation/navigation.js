import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './index.css';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

const NavigationAuth = () => (
    <Nav className="justify-content-end p-5">
        <Nav.Item>
            <Nav.Link className="navigation-link font-weight-light" as={NavLink} to={ROUTES.LANDING}>Landing</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className="navigation-link font-weight-light" as={NavLink} to={ROUTES.HOME}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className="navigation-link font-weight-light" as={NavLink} to={ROUTES.ACCOUNT}>Account</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <SignOutButton />
        </Nav.Item>
    </Nav>
);

const NavigationNonAuth = () => (
    <Nav className="justify-content-end p-5">
        <Nav.Item>
            <Nav.Link className="navigation-link font-weight-light" as={NavLink} to={ROUTES.SIGN_IN}>Sign In</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className="navigation-link font-weight-light" as={NavLink} to={ROUTES.LANDING}>Landing</Nav.Link>
        </Nav.Item>
    </Nav>
);

const Navigation = () => (
    <Container fluid>
        <AuthUserContext.Consumer>
            { authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth /> }
        </AuthUserContext.Consumer>
    </Container>
);

export default Navigation;
