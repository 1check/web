import React from 'react';
import Container from 'react-bootstrap/Container';

import { withAuthorization } from '../Session';

const ApplyCompanyPage = () => (
    <Container>
        <p className="mt-5">
            Apply company page.
        </p>
    </Container>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(ApplyCompanyPage);
