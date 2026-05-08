import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/services', text: 'Services' },
    { to: '/booking', text: 'Booking' },
    { to: '/add-vehicle', text: 'Add Vehicle' },
    { to: '/edit-vehicle', text: 'Edit Vehicle' },
    { to: '/blog', text: 'Blog' },
    { to: '/contact', text: 'Contact Us' },
    { to: '/login', text: 'Log In', className: 'login-btn' }
  ];

  return React.createElement(
    'header',
    { className: 'header' },
    React.createElement(
      'div',
      { className: 'logo' },
      React.createElement('i', { className: 'fas fa-motorcycle' }),
      ' Hamro Bike'
    ),
    React.createElement(
      'nav',
      null,
      React.createElement(
        'ul',
        { className: 'nav-list' },
        navLinks.map((link, index) =>
          React.createElement(
            'li',
            { key: index, className: link.className || '' },
            React.createElement(
              NavLink,
              {
                to: link.to,
                className: ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'
              },
              link.text
            )
          )
        )
      )
    )
  );
}

export default Header;