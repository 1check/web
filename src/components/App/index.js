import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import { withNavigation } from '../Navigation';
import { withAuthentication } from '../Session';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
        <div className="app-container">
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={withNavigation(SignUpPage)} />
            <Route path={ROUTES.SIGN_IN} component={withNavigation(SignInPage)} />
            <Route path={ROUTES.PASSWORD_FORGET} component={withNavigation(PasswordForgetPage)} />
            <Route path={ROUTES.HOME} component={withNavigation(HomePage)} />
            <Route path={ROUTES.ACCOUNT} component={withNavigation(AccountPage)} />
            <Route path={ROUTES.ADMIN} component={withNavigation(AdminPage)} />
        </div>
    </Router>
);

export default withAuthentication(App);
