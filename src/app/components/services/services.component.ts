import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main>
      <!-- Services Hero -->
      <section class="services-hero section">
        <div class="container">
          <div class="hero-content">
            <h1>My Services</h1>
            <p>I offer comprehensive web development services to help bring your digital vision to life. From concept to deployment, I'll work with you every step of the way.</p>
          </div>
        </div>
      </section>

      <!-- Main Services -->
      <section class="main-services section">
        <div class="container">
          <div class="services-grid">
            <div class="service-item card">
              <div class="service-header">
                <div class="service-icon">🌐</div>
                <h3>Full-Stack Web Development</h3>
              </div>
              <p>Complete web application development using modern technologies like MEAN stack, React, and Vue.js. From database design to user interface implementation.</p>
              <ul class="service-features">
                <li>Custom web applications</li>
                <li>API development & integration</li>
                <li>Database design & optimization</li>
                <li>Performance optimization</li>
                <li>Security implementation</li>
              </ul>
              <div class="service-price">
                <span class="price">Starting at $2,500</span>
                <span class="duration">4-8 weeks</span>
              </div>
            </div>

            <div class="service-item card">
              <div class="service-header">
                <div class="service-icon">📱</div>
                <h3>Mobile App Development</h3>
              </div>
              <p>Cross-platform mobile applications using React Native and Ionic. Native-like performance with code reusability across iOS and Android platforms.</p>
              <ul class="service-features">
                <li>Cross-platform development</li>
                <li>Native performance</li>
                <li>App store deployment</li>
                <li>Push notifications</li>
                <li>Offline functionality</li>
              </ul>
              <div class="service-price">
                <span class="price">Starting at $3,500</span>
                <span class="duration">6-10 weeks</span>
              </div>
            </div>

            <div class="service-item card">
              <div class="service-header">
                <div class="service-icon">🛒</div>
                <h3>E-commerce Solutions</h3>
              </div>
              <p>Complete e-commerce platforms with payment integration, inventory management, order processing, and admin dashboards for online businesses.</p>
              <ul class="service-features">
                <li>Payment gateway integration</li>
                <li>Inventory management</li>
                <li>Order processing system</li>
                <li>Customer management</li>
                <li>Analytics dashboard</li>
              </ul>
              <div class="service-price">
                <span class="price">Starting at $4,000</span>
                <span class="duration">8-12 weeks</span>
              </div>
            </div>

            <div class="service-item card">
              <div class="service-header">
                <div class="service-icon">🎨</div>
                <h3>UI/UX Design & Development</h3>
              </div>
              <p>Modern, responsive user interfaces with focus on user experience, accessibility, and conversion optimization. From wireframes to pixel-perfect implementation.</p>
              <ul class="service-features">
                <li>User experience research</li>
                <li>Wireframing & prototyping</li>
                <li>Responsive design</li>
                <li>Accessibility compliance</li>
                <li>Design system creation</li>
              </ul>
              <div class="service-price">
                <span class="price">Starting at $1,800</span>
                <span class="duration">3-6 weeks</span>
              </div>
            </div>

            <div class="service-item card">
              <div class="service-header">
                <div class="service-icon">⚡</div>
                <h3>Website Optimization</h3>
              </div>
              <p>Improve your existing website's performance, SEO, and user experience. Code optimization, speed improvements, and conversion rate optimization.</p>
              <ul class="service-features">
                <li>Performance optimization</li>
                <li>SEO improvements</li>
                <li>Code refactoring</li>
                <li>Security updates</li>
                <li>Analytics setup</li>
              </ul>
              <div class="service-price">
                <span class="price">Starting at $1,200</span>
                <span class="duration">2-4 weeks</span>
              </div>
            </div>

            <div class="service-item card">
              <div class="service-header">
                <div class="service-icon">🔧</div>
                <h3>Consulting & Maintenance</h3>
              </div>
              <p>Technical consulting, code reviews, ongoing maintenance, and support for your existing projects. Expert advice on technology choices and architecture.</p>
              <ul class="service-features">
                <li>Technical consulting</li>
                <li>Code reviews</li>
                <li>Ongoing maintenance</li>
                <li>Security updates</li>
                <li>Feature additions</li>
              </ul>
              <div class="service-price">
                <span class="price">$80/hour</span>
                <span class="duration">Ongoing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="process section">
        <div class="container">
          <h2 class="section-title">My Development Process</h2>
          <div class="process-steps">
            <div class="process-step">
              <div class="step-number">1</div>
              <h3>Discovery & Planning</h3>
              <p>Understanding your requirements, goals, and target audience. Creating detailed project specifications and timeline.</p>
            </div>
            <div class="process-step">
              <div class="step-number">2</div>
              <h3>Design & Architecture</h3>
              <p>Creating wireframes, mockups, and technical architecture. Defining the technology stack and database structure.</p>
            </div>
            <div class="process-step">
              <div class="step-number">3</div>
              <h3>Development</h3>
              <p>Building your application with clean, maintainable code. Regular updates and feedback sessions throughout development.</p>
            </div>
            <div class="process-step">
              <div class="step-number">4</div>
              <h3>Testing & Launch</h3>
              <p>Comprehensive testing, bug fixes, and deployment. Training and documentation for ongoing maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section section">
        <div class="container">
          <div class="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss your project and find the perfect solution for your needs.</p>
            <a routerLink="/contact" class="btn btn-primary">Request Quote</a>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .services-hero {
      background: linear-gradient(135deg, var(--bg-gray-light) 0%, rgba(20, 168, 0, 0.05) 100%);
      text-align: center;
    }
    
    .hero-content h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: var(--text-dark);
    }
    
    .hero-content p {
      font-size: 1.25rem;
      color: var(--text-gray);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }
    
    .main-services {
      background: var(--bg-white);
    }
    
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }
    
    .service-item {
      position: relative;
    }
    
    .service-header {
      margin-bottom: 1rem;
    }
    
    .service-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .service-item h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-dark);
      margin-bottom: 1rem;
    }
    
    .service-item > p {
      color: var(--text-gray);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    
    .service-features {
      list-style: none;
      margin-bottom: 2rem;
    }
    
    .service-features li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--text-gray);
    }
    
    .service-features li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--primary-green);
      font-weight: bold;
    }
    
    .service-price {
      border-top: 1px solid var(--border-gray);
      padding-top: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .price {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-green);
    }
    
    .duration {
      color: var(--text-light);
      font-size: 0.875rem;
    }
    
    .process {
      background: var(--bg-gray-light);
    }
    
    .process-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .process-step {
      text-align: center;
    }
    
    .step-number {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, var(--primary-green) 0%, var(--primary-green-light) 100%);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0 auto 1rem;
      box-shadow: var(--shadow-md);
    }
    
    .process-step h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-dark);
      margin-bottom: 1rem;
    }
    
    .process-step p {
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
      .hero-content h1 {
        font-size: 2.5rem;
      }
      
      .services-grid {
        grid-template-columns: 1fr;
      }
      
      .process-steps {
        grid-template-columns: 1fr;
      }
      
      .cta-content h2 {
        font-size: 2rem;
      }
      
      .service-price {
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;
      }
    }
  `]
})
export class ServicesComponent {}