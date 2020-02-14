import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './index.css';
import STRINGS from '../../assets/lang';
import * as ROUTES from '../../constants/routes';

const Footer = () => (
    <Container className="footer-container p-3" fluid>
        <Container>
            <Row className="mb-3">
                <Col><span className="footer-title">{STRINGS.app_name}</span></Col>
            </Row>
            <Row>
                <Col><Link className="footer-link" to={ROUTES.CONTACT_US}>{STRINGS.footer_contact_us}</Link></Col>
            </Row>
            <Row>
                <Col><Link className="footer-link" to={ROUTES.ABOUT_US}>{STRINGS.footer_about_us}</Link></Col>
            </Row>
        </Container>
    </Container>
);

export default Footer;
