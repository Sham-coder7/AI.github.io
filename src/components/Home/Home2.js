import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>

                        <p className="home-about-body">
                            I am an aspiring{" "}
                            <b className="purple">AI Engineer</b> passionate about
                            building intelligent solutions to real-world problems.
                            <br />
                            <br />
                            My technical interests include{" "}
                            <i>
                                <b className="purple">
                                    Python, Machine Learning, Deep Learning, and Data Analysis
                                </b>
                            </i>
                            , along with exploring{" "}
                            <i>
                                <b className="purple">
                                    Generative AI, Large Language Models (LLMs), RAG, and NLP
                                </b>
                            </i>
                            .
                            <br />
                            <br />
                            I enjoy working on practical AI projects, learning new
                            technologies, and turning data into useful insights and
                            intelligent applications.
                            <br />
                            <br />
                            I am currently pursuing my studies in{" "}
                            <b className="purple">
                                Computer Science and Artificial Intelligence
                            </b>{" "}
                            at Sadat City University and continuously developing my
                            skills through training and hands-on projects.
                        </p>
                    </Col>

                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={myImg}
                                className="img-fluid"
                                alt="AI portfolio avatar"
                                style={{
                                    borderRadius: "50%",
                                    border: "4px solid #c770f0",
                                    boxShadow: "0 0 30px rgba(199, 112, 240, 0.45)",
                                    maxWidth: "280px",
                                    width: "100%",
                                    aspectRatio: "1/1",
                                    objectFit: "cover",
                                }}
                            />
                        </Tilt>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home2;