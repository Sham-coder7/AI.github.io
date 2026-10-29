
import React from "react";
import {
    FaBriefcase,
    FaRobot,
    FaLaptopCode,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaBuilding,
} from "react-icons/fa";

function ExperienceTimeline() {
    const experiences = [
        {
            role: "IT Trainee",
            company: "Evergrow for Specialty Fertilizers",
            date: "26 July – 27 August 2026",
            location: "Egypt",
            icon: <FaBuilding />,
            points: [
                "Completed practical training in the IT department.",
                "Gained hands-on exposure to IT infrastructure, networking, and troubleshooting.",
                "Explored network equipment, ERP/SAP systems, and remote support tools.",
                "Learned about network security solutions, including Kaspersky and Fortinet.",
            ],
        },
        {
            role: "NLP Trainee",
            company: "National Telecommunication Institute (NTI)",
            date: "30 August – 30 September 2026",
            location: "Egypt",
            icon: <FaRobot />,
            points: [
                "Received practical training in Natural Language Processing (NLP) and related AI technologies.",
                "Developed knowledge of text processing and machine learning techniques through hands-on learning.",
            ],
        },
        {
            role: "Machine Learning Trainee",
            company: "Digital Egypt Youth Initiative — NTI",
            date: "7 January – 23 February 2026",
            location: "Egypt",
            icon: <FaLaptopCode />,
            points: [
                "Completed technical training in Machine Learning for Data Analysis.",
                "Studied data preparation, analysis, and machine learning concepts through practical exercises.",
            ],
        },
        {
            role: "Backend .NET Trainee",
            company: "Information Technology Institute (ITI)",
            date: "9 July – 23 August 2026",
            location: "Egypt",
            icon: <FaBriefcase />,
            points: [
                "Received introductory practical training in backend development using .NET technologies.",
                "Developed familiarity with backend programming concepts and application development workflows.",
            ],
        },
    ];

    return (
        <div className="timeline-container">
            <div className="timeline-line"></div>

            {experiences.map((exp, index) => (
                <div className="timeline-item" key={index}>
                    <div className="timeline-dot">{exp.icon}</div>

                    <div className="timeline-card">
                        <div className="timeline-header-row">
                            <div>
                                <div className="timeline-role">{exp.role}</div>
                                <div className="timeline-company">{exp.company}</div>
                            </div>

                            <div className="timeline-meta">
                                <span className="timeline-badge">
                                    <FaCalendarAlt style={{ fontSize: "0.85em" }} />{" "}
                                    {exp.date}
                                </span>

                                <span className="timeline-badge">
                                    <FaMapMarkerAlt style={{ fontSize: "0.85em" }} />{" "}
                                    {exp.location}
                                </span>
                            </div>
                        </div>

                        <ul className="timeline-desc">
                            {exp.points.map((point, pIdx) => (
                                <li key={pIdx}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ExperienceTimeline;
