import React from 'react';
import Nav from 'react-bootstrap/Nav';

import { withFirebase } from '../Firebase';
import './index.css';
import STRINGS from '../../assets/lang';

const SignOutLink = (props) => (
    <Nav.Link className={`${props.className} sign-out-link`} onClick={props.firebase.doSignOut}>{STRINGS.navigation_sign_out}</Nav.Link>
);

export default withFirebase(SignOutLink);
