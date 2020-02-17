import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import { withNavigation, themes } from '../Navigation';
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
            <Route path={ROUTES.SIGN_UP} component={withNavigation(SignUpPage, themes.dark)} />
            <Route path={ROUTES.SIGN_IN} component={withNavigation(SignInPage, themes.dark)} />
            <Route path={ROUTES.PASSWORD_FORGET} component={withNavigation(PasswordForgetPage, themes.dark)} />
            <Route path={ROUTES.HOME} component={withNavigation(HomePage, themes.dark)} />
            <Route path={ROUTES.ACCOUNT} component={withNavigation(AccountPage, themes.dark)} />
            <Route path={ROUTES.ADMIN} component={withNavigation(AdminPage, themes.dark)} />
        </div>
    </Router>
);

export default withAuthentication(App);
