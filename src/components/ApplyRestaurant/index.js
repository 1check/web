import React from 'react';
import Container from 'react-bootstrap/Container';

import { withAuthorization } from '../Session';

const ApplyRestaurantPage = () => (
    <Container>
        <p className="mt-5">
            Apply restaurant page.
        </p>
    </Container>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(ApplyRestaurantPage);
