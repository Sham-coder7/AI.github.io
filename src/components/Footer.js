import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="12" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/shimaa-elmorshdy-253a762a9/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>

                        <li className="social-icons">
                            <a
                                href="mailto:shaimaaelmorshede@gmail.com"
                                style={{ color: "white" }}
                            >
                                <AiOutlineMail />
                            </a>
                        </li>

                        <li className="social-icons">
                            <a
                                href="https://github.com/Sham-coder7"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;