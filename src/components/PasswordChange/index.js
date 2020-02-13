import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './index.css';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null
};

class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { passwordOne } = this.state;
        this.props.firebase.doPasswordUpdate(passwordOne).then(() => {
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
        const { passwordOne, passwordTwo, error } = this.state;
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

                <Button disabled={isInvalid} variant="primary" type="submit">Reset Password</Button>

                {error && <p className="pw-change-error mt-3">{error.message}</p>}
            </Form>
        );
    }
}

export default withFirebase(PasswordChangeForm);
