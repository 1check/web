import React from 'react';
import Button from 'react-bootstrap/Button';
import { withFirebase } from '../Firebase';
import '../Navigation/index.css';
import './index.css';

const SignOutButton = ({ firebase }) => (
    <Button variant="link" className="navigation-link sign-out-link font-weight-light" onClick={firebase.doSignOut}>Sign Out</Button>
);

export default withFirebase(SignOutButton);
