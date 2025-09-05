import React from "react";

const Home = () => (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1>Hi, I'm Alex Doe</h1>
            <h2>PHP & Laravel Freelancer</h2>
            <p>
                Crafting robust web applications with clean, maintainable code. Let's build your next big idea together!
            </p>
        </header>
        <section style={{ marginBottom: "2rem" }}>
            <h3>About Me</h3>
            <p>
                With over 5 years of experience in PHP and Laravel, I specialize in developing scalable, secure, and high-performance web solutions. I am passionate about delivering quality work and exceeding client expectations.
            </p>
        </section>
        <section style={{ marginBottom: "2rem" }}>
            <h3>Services</h3>
            <ul>
                <li>Custom Laravel Web Application Development</li>
                <li>API Development & Integration</li>
                <li>Website Maintenance & Optimization</li>
                <li>Bug Fixing & Troubleshooting</li>
                <li>Database Design & Management</li>
            </ul>
        </section>
        <section>
            <h3>Contact</h3>
            <p>
                Ready to start your project? <br />
                <strong>Email:</strong> alexdoe@example.com <br />
                <strong>LinkedIn:</strong> linkedin.com/in/alexdoe
            </p>
        </section>
    </div>
);

export default Home;