import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Aspiring AI Engineer",
                    "Machine Learning Enthusiast",
                    "Generative AI & LLMs",
                    "NLP & RAG Projects",
                    "Computer Vision",
                    "Data Analysis",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;