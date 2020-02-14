import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import './index.css';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
    success: null,
    clicked: false
};

class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { passwordOne } = this.state;
        this.setState({ clicked: true });
        this.props.firebase.doPasswordUpdate(passwordOne).then(() => {
            const state = { ...INITIAL_STATE };
            state.success = 'Password has been changed!';
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
        const { passwordOne, passwordTwo, error, success, clicked } = this.state;
        const isInvalid = passwordOne !== passwordTwo || passwordOne === '';
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Label>New password</Form.Label>
                    <Form.Control type="password" name="passwordOne" onChange={this.onChange} placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm new password</Form.Label>
                    <Form.Control type="password" name="passwordTwo" onChange={this.onChange} placeholder="Confirm password" />
                </Form.Group>

                <Button disabled={isInvalid} variant="primary" type="submit">
                    Reset Password
                    {clicked && <Spinner as="span" animation="grow" size="sm" />}
                </Button>

                {error && <p className="pw-change-error mt-3">{error.message}</p>}
                {success && <p className="mt-3">{success}</p>}
            </Form>
        );
    }
}

export default withFirebase(PasswordChangeForm);
