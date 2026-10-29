import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/TechIcons/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
    AiFillGithub,
    AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hi There!{" "}
                                <span
                                    className="heart-icon"
                                    role="img"
                                    aria-label="Pink heart"
                                >
                                    🩷
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> SHIMAA ELMORSHEDY</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                                src={homeLogo}
                                alt="AI portfolio illustration"
                                className="img-fluid"
                                style={{ maxHeight: "450px" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Home2 />

            <Container>
                <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
                    <Col md={12} className="home-about-social">
                        <h1>Find Me On</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>

                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/shimaa-elmorshdy-253a762a9/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-colour home-social-icons"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>

                            <li className="social-icons">
                                <a
                                    href="mailto:shaimaaelmorshede@gmail.com"
                                    className="icon-colour home-social-icons"
                                    aria-label="Email"
                                >
                                    <AiOutlineMail />
                                </a>
                            </li>

                            <li className="social-icons">
                                <a
                                    href="https://github.com/Sham-coder7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-colour home-social-icons"
                                    aria-label="GitHub"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;