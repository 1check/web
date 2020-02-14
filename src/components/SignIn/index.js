import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import './index.css';
import { withFirebase } from '../Firebase';
import { PasswordForgetLink } from '../PasswordForget'
import { SignUpLink } from '../SignUp';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
    clicked: false
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;
        this.setState({ clicked: true, error: '' });
        this.props.firebase.doSignInWithEmailAndPassword(email, password).then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
        }).catch(error => {
            this.setState({ clicked: false, error });
        });
        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error, clicked } = this.state;
        const isInvalid = password === '' || email === '';
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onChange={this.onChange} placeholder="Enter email" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={this.onChange} placeholder="Password" />
                </Form.Group>

                <Button disabled={isInvalid} variant="primary" type="submit">
                    Sign In
                    {clicked && <Spinner as="span" animation="grow" size="sm" />}
                </Button>
                {error && <p className="sign-in-error mt-3">{error.message}</p>}
            </Form>
        );
    }
}

const SignInForm = withRouter(withFirebase(SignInFormBase));

const SignInPage = () => (
    <Container className="sign-in-card">
        <Jumbotron className="shadow bg-white rounded mt-5">
            <h2 className="mb-3">Sign In</h2>
            <SignInForm />
            <div className="mb-4" />
            <PasswordForgetLink />
            <SignUpLink />
        </Jumbotron>
    </Container>
);

const SignInLink = () => (
    <p>
        Alread have an account? <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </p>
);

export default SignInPage;

export { SignInForm, SignInLink };
