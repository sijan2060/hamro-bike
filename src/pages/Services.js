import React from 'react';

function Services() {
  const services = [
    { icon: 'fas fa-motorcycle', title: 'Bike Rentals', desc: 'Choose from a variety of bikes for your adventure, from scramblers to classic models, at affordable rates.', link: '/booking', linkText: 'Book Now' },
    { icon: 'fas fa-map-marked-alt', title: 'Guided Tours', desc: 'Join our guided tours to explore scenic routes and hidden gems across Nepal with experienced guides.', link: '/contact', linkText: 'Learn More' },
    { icon: 'fas fa-tools', title: 'Maintenance Services', desc: 'Keep your bike in top condition with our professional maintenance and repair services.', link: '/contact', linkText: 'Get a Quote' },
    { icon: 'fas fa-shield-alt', title: 'Insurance Options', desc: 'Ride with peace of mind with our comprehensive insurance plans tailored for bike rentals.', link: '/contact', linkText: 'Explore Plans' },
    { icon: 'fas fa-headset', title: '24/7 Support', desc: 'Our support team is available round-the-clock to assist you with any queries or emergencies.', link: '/contact', linkText: 'Contact Support' },
    { icon: 'fas fa-route', title: 'Custom Itineraries', desc: 'Plan your perfect trip with our custom itinerary service, tailored to your preferences.', link: '/contact', linkText: 'Plan Your Trip' }
  ];

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'section',
      { className: 'services-hero' },
      React.createElement(
        'div',
        { className: 'services-hero-content' },
        React.createElement('h1', null, 'Our Services'),
        React.createElement('p', null, 'Explore the wide range of services we offer to make your biking experience unforgettable.')
      )
    ),
    React.createElement(
      'section',
      { className: 'services-section' },
      React.createElement(
        'div',
        { className: 'services-container' },
        services.map((service, index) =>
          React.createElement(
            'div',
            { key: index, className: 'service-card' },
            React.createElement(
              'div',
              { className: 'service-icon' },
              React.createElement('i', { className: service.icon })
            ),
            React.createElement('h3', null, service.title),
            React.createElement('p', null, service.desc),
            React.createElement('a', { href: service.link, className: 'service-btn' }, service.linkText)
          )
        )
      )
    ),

  );
}

export default Services;