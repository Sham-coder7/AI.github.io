
import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import ExperienceTimeline from "./ExperienceTimeline";
import Education from "./Education";
import CommunityTimeline from "./CommunityTimeline";

function About() {
    return (
        <>
            <Particle />

            <Container fluid className="about-section">
                <Container>


                    {/* Professional Experience */}
                    <h1 className="project-heading" style={{ paddingBottom: "10px" }}>
                        Professional <strong className="purple">Experience</strong>
                    </h1>

                    <p style={{ color: "#d1d5db", textAlign: "center", marginBottom: "15px" }}>
                        My engineering internships, traineeships, and practical learning experiences.
                    </p>

                    <ExperienceTimeline />

                    {/* Skills */}
                    <h1 className="project-heading" style={{ paddingTop: "50px", paddingBottom: "10px" }}>
                        Professional <strong className="purple">Skillset</strong>
                    </h1>

                    <p style={{ color: "#d1d5db", textAlign: "center", marginBottom: "25px" }}>
                        Technologies, AI frameworks, and tools I use in my projects.
                    </p>

                    <Techstack />

                    {/* Education */}
                    <h1 className="project-heading" style={{ paddingTop: "40px", paddingBottom: "10px" }}>
                        Academic <strong className="purple">Education</strong>
                    </h1>

                    <Education />

                    {/* Community */}
                    <h1 className="project-heading" style={{ paddingTop: "50px", paddingBottom: "10px" }}>
                        Community &amp; <strong className="purple">Volunteering</strong>
                    </h1>

                    <p style={{ color: "#d1d5db", textAlign: "center", marginBottom: "15px" }}>
                        My community activities, volunteering, and technical experiences.
                    </p>

                    <CommunityTimeline />

                    {/* Days I Code */}
                    <div style={{ paddingTop: "35px" }}>
                        <Github />
                    </div>

                </Container>
            </Container>
        </>
    );
}

export default About;
