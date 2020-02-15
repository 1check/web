import React from 'react';

import { withAuthorization } from '../Session';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = (props) => (
    <div>
        <h1>Account: {props.authUser.email}</h1>
        <PasswordChangeForm />
    </div>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);
