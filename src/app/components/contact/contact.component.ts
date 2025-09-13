import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main>
      <!-- Contact Hero -->
      <section class="contact-hero section">
        <div class="container">
          <div class="hero-content">
            <h1>Let's Work Together</h1>
            <p>Ready to start your next project? Get in touch and let's discuss how I can help bring your ideas to life.</p>
          </div>
        </div>
      </section>

      <!-- Contact Content -->
      <section class="contact-content section">
        <div class="container">
          <div class="contact-grid">
            <!-- Contact Form -->
            <div class="contact-form card">
              <h2>Send Me a Message</h2>
              <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
                <div class="form-group">
                  <label for="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    [(ngModel)]="formData.name"
                    required
                    #name="ngModel"
                    class="form-control"
                    [class.error]="name.invalid && name.touched"
                    placeholder="Your full name"
                  />
                  <div class="error-message" *ngIf="name.invalid && name.touched">
                    Name is required
                  </div>
                </div>

                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    [(ngModel)]="formData.email"
                    required
                    email
                    #email="ngModel"
                    class="form-control"
                    [class.error]="email.invalid && email.touched"
                    placeholder="your.email@example.com"
                  />
                  <div class="error-message" *ngIf="email.invalid && email.touched">
                    Please enter a valid email address
                  </div>
                </div>

                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    [(ngModel)]="formData.phone"
                    class="form-control"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div class="form-group">
                  <label for="service">Service Needed</label>
                  <select 
                    id="service" 
                    name="service" 
                    [(ngModel)]="formData.service"
                    class="form-control"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ecommerce">E-commerce Solutions</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="optimization">Website Optimization</option>
                    <option value="consulting">Consulting & Maintenance</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="budget">Project Budget</label>
                  <select 
                    id="budget" 
                    name="budget" 
                    [(ngModel)]="formData.budget"
                    class="form-control"
                  >
                    <option value="">Select budget range</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="25000+">$25,000+</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="message">Project Details</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    [(ngModel)]="formData.message"
                    required
                    #message="ngModel"
                    class="form-control"
                    [class.error]="message.invalid && message.touched"
                    rows="5"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  ></textarea>
                  <div class="error-message" *ngIf="message.invalid && message.touched">
                    Please provide project details
                  </div>
                </div>

                <button 
                  type="submit" 
                  class="btn btn-primary submit-btn"
                  [disabled]="contactForm.invalid || isSubmitting"
                >
                  <span *ngIf="!isSubmitting">Send Message</span>
                  <span *ngIf="isSubmitting">Sending...</span>
                </button>
              </form>

              <div class="success-message" *ngIf="isSubmitted">
                <div class="success-icon">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            </div>

            <!-- Contact Info -->
            <div class="contact-info">
              <div class="info-card card">
                <h3>Contact Information</h3>
                <div class="contact-details">
                  <div class="contact-item">
                    <div class="contact-icon">📧</div>
                    <div class="contact-text">
                      <h4>Email</h4>
                      <p>arvind.raghav&#64;example.com</p>
                    </div>
                  </div>
                  
                  <div class="contact-item">
                    <div class="contact-icon">📱</div>
                    <div class="contact-text">
                      <h4>Phone</h4>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div class="contact-item">
                    <div class="contact-icon">📍</div>
                    <div class="contact-text">
                      <h4>Location</h4>
                      <p>San Francisco, CA</p>
                    </div>
                  </div>
                  
                  <div class="contact-item">
                    <div class="contact-icon">⏰</div>
                    <div class="contact-text">
                      <h4>Response Time</h4>
                      <p>Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="availability-card card">
                <h3>Current Availability</h3>
                <div class="availability-status">
                  <div class="status-indicator available"></div>
                  <span>Available for new projects</span>
                </div>
                <p>I'm currently accepting new projects starting in March 2025. Book your slot early to secure priority scheduling.</p>
                <div class="next-steps">
                  <h4>What happens next?</h4>
                  <ul>
                    <li>I'll review your project details</li>
                    <li>Schedule a discovery call within 48 hours</li>
                    <li>Provide a detailed proposal and timeline</li>
                    <li>Start working on your project</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq section">
        <div class="container">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <div class="faq-grid">
            <div class="faq-item">
              <h3>What's your typical project timeline?</h3>
              <p>Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 8-16 weeks. I'll provide a detailed timeline during our discovery call.</p>
            </div>
            
            <div class="faq-item">
              <h3>Do you work with international clients?</h3>
              <p>Yes! I work with clients worldwide. I'm experienced in remote collaboration and can adapt to different time zones for meetings and communication.</p>
            </div>
            
            <div class="faq-item">
              <h3>What's included in ongoing maintenance?</h3>
              <p>Maintenance includes security updates, bug fixes, performance monitoring, content updates, and technical support. I offer different maintenance packages based on your needs.</p>
            </div>
            
            <div class="faq-item">
              <h3>Do you provide hosting and domain services?</h3>
              <p>I can help you choose the best hosting solution and set everything up. I work with various hosting providers and can recommend the best option for your project.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .contact-hero {
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
    
    .contact-content {
      background: var(--bg-white);
    }
    
    .contact-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
      align-items: start;
    }
    
    .contact-form h2 {
      font-size: 1.75rem;
      font-weight: 600;
      margin-bottom: 2rem;
      color: var(--text-dark);
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: var(--text-dark);
    }
    
    .form-control {
      width: 100%;
      padding: 0.875rem;
      border: 2px solid var(--border-gray);
      border-radius: 0.5rem;
      font-size: 0.875rem;
      transition: all 0.3s ease;
      background: white;
    }
    
    .form-control:focus {
      outline: none;
      border-color: var(--primary-green);
      box-shadow: 0 0 0 3px rgba(20, 168, 0, 0.1);
    }
    
    .form-control.error {
      border-color: #EF4444;
    }
    
    .error-message {
      color: #EF4444;
      font-size: 0.75rem;
      margin-top: 0.25rem;
    }
    
    textarea.form-control {
      resize: vertical;
      min-height: 120px;
    }
    
    .submit-btn {
      width: 100%;
      padding: 1rem;
      font-size: 1rem;
      font-weight: 600;
    }
    
    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .success-message {
      background: linear-gradient(135deg, var(--primary-green) 0%, var(--primary-green-light) 100%);
      color: white;
      padding: 2rem;
      border-radius: 1rem;
      text-align: center;
      margin-top: 2rem;
    }
    
    .success-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .success-message h3 {
      margin-bottom: 0.5rem;
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .info-card h3,
    .availability-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color: var(--text-dark);
    }
    
    .contact-details {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .contact-icon {
      font-size: 1.5rem;
      margin-top: 0.25rem;
    }
    
    .contact-text h4 {
      font-weight: 600;
      color: var(--text-dark);
      margin-bottom: 0.25rem;
    }
    
    .contact-text p {
      color: var(--text-gray);
    }
    
    .availability-status {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }
    
    .status-indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    
    .status-indicator.available {
      background: var(--primary-green);
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0% { opacity: 1; }
      50% { opacity: 0.5; }
      100% { opacity: 1; }
    }
    
    .availability-status span {
      font-weight: 500;
      color: var(--primary-green);
    }
    
    .availability-card p {
      color: var(--text-gray);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    
    .next-steps h4 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-dark);
      margin-bottom: 0.75rem;
    }
    
    .next-steps ul {
      list-style: none;
      padding: 0;
    }
    
    .next-steps li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--text-gray);
      font-size: 0.875rem;
    }
    
    .next-steps li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--primary-green);
      font-weight: bold;
    }
    
    .faq {
      background: var(--bg-gray-light);
    }
    
    .faq-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .faq-item {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: var(--shadow-sm);
    }
    
    .faq-item h3 {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--text-dark);
      margin-bottom: 1rem;
    }
    
    .faq-item p {
      color: var(--text-gray);
      line-height: 1.6;
    }
    
    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2.5rem;
      }
      
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .faq-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  };
  
  isSubmitting = false;
  isSubmitted = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isSubmitting = true;
      
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        
        // Reset form after success
        setTimeout(() => {
          this.isSubmitted = false;
          form.resetForm();
          this.formData = {
            name: '',
            email: '',
            phone: '',
            service: '',
            budget: '',
            message: ''
          };
        }, 3000);
      }, 2000);
    }
  }
}