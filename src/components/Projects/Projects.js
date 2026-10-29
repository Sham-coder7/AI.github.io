
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import cairoCareImg from "../../Assets/Projects/cairo_care.PNG";
import imsAiImg from "../../Assets/Projects/ims-ai-assistant.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />

            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works</strong>
                </h1>

                <p style={{ color: "white" }}>
                    AI solutions and software projects I've worked on.
                </p>

                <Row
                    style={{
                        justifyContent: "center",
                        paddingBottom: "10px",
                    }}
                >
                    {/* Cairo Care Project */}
                    <Col md={6} className="project-card">
                        <ProjectCard
                            imgPath={cairoCareImg}
                            title="Cairo Care — AI RAG Assistant"
                            description="An AI assistant project focused on healthcare information and retrieval-augmented generation (RAG). Explore the repository to learn more about its implementation."
                            ghLink="https://github.com/Sham-coder7/Cairo_Care"
                        />
                    </Col>

                    {/* IMS Portal Project */}
                    <Col md={6} className="project-card">
                        <ProjectCard
                            imgPath={imsAiImg}
                            title="IMS Portal — Inventory Management System"
                            description="An inventory management system project. Visit the GitHub repository to explore its features and implementation."
                            ghLink="https://github.com/Sham-coder7/IMS-Portal"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
