import React from "react";

const About = () => (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <h1 className="mb-4">About Me</h1>
                <p>
                    Hello! I'm Avi, a passionate full-stack developer with experience in building web applications using the MERN stack. I love creating user-friendly and efficient solutions that solve real-world problems.
                </p>
                <h3 className="mt-4">Skills</h3>
                <ul>
                    <li>JavaScript (ES6+), React, Node.js, Express</li>
                    <li>MongoDB, SQL</li>
                    <li>Bootstrap, CSS3, HTML5</li>
                    <li>REST APIs, Git & GitHub</li>
                </ul>
                <h3 className="mt-4">Interests</h3>
                <p>
                    Apart from coding, I enjoy reading tech blogs, exploring new frameworks, and contributing to open-source projects.
                </p>
            </div>
        </div>
    </div>
);

export default About;