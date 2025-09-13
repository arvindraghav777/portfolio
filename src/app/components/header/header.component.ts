import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <div class="logo">
            <h2>Arvind Kumar Singh Raghav</h2>
            <span class="tagline">Full-Stack Developer</span>
          </div>
          
          <div class="nav-links" [class.active]="isMenuOpen">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
            <a routerLink="/about" routerLinkActive="active">About</a>
            <a routerLink="/services" routerLinkActive="active">Services</a>
            <a routerLink="/contact" routerLinkActive="active">Contact</a>
          </div>
          
          <button class="menu-toggle" (click)="toggleMenu()" [attr.aria-expanded]="isMenuOpen">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border-gray);
      position: sticky;
      top: 0;
      z-index: 100;
      transition: all 0.3s ease;
    }
    
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
    }
    
    .logo h2 {
      color: var(--primary-green);
      font-weight: 700;
      margin: 0;
      font-size: 1.5rem;
    }
    
    .tagline {
      color: var(--text-gray);
      font-size: 0.875rem;
      font-weight: 400;
    }
    
    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }
    
    .nav-links a {
      text-decoration: none;
      color: var(--text-dark);
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      transition: all 0.3s ease;
    }
    
    .nav-links a:hover,
    .nav-links a.active {
      color: var(--primary-green);
      background: rgba(20, 168, 0, 0.1);
    }
    
    .menu-toggle {
      display: none;
      flex-direction: column;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }
    
    .menu-toggle span {
      width: 25px;
      height: 3px;
      background: var(--text-dark);
      margin: 2px 0;
      transition: 0.3s;
      border-radius: 2px;
    }
    
    @media (max-width: 768px) {
      .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: 2rem;
        box-shadow: var(--shadow-lg);
        border-radius: 0 0 1rem 1rem;
      }
      
      .nav-links.active {
        display: flex;
      }
      
      .menu-toggle {
        display: flex;
      }
      
      .menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      
      .menu-toggle.active span:nth-child(2) {
        opacity: 0;
      }
      
      .menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}