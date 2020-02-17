import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import './index.css';
import themes from './themes';
import { AuthUserContext } from '../Session';
import LangDropDown from '../LangDropDown';
import SignOutLink from '../SignOut';
import STRINGS from '../../assets/lang';
import * as ROUTES from '../../constants/routes';

const setTheme = props => {
    const theme = props.theme ? props.theme : themes.light;
    Object.keys(theme).forEach(key => {
        document.documentElement.style.setProperty(key, theme[key]);
    });
};

const BrandLink = () => (
    <Nav.Item className="mr-auto">
        <Nav.Link className="navigation-brand" as={NavLink} to={ROUTES.LANDING}>{STRINGS.app_name}</Nav.Link>
    </Nav.Item>
);

const NavigationAuth = () => (
    <Nav className="justify-content-end">
        <BrandLink />
        <Nav.Item>
            <LangDropDown className="navigation-link" />
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className="navigation-link" as={NavLink} to={ROUTES.HOME}>{STRINGS.navigation_home}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className="navigation-link" as={NavLink} to={ROUTES.ACCOUNT}>{STRINGS.navigation_account}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <SignOutLink className="navigation-link" />
        </Nav.Item>
    </Nav>
);

const NavigationNonAuth = () => (
    <Nav className="justify-content-end">
        <BrandLink />
        <Nav.Item>
            <LangDropDown className="navigation-link" />
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className="navigation-link" as={NavLink} to={ROUTES.SIGN_IN}>{STRINGS.navigation_sign_in}</Nav.Link>
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
