import React from 'react';

function Home() {
  const bikeOptions = [
    { value: 'scrambler', text: 'Yamaha Scrambler' },
    { value: 'classic', text: 'Bajaj Pulsar' },
    { value: 'classic', text: 'Royal Enfield Classic' },
    { value: 'Super', text: 'Suzuki GSX-S1000GT' },
    { value: 'offroad', text: 'Honda CRF' },
    { value: 'street-sport', text: 'NS 200' },
    { value: 'street-sport', text: 'KTM Duke' },
    { value: 'street-sport', text: 'FZ-V3' }

  ];

  const locationOptions = [
    { value: 'kathmandu', text: 'Kathmandu' },
    { value: 'pokhara', text: 'Pokhara' },
    { value: 'chitwan', text: 'Chitwan' },
    { value: 'mustang', text: 'Mustang' },
    { value: 'namche', text: 'Namche' },
    { value: 'mugu', text: 'Mugu' },
    
  ];

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'section',
      { className: 'home-hero' },
      React.createElement(
        'div',
        { className: 'home-hero-content' },
        React.createElement('h1', null, 'Looking to Save More on Your Rental Two-Wheeler?'),
        React.createElement(
          'div',
          { className: 'search-container' },
          React.createElement(
            'form',
            { className: 'search-form' },
            React.createElement('input', {
              type: 'text',
              placeholder: 'Search...',
              name: 'search',
              'aria-label': 'Search bikes'
            }),
            React.createElement(
              'button',
              { type: 'submit', 'aria-label': 'Submit search' },
              React.createElement('i', { className: 'fas fa-search' })
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'home-hero-image' },
        React.createElement('img', { src: '/assets/Enfield.webp', alt: 'Blue Motorcycle' })
      )
    ),
    React.createElement(
      'section',
      { className: 'booking-form-section' },
      React.createElement('h2', null, 'Book a Vehicle Today'),
      React.createElement(
        'form',
        { className: 'booking-form' },
        React.createElement(
          'div',
          { className: 'form-row' },
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement('label', { htmlFor: 'bike-type' }, 'Choose Bike'),
            React.createElement(
              'select',
              { id: 'bike-type', name: 'bike-type', required: true },
              React.createElement('option', { value: '', disabled: true, selected: true }, 'Select Bike Type'),
              bikeOptions.map(opt =>
                React.createElement('option', { key: opt.value, value: opt.value }, opt.text)
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement('label', { htmlFor: 'pickup' }, 'Pick-up'),
            React.createElement(
              'select',
              { id: 'pickup', name: 'pickup', required: true },
              React.createElement('option', { value: '', disabled: true, selected: true }, 'Select Pick-up Location'),
              locationOptions.map(opt =>
                React.createElement('option', { key: opt.value, value: opt.value }, opt.text)
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement('label', { htmlFor: 'dropoff' }, 'Drop-off'),
            React.createElement(
              'select',
              { id: 'dropoff', name: 'dropoff', required: true },
              React.createElement('option', { value: '', disabled: true, selected: true }, 'Select Drop-off Location'),
              locationOptions.map(opt =>
                React.createElement('option', { key: opt.value, value: opt.value }, opt.text)
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'form-actions' },
          React.createElement(
            'button',
            { type: 'submit', className: 'save-btn' },
            'Continue ',
            React.createElement('i', { className: 'fas fa-arrow-right' })
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

export default Home;