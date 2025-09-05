import React from "react";

const Footer = () => (
    <footer className="bg-dark text-white py-4 mt-auto">
        <div className="container text-center">
            <p className="mb-1">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            <ul className="list-inline mb-0">
                <li className="list-inline-item">
                    <a href="https://github.com/" className="text-white" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github"></i> GitHub
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="https://linkedin.com/" className="text-white" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i> LinkedIn
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="mailto:your.email@example.com" className="text-white">
                        <i className="bi bi-envelope"></i> Email
                    </a>
                </li>
            </ul>
        </div>
    </footer>
);

export default Footer;