
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
    return (
        <Row
            style={{
                justifyContent: "center",
                paddingBottom: "30px",
                color: "white",
                textAlign: "center",
            }}
        >
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Days I <strong className="purple">Code</strong>
            </h1>

            <p
                style={{
                    color: "#d1d5db",
                    marginBottom: "25px",
                }}
            >
                My GitHub contribution activity.
            </p>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    overflowX: "auto",
                    padding: "10px 0",
                }}
            >
                <GitHubCalendar
                    username="Sham-coder7"
                    blockSize={13}
                    blockMargin={4}
                    fontSize={13}
                    color="#c084f5"
                />
            </div>
        </Row>
    );
}

export default Github;
