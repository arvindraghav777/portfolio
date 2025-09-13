import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './app/components/header/header.component';
import { routes } from './app/app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-info">
            <h3>Arvind Kumar Singh Raghav</h3>
            <p>Full-Stack Developer specializing in MEAN stack and modern web technologies.</p>
          </div>
          <div class="footer-links">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>
          <div class="footer-contact">
            <h4>Get In Touch</h4>
            <p>arvind.raghav&#64;example.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--text-dark);
      color: white;
      padding: 3rem 0 1rem;
      margin-top: auto;
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 3rem;
      margin-bottom: 2rem;
    }
    
    .footer-info h3 {
      color: var(--primary-green);
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    
    .footer-info p {
      color: #9CA3AF;
      line-height: 1.6;
    }
    
    .footer-links h4,
    .footer-contact h4 {
      margin-bottom: 1rem;
      font-weight: 600;
    }
    
    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .footer-links a {
      color: #9CA3AF;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    
    .footer-links a:hover {
      color: var(--primary-green);
    }
    
    .footer-contact p {
      color: #9CA3AF;
      margin-bottom: 0.5rem;
    }
    
    .footer-bottom {
      border-top: 1px solid #374151;
      padding-top: 1rem;
      text-align: center;
    }
    
    .footer-bottom p {
      color: #9CA3AF;
      font-size: 0.875rem;
    }
    
    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
  `]
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});