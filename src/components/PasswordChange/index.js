import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import './index.css';
import { withFirebase } from '../Firebase';
import STRINGS from '../../assets/lang';

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
            state.success = STRINGS.password_change_done;
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
                    <Form.Label>{STRINGS.password_change_password_label}</Form.Label>
                    <Form.Control type="password" name="passwordOne" onChange={this.onChange} placeholder={STRINGS.password_change_password_hint} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>{STRINGS.password_change_confirm_password_label}</Form.Label>
                    <Form.Control type="password" name="passwordTwo" onChange={this.onChange} placeholder={STRINGS.password_change_confirm_password_hint} />
                </Form.Group>

                <Button disabled={isInvalid} variant="primary" type="submit">
                    {STRINGS.password_change_button}
                    {clicked && <Spinner as="span" animation="grow" size="sm" />}
                </Button>

                {error && <p className="pw-change-error mt-3">{error.message}</p>}
                {success && <p className="mt-3">{success}</p>}
            </Form>
        );
    }
}

export default withFirebase(PasswordChangeForm);
