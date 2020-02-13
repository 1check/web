import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './index.css';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
    email: '',
    error: null
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email } = this.state;
        this.props.firebase.doPasswordReset(email).then(() => {
            this.setState({ ...INITIAL_STATE });
        }).catch(error => {
            this.setState({ error });
        });
        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, error } = this.state;
        const isInvalid = email === '';
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onChange={this.onChange} placeholder="Enter email" />
                </Form.Group>

                <Button disabled={isInvalid} variant="primary" type="submit">Recover password</Button>

                {error && <p className="pw-forget-error mt-3">{error.message}</p>}
            </Form>
        );
    }
}

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

const PasswordForgetPage = () => (
    <Container className="pw-forget-card">
        <Jumbotron className="shadow bg-white rounded mt-5">
            <h2 className="mb-3">Forgot password?</h2>
            <PasswordForgetForm />
        </Jumbotron>
    </Container>
);

const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
);

export { PasswordForgetForm, PasswordForgetLink };

export default PasswordForgetPage;
