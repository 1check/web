import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import './index.css';
import themes from './themes';
import { AuthUserContext } from '../Session';
import LangDropDown from '../LangDropDown';
import SignOutButton from '../SignOut';
import STRINGS from '../../assets/lang';
import * as ROUTES from '../../constants/routes';

const setTheme = props => {
    const theme = props.theme ? props.theme : themes.light;
    Object.keys(theme).forEach(key => {
        const value = theme[key];
        console.log(document.documentElement);
        document.documentElement.style.setProperty(key, value);
    });
};

const BrandLink = () => (
    <Nav.Item className="mr-auto">
        <Nav.Link className="navigation-brand font-weight-light" as={NavLink} to={ROUTES.LANDING}>{STRINGS.app_name}</Nav.Link>
    </Nav.Item>
);

const NavigationAuth = () => (
    <Nav className="justify-content-end p-3">
        <BrandLink />
        <Nav.Item>
            <LangDropDown />
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className="navigation-link font-weight-light" as={NavLink} to={ROUTES.HOME}>{STRINGS.navigation_home}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className="navigation-link font-weight-light" as={NavLink} to={ROUTES.ACCOUNT}>{STRINGS.navigation_account}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <SignOutButton />
        </Nav.Item>
    </Nav>
);

const NavigationNonAuth = () => (
    <Nav className="justify-content-end p-3">
        <BrandLink />
        <Nav.Item>
            <LangDropDown />
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className="navigation-link font-weight-light" as={NavLink} to={ROUTES.SIGN_IN}>{STRINGS.navigation_sign_in}</Nav.Link>
        </Nav.Item>
    </Nav>
);

const Navigation = (props) => {
    setTheme(props);
    return (
        <Container className="navigation-container" fluid>
            <AuthUserContext.Consumer>
                { authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth /> }
            </AuthUserContext.Consumer>
        </Container>
    );
}

export default Navigation;
