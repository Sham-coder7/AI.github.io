import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiPython,
    SiTensorflow,
    SiKeras,
    SiOpencv,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiPytorch,
    SiGit,
    SiMysql,
    SiStreamlit,
} from "react-icons/si";

function Techstack() {
    const skills = [
        { name: "Python", icon: <SiPython /> },
        { name: "Machine Learning", icon: <SiScikitlearn /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Keras", icon: <SiKeras /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "OpenCV", icon: <SiOpencv /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "SQL", icon: <SiMysql /> },
        { name: "Git", icon: <SiGit /> },
        { name: "Streamlit", icon: <SiStreamlit /> },
    ];

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {skills.map((skill, index) => (
                <Col xs={4} md={2} className="tech-icons" key={index}>
                    <span style={{ fontSize: "28px" }}>{skill.icon}</span>
                    <div className="tech-icons-text">{skill.name}</div>
                </Col>
            ))}
        </Row>
    );
}

export default Techstack;