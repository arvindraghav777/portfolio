import React from 'react';

const projects = [
    {
        title: 'E-commerce Website',
        description: 'Developed a full-stack e-commerce platform with payment integration and admin dashboard.',
        link: 'https://example-ecommerce.com',
    },
    {
        title: 'Portfolio Website',
        description: 'Designed and built a responsive portfolio website for a graphic designer.',
        link: 'https://example-portfolio.com',
    },
    {
        title: 'Blog Platform',
        description: 'Created a blog platform with user authentication and content management features.',
        link: 'https://example-blog.com',
    },
];

const Projects = () => (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
        <h1>Freelancer Projects</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {projects.map((project, idx) => (
                <li key={idx} style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default Projects;