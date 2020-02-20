import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './index.css';
import { withAuthorization } from '../Session';
import STRINGS from '../../assets/lang';
import * as ROUTES from '../../constants/routes';

const ApplyPage = () => (
    <Container>
        <p className="mt-5">
            {STRINGS.apply_text}
        </p>
        <div className="apply-links mt-5">
            <Link className="m-5" to={ROUTES.APPLY_RESTAURANT}>{STRINGS.apply_restaurant}</Link>
            <div className="apply-divider border-left ml-5 mr-5"></div>
            <Link className="m-5" to={ROUTES.APPLY_COMPANY}>{STRINGS.apply_company}</Link>
        </div>
    </Container>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(ApplyPage);
