import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main>
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1 class="hero-title">
                Hi, I'm <span class="highlight">Arvind Kumar Singh Raghav</span><br>
                Full-Stack Developer
              </h1>
              <p class="hero-description">
                I create amazing web applications with modern technologies. 
                Specialized in MEAN stack development with 5+ years of experience 
                delivering high-quality solutions for clients worldwide.
              </p>
              <div class="hero-buttons">
                <a routerLink="/contact" class="btn btn-primary">Get In Touch</a>
                <a routerLink="/about" class="btn btn-secondary">Learn More</a>
              </div>
              <div class="hero-stats">
                <div class="stat">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div class="stat">
                  <h3>30+</h3>
                  <p>Happy Clients</p>
                </div>
                <div class="stat">
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
            <div class="hero-image">
              <img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Professional Developer" />
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Services -->
      <section class="section featured-services">
        <div class="container">
          <h2 class="section-title">What I Do Best</h2>
          <div class="services-grid">
            <div class="service-card card">
              <div class="service-icon">🌐</div>
              <h3>Web Development</h3>
              <p>Full-stack web applications using MEAN stack, React, and modern frameworks.</p>
            </div>
            <div class="service-card card">
              <div class="service-icon">📱</div>
              <h3>Mobile Apps</h3>
              <p>Cross-platform mobile applications using React Native and Ionic frameworks.</p>
            </div>
            <div class="service-card card">
              <div class="service-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>Beautiful, user-friendly interfaces with modern design principles and accessibility.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Recent Work -->
      <section class="section recent-work">
        <div class="container">
          <h2 class="section-title">Recent Projects</h2>
          <div class="projects-grid">
            <div class="project-card card">
              <img src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600" alt="E-commerce Platform" />
              <div class="project-content">
                <h3>E-commerce Platform</h3>
                <p>Full-featured online store with payment integration, inventory management, and admin dashboard.</p>
                <div class="project-tech">
                  <span>Angular</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
            <div class="project-card card">
              <img src="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Task Management App" />
              <div class="project-content">
                <h3>Task Management App</h3>
                <p>Collaborative project management tool with real-time updates, team collaboration, and analytics.</p>
                <div class="project-tech">
                  <span>React</span>
                  <span>Express</span>
                  <span>Socket.io</span>
                </div>
              </div>
            </div>
            <div class="project-card card">
              <img src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Healthcare Dashboard" />
              <div class="project-content">
                <h3>Healthcare Dashboard</h3>
                <p>Medical dashboard for patient management, appointment scheduling, and health analytics.</p>
                <div class="project-tech">
                  <span>Vue.js</span>
                  <span>Python</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
          <div class="cta-section">
            <a routerLink="/contact" class="btn btn-primary">View All Projects</a>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, var(--bg-gray-light) 0%, rgba(20, 168, 0, 0.05) 100%);
      padding: 4rem 0;
      min-height: 80vh;
      display: flex;
      align-items: center;
    }
    
    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }
    
    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1.5rem;
      color: var(--text-dark);
    }
    
    .highlight {
      color: var(--primary-green);
    }
    
    .hero-description {
      font-size: 1.25rem;
      color: var(--text-gray);
      margin-bottom: 2rem;
      line-height: 1.6;
    }
    
    .hero-buttons {
      display: flex;
      gap: 1rem;
      margin-bottom: 3rem;
    }
    
    .hero-stats {
      display: flex;
      gap: 2rem;
    }
    
    .stat h3 {
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-green);
      margin-bottom: 0.5rem;
    }
    
    .stat p {
      color: var(--text-gray);
      font-size: 0.875rem;
    }
    
    .hero-image {
      text-align: center;
    }
    
    .hero-image img {
      width: 100%;
      max-width: 400px;
      border-radius: 2rem;
      box-shadow: var(--shadow-xl);
    }
    
    .featured-services {
      background: var(--bg-white);
    }
    
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .service-card {
      text-align: center;
    }
    
    .service-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .service-card h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--text-dark);
    }
    
    .service-card p {
      color: var(--text-gray);
      line-height: 1.6;
    }
    
    .recent-work {
      background: var(--bg-gray-light);
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }
    
    .project-card {
      overflow: hidden;
      padding: 0;
    }
    
    .project-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    
    .project-content {
      padding: 1.5rem;
    }
    
    .project-content h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--text-dark);
    }
    
    .project-content p {
      color: var(--text-gray);
      margin-bottom: 1rem;
      line-height: 1.5;
    }
    
    .project-tech {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    
    .project-tech span {
      background: var(--primary-green);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.75rem;
      font-weight: 500;
    }
    
    .cta-section {
      text-align: center;
    }
    
    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }
      
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-description {
        font-size: 1.1rem;
      }
      
      .hero-buttons {
        justify-content: center;
        flex-wrap: wrap;
      }
      
      .hero-stats {
        justify-content: center;
      }
      
      .services-grid,
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent {}