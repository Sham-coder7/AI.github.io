import React from "react";
import { Row, Col } from "react-bootstrap";
import {
    FaGraduationCap,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaBookOpen,
} from "react-icons/fa";
import sadatLogo from "../../Assets/TechIcons/sadat-city-logo.jpeg";
const coursework = [
    "Object-Oriented Programming (OOP)",
    "Data Structures & Algorithms",
    "Databases",
    "Software Engineering",
    "Artificial Intelligence (AI)",
    "Machine Learning (ML)",
    "Deep Learning (DL)",
    "Computer Vision",
    "Natural Language Processing (NLP)",
    "Data Analysis",
];

function Education() {
    return (
        <div className="education-card">
            <Row className="align-items-center">
                <Col md={3} className="education-logo-container">
                    <img
                        src={sadatLogo}
                        alt="Sadat City University logo"
                        className="education-logo-img img-fluid"
                    />
                </Col>

                <Col md={9} style={{ paddingLeft: "25px" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom: "8px",
                        }}
                    >
                        <FaGraduationCap
                            style={{ fontSize: "1.6em", color: "#c770f0" }}
                        />
                        <h3
                            style={{
                                fontSize: "1.35em",
                                fontWeight: "700",
                                color: "#ffffff",
                                margin: 0,
                            }}
                        >
                            B.Sc. in Computer Science and Artificial Intelligence
                        </h3>
                    </div>

                    <h5
                        style={{
                            color: "#c770f0",
                            fontWeight: "600",
                            marginBottom: "12px",
                            fontSize: "1.05em",
                        }}
                    >
                        Sadat City University
                    </h5>

                    <div className="timeline-meta" style={{ marginBottom: "14px" }}>
                        <span className="timeline-badge">
                            <FaCalendarAlt style={{ fontSize: "0.85em" }} /> 2023 – 2027
                        </span>

                        <span className="timeline-badge">
                            <FaMapMarkerAlt style={{ fontSize: "0.85em" }} /> Sadat City, Egypt
                        </span>

                        <span
                            className="timeline-badge"
                            style={{
                                background: "rgba(34, 197, 94, 0.15)",
                                borderColor: "rgba(34, 197, 94, 0.4)",
                                color: "#86efac",
                            }}
                        >
                            Currently Studying
                        </span>
                    </div>

                    <p
                        style={{
                            color: "#d1d5db",
                            fontSize: "0.93em",
                            lineHeight: "1.6",
                            marginBottom: "10px",
                        }}
                    >
                        Studying computer science fundamentals and developing practical
                        skills in Artificial Intelligence, Machine Learning, and data-driven
                        applications through coursework and hands-on projects.
                    </p>

                    <div className="education-course-tags">
                        {coursework.map((course, idx) => (
                            <span key={idx} className="education-course-tag">
                                <FaBookOpen
                                    style={{ fontSize: "0.75em", color: "#c770f0" }}
                                />{" "}
                                {course}
                            </span>
                        ))}
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Education;