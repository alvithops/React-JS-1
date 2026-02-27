import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      }, 3000);
    }
  };

  const socialLinks = [
    { icon: '𝕏', name: 'Twitter', url: 'https://twitter.com/alexrivera', color: '#00f0ff' },
    { icon: '💼', name: 'LinkedIn', url: 'https://linkedin.com/in/alexrivera', color: '#b300ff' },
    { icon: '🐙', name: 'GitHub', url: 'https://github.com/alexrivera', color: '#00ffc2' },
    { icon: '📷', name: 'Instagram', url: 'https://instagram.com/alex.rivera.design', color: '#ff00aa' }
  ];

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'alex.rivera@portfolio.dev', url: 'mailto:alex.rivera@portfolio.dev' },
    { icon: '📱', label: 'Phone', value: '+1 (555) 123-4567', url: 'tel:+15551234567' }
  ];

  return (
    <div className="contact">
      <div className="contact-header">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">Let's discuss your next project</p>
      </div>

      <div className="contact-container">
        {/* Left Column - Info & Social */}
        <div className="contact-info">
          <div className="info-card glass">
            <h2 className="info-card-title">Contact Information</h2>
            
            <div className="info-list">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.url}
                  className="info-item"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="info-icon">{item.icon}</span>
                  <div className="info-details">
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                  <span className="info-arrow">→</span>
                </a>
              ))}
            </div>

            <div className="availability">
              <div className="availability-badge">
                <span className="status-dot"></span>
                <span>Available for freelance</span>
              </div>
              <p className="response-time">⏱️ Usually responds within 24h</p>
            </div>

            <div className="social-section">
              <h3 className="social-title">Connect with me</h3>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      '--social-color': social.color 
                    }}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="contact-form-wrapper">
          <div className="form-card glass">
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className="form-title">Send a Message</h2>
                
                <div className={`form-group ${focusedField === 'name' ? 'focused' : ''} ${errors.name ? 'error' : ''}`}>
                  <label htmlFor="name">Full Name <span>*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className={`form-group ${focusedField === 'email' ? 'focused' : ''} ${errors.email ? 'error' : ''}`}>
                  <label htmlFor="email">Email Address <span>*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className={`form-group ${focusedField === 'company' ? 'focused' : ''}`}>
                  <label htmlFor="company">Company (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Company Name"
                  />
                </div>

                <div className={`form-group ${focusedField === 'message' ? 'focused' : ''} ${errors.message ? 'error' : ''}`}>
                  <label htmlFor="message">Message <span>*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="button-icon">→</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;