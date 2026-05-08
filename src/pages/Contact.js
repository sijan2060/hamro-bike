import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submission:', formData);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <main className="container">
      <section className="hero">
        <h1>Contact Us</h1>
        <p>
          Have questions about our bikes or rental services? Need help planning your route? Our team is here to assist you. Reach out to us using the form below or visit our location. We look forward to helping you get on the road!
        </p>
      </section>
      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-form-container">
            <h2>
              <i className="fas fa-envelope"></i> Send Us a Message
            </h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="rental">Bike Rental Inquiry</option>
                  <option value="routes">Route Information</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
          <div className="contact-info">
            <h2>
              <i className="fas fa-info-circle"></i> Contact Information
            </h2>
            <div className="info-card">
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Our Location</h3>
                  <p>Dhobibhara, Kathmandu, Nepal</p>
                  <p>Open daily: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <h3>Phone Numbers</h3>
                  <p>Main: +977 1 4123456</p>
                  <p>Support: +977 9812345678</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email Addresses</h3>
                  <p>Rentals: rentals@hamrobike.com</p>
                  <p>Support: support@hamrobike.com</p>
                </div>
              </div>
              <div className="social-media">
                <h3>Connect With Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;