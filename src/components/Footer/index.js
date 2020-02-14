import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './index.css';
import * as ROUTES from '../../constants/routes';

const Footer = () => (
    <Container className="footer-container p-3" fluid>
        <Container>
            <Row className="mb-3">
                <Col><span className="footer-title">OneCheck</span></Col>
            </Row>
            <Row>
                <Col><Link className="footer-link" to={ROUTES.CONTACT_US}>Contact us</Link></Col>
            </Row>
            <Row>
                <Col><Link className="footer-link" to={ROUTES.ABOUT_US}>About us</Link></Col>
            </Row>
        </Container>
    </Container>
);

export default Footer;
