import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am{" "}
                        <span className="purple">Shimaa Elmorshedy</span> from{" "}
                        <span className="purple">Egypt</span>.
                        <br />
                        I am an aspiring{" "}
                        <span className="purple">AI Engineer</span> passionate about
                        Machine Learning, Deep Learning, and developing AI-powered
                        solutions to real-world problems.
                        <br />
                        I am currently studying{" "}
                        <span className="purple">
                            Computer Science and Artificial Intelligence
                        </span>{" "}
                        at Sadat City University.
                        <br />
                        <br />
                        Some of the areas I enjoy exploring include:
                    </p>

                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Machine Learning &amp; Data Analysis 📊
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Generative AI, LLMs &amp; RAG 🤖
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> NLP &amp; Computer Vision 🧠
                        </li>
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;