import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './index.css';
import { SignInLink } from '../SignIn';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, passwordOne } = this.state;
        this.props.firebase.doCreateUserWithEmailAndPassword(email, passwordOne).then(authUser => {
            return this.props.firebase.user(authUser.user.uid).set({ email });
        }).then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
        }).catch(error => {
            this.setState({ error });
        });
        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            email,
            passwordOne,
            passwordTwo,
            error
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '';

        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onChange={this.onChange} placeholder="Enter email" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="passwordOne" onChange={this.onChange} placeholder="Password" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="passwordTwo" onChange={this.onChange} placeholder="Confirm Password" />
                    </Form.Group>
                </Form.Row>

                <Button disabled={isInvalid} variant="primary" type="submit">Sign Up</Button>
                {error && <p className="sign-up-error mt-3">{error.message}</p>}
            </Form>
        );
    }
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

const SignUpPage = () => (
    <Container className="sign-up-card">
        <div className="mb-5" />
        <Jumbotron className="shadow bg-white rounded">
            <h2 className="mb-3">Sign Up</h2>
            <SignUpForm />
            <div className="mb-4" />
            <SignInLink />
        </Jumbotron>
    </Container>
);

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };
