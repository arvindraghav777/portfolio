import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main>
      <!-- About Hero -->
      <section class="about-hero section">
        <div class="container">
          <div class="about-content">
            <div class="about-text">
              <h1>About Me</h1>
              <p class="lead">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital solutions that make a difference. My journey in web development started 
                with a curiosity for how things work behind the scenes.
              </p>
              <p>
                Today, I specialize in the MEAN stack (MongoDB, Express.js, Angular, Node.js) 
                and have expanded my expertise to include React, Vue.js, and modern cloud technologies. 
                I believe in writing clean, maintainable code and creating user experiences that 
                truly matter.
              </p>
            </div>
            <div class="about-image">
              <img src="https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Developer workspace" />
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="skills section">
        <div class="container">
          <h2 class="section-title">Technical Skills</h2>
          <div class="skills-grid">
            <div class="skill-category card">
              <h3>Frontend</h3>
              <div class="skills-list">
                <div class="skill-item">
                  <span>Angular</span>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 90%"></div>
                  </div>
                </div>
                <div class="skill-item">
                  <span>React</span>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 85%"></div>
                  </div>
                </div>
                <div class="skill-item">
                  <span>TypeScript</span>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 88%"></div>
                  </div>
                </div>
                <div class="skill-item">
                  <span>CSS/SASS</span>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 92%"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="skill-category card">
              <h3>Backend</h3>
              <div class="skills-list">
                <div class="skill-item">
                  <span>Node.js</span>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 87%"></div>
                  </div>
                </div>
                <div class="skill-item">
                  <span>Express.js</span>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 85%"></div>
                  </div>
                </div>
                <div class="skill-item">
                  <span>MongoDB</span>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 83%"></div>
                  </div>
                </div>
                <div class="skill-item">
                  <span>PostgreSQL</span>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 80%"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="skill-category card">
              <h3>Tools & Others</h3>
              <div class="skills-list">
                <div class="skill-item">
                  <span>Git/GitHub</span>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 90%"></div>
                  </div>
                </div>
                <div class="skill-item">
                  <span>Docker</span>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 75%"></div>
                  </div>
                </div>
                <div class="skill-item">
                  <span>AWS</span>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 78%"></div>
                  </div>
                </div>
                <div class="skill-item">
                  <span>Figma</span>
                  <div class="skill-bar">
                    <div class="skill-progress" style="width: 85%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Timeline -->
      <section class="experience section">
        <div class="container">
          <h2 class="section-title">Experience</h2>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3>Senior Full-Stack Developer</h3>
                <h4>TechCorp Solutions</h4>
                <span class="timeline-date">2022 - Present</span>
                <p>Leading development of large-scale web applications using MEAN stack. Mentoring junior developers and implementing best practices for code quality and performance.</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3>Full-Stack Developer</h3>
                <h4>Digital Innovations Inc.</h4>
                <span class="timeline-date">2020 - 2022</span>
                <p>Developed and maintained multiple client projects including e-commerce platforms, management systems, and mobile applications using modern web technologies.</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3>Frontend Developer</h3>
                <h4>Creative Web Studio</h4>
                <span class="timeline-date">2019 - 2020</span>
                <p>Specialized in creating responsive, accessible web interfaces using Angular and React. Collaborated with designers to implement pixel-perfect designs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section section">
        <div class="container">
          <div class="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's work together to bring your ideas to life with modern web technologies.</p>
            <a routerLink="/contact" class="btn btn-primary">Get In Touch</a>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .about-hero {
      background: linear-gradient(135deg, var(--bg-gray-light) 0%, rgba(20, 168, 0, 0.05) 100%);
    }
    
    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }
    
    .about-text h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: var(--text-dark);
    }
    
    .lead {
      font-size: 1.25rem;
      color: var(--text-gray);
      margin-bottom: 1.5rem;
      font-weight: 500;
    }
    
    .about-text p {
      color: var(--text-gray);
      line-height: 1.7;
      margin-bottom: 1rem;
    }
    
    .about-image img {
      width: 100%;
      border-radius: 1rem;
      box-shadow: var(--shadow-lg);
    }
    
    .skills {
      background: var(--bg-white);
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .skill-category h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color: var(--primary-green);
    }
    
    .skill-item {
      margin-bottom: 1rem;
    }
    
    .skill-item span {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: var(--text-dark);
    }
    
    .skill-bar {
      background: var(--bg-gray);
      height: 8px;
      border-radius: 4px;
      overflow: hidden;
    }
    
    .skill-progress {
      height: 100%;
      background: linear-gradient(90deg, var(--primary-green) 0%, var(--primary-green-light) 100%);
      border-radius: 4px;
      transition: width 0.6s ease;
    }
    
    .experience {
      background: var(--bg-gray-light);
    }
    
    .timeline {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
    }
    
    .timeline::before {
      content: '';
      position: absolute;
      left: 30px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: var(--primary-green);
    }
    
    .timeline-item {
      position: relative;
      margin-bottom: 3rem;
      padding-left: 80px;
    }
    
    .timeline-marker {
      position: absolute;
      left: 22px;
      width: 16px;
      height: 16px;
      background: var(--primary-green);
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: var(--shadow-sm);
    }
    
    .timeline-content {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: var(--shadow-md);
    }
    
    .timeline-content h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-dark);
      margin-bottom: 0.5rem;
    }
    
    .timeline-content h4 {
      color: var(--primary-green);
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    
    .timeline-date {
      color: var(--text-light);
      font-size: 0.875rem;
      font-weight: 500;
      display: block;
      margin-bottom: 1rem;
    }
    
    .timeline-content p {
      color: var(--text-gray);
      line-height: 1.6;
    }
    
    .cta-section {
      background: linear-gradient(135deg, var(--primary-green) 0%, var(--primary-green-light) 100%);
      color: white;
      text-align: center;
    }
    
    .cta-content h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    
    .cta-content p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    
    .cta-section .btn {
      background: white;
      color: var(--primary-green);
      font-weight: 600;
    }
    
    .cta-section .btn:hover {
      background: var(--bg-gray-light);
      transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }
      
      .about-text h1 {
        font-size: 2.5rem;
      }
      
      .skills-grid {
        grid-template-columns: 1fr;
      }
      
      .timeline::before {
        left: 20px;
      }
      
      .timeline-item {
        padding-left: 60px;
      }
      
      .timeline-marker {
        left: 12px;
      }
      
      .cta-content h2 {
        font-size: 2rem;
      }
    }
  `]
})
export class AboutComponent {}