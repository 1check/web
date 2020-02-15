import React from 'react';

import { withAuthorization } from '../Session';

const HomePage = (props) => (
    <div>
        <h1>Account: {props.authUser.email}</h1>
    </div>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);
