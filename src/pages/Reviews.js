import React from 'react';

function Reviews() {
  const reviews = [
    { name: 'Demo', email: 'demo@gmail.com', text: 'This bike is awesome!' }
  ];

  return React.createElement(
    'main',
    { className: 'reviews-container' },
    React.createElement(
      'section',
      { className: 'reviews-section' },
      React.createElement('h2', null, 'Reviews'),
      React.createElement('p', { className: 'section-info' }, 'Share your experience with Hamro Bike!'),
      React.createElement(
        'div',
        { className: 'review-form' },
        React.createElement('h3', null, 'Write Your Review'),
        React.createElement(
          'form',
          null,
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement('input', { type: 'text', id: 'name', name: 'name', placeholder: 'Your Name', required: true })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement('input', { type: 'email', id: 'email', name: 'email', placeholder: 'Your Email', required: true })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement('textarea', { id: 'review', name: 'review', placeholder: 'Write your review here...', required: true })
          ),
          React.createElement('button', { type: 'submit', className: 'submit-btn' }, 'Submit Review')
        )
      ),
      React.createElement(
        'div',
        { className: 'review-list' },
        React.createElement('h3', null, 'Customer Reviews'),
        reviews.map((review, index) =>
          React.createElement(
            'div',
            { key: index, className: 'review-item' },
            React.createElement('p', { className: 'reviewer-name' }, review.name),
            React.createElement('p', { className: 'reviewer-email' }, review.email),
            React.createElement('p', { className: 'review-text' }, review.text)
          )
        )
      )
    ),
    React.createElement(
      'footer',
      { className: 'footer' },
      React.createElement(
        'p',
        null,
        '© 2025 Hamro Bike. All rights reserved. | ',
        React.createElement('a', { href: '/contact' }, 'Contact Us')
      )
    )
  );
}

export default Reviews;