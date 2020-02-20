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
import ApplyPage from '../Apply';
import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
        <div className="app-container">
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={withNavigation(SignUpPage, themes.light)} />
            <Route path={ROUTES.SIGN_IN} component={withNavigation(SignInPage, themes.light)} />
            <Route path={ROUTES.PASSWORD_FORGET} component={withNavigation(PasswordForgetPage, themes.light)} />
            <Route path={ROUTES.HOME} component={withNavigation(HomePage, themes.light)} />
            <Route path={ROUTES.ACCOUNT} component={withNavigation(AccountPage, themes.light)} />
            <Route path={ROUTES.ADMIN} component={withNavigation(AdminPage, themes.light)} />
            <Route path={ROUTES.APPLY} component={withNavigation(ApplyPage, themes.light)} />
        </div>
    </Router>
);

export default withAuthentication(App);
