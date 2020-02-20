import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import './index.css';
import { SignInLink } from '../SignIn';
import { withFirebase } from '../Firebase';
import STRINGS from '../../assets/lang';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
    clicked: false
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, passwordOne } = this.state;
        this.setState({ clicked: true });
        this.props.firebase.doCreateUserWithEmailAndPassword(email, passwordOne).then(authUser => {
            return this.props.firebase.user(authUser.user.uid).set({ email, hasApplied: false });
        }).then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.APPLY);
        }).catch(error => {
            this.setState({ error, clicked: false });
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
            error,
            clicked
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '';

        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Label>{STRINGS.sign_up_email_label}</Form.Label>
                    <Form.Control type="email" name="email" onChange={this.onChange} placeholder={STRINGS.sign_up_email_hint} />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>{STRINGS.sign_up_password_label}</Form.Label>
                        <Form.Control type="password" name="passwordOne" onChange={this.onChange} placeholder={STRINGS.sign_up_password_hint} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>{STRINGS.sign_up_confirm_password_label}</Form.Label>
                        <Form.Control type="password" name="passwordTwo" onChange={this.onChange} placeholder={STRINGS.sign_up_confirm_password_hint} />
                    </Form.Group>
                </Form.Row>

                <Button disabled={isInvalid} variant="primary" type="submit">
                    {STRINGS.sign_up_button}
                    {clicked && <Spinner as="span" animation="grow" size="sm" />}
                </Button>
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
            <h2 className="mb-3">{STRINGS.sign_up_title}</h2>
            <SignUpForm />
            <div className="mb-4" />
            <SignInLink />
        </Jumbotron>
    </Container>
);

const SignUpLink = () => (
    <p>
        {STRINGS.sign_up_link_part1} <Link to={ROUTES.SIGN_UP}>{STRINGS.sign_up_link_part2}</Link>
    </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };
