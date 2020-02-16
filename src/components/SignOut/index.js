import React from 'react';
import Button from 'react-bootstrap/Button';

import { withFirebase } from '../Firebase';
import '../Navigation/index.css';
import './index.css';
import STRINGS from '../../assets/lang';

const SignOutButton = ({ firebase }) => (
    <Button variant="primary" className="navigation-link sign-out-link font-weight-light" onClick={firebase.doSignOut}>{STRINGS.navigation_sign_out}</Button>
);

export default withFirebase(SignOutButton);
