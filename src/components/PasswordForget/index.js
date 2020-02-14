import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import './index.css';
import { withFirebase } from '../Firebase';
import STRINGS from '../../assets/lang';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
    email: '',
    error: null,
    success: null,
    clicked: false
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email } = this.state;
        this.setState({ clicked: true });
        this.props.firebase.doPasswordReset(email).then(() => {
            const state = { ...INITIAL_STATE };
            state.success = STRINGS.password_forget_done;
            this.setState(state);
        }).catch(error => {
            this.setState({ error, clicked: false });
        });
        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, error, success, clicked } = this.state;
        const isInvalid = email === '';
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Label>{STRINGS.password_forget_email_label}</Form.Label>
                    <Form.Control type="email" name="email" onChange={this.onChange} placeholder={STRINGS.password_forget_email_hint} />
                </Form.Group>

                <Button disabled={isInvalid} variant="primary" type="submit">
                    {STRINGS.password_forget_recover_button}
                    {clicked && <Spinner as="span" animation="grow" size="sm" />}
                </Button>

                {error && <p className="pw-forget-error mt-3">{error.message}</p>}
                {success && <p className="mt-3">{success}</p>}
            </Form>
        );
    }
}

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

const PasswordForgetPage = () => (
    <Container className="pw-forget-card">
        <Jumbotron className="shadow bg-white rounded mt-5">
            <h2 className="mb-3">{STRINGS.password_forget_title}</h2>
            <PasswordForgetForm />
        </Jumbotron>
    </Container>
);

const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>{STRINGS.password_forget_link}</Link>
    </p>
);

export { PasswordForgetForm, PasswordForgetLink };

export default PasswordForgetPage;
