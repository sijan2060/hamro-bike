import React, { useState } from 'react';

function Booking() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const isUserSignedUp = false; // Simulate user authentication

  const handleBookClick = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUserSignedUp) {
      alert('Booking confirmed successfully!');
      setIsPopupOpen(false);
      const formData = new FormData(e.target);
      console.log('Booking Details:', Object.fromEntries(formData));
    } else {
      alert('Please complete KYC to proceed with booking.');
      window.location.href = '/kyc';
    }
  };

  const bikes = [
    { name: 'Yamaha Scrambler', specs: '300cc | Petrol | Rs. 3000/day', img: '/assets/Yamaha Scrambler.jpg' },
    { name: 'Bajaj Pulsar', specs: '149cc | Petrol | Rs. 1500/day', img: '/assets/Bajaj Pulsar.webp' },
    { name: 'Royal Enfield Classic', specs: '350cc | Petrol | Rs. 3500/day', img: '/assets/Royal Enfield Classic.webp' },
    { name: 'Suzuki GSX-S1000GT', specs: '650cc | Petrol | Rs. 6500/day', img: '/assets/Suzuki GSX-S1000GT.avif' },
    { name: 'Honda CRF', specs: '250cc | Petrol | Rs. 2500/day', img: '/assets/Honda CRF.jpg' },
    { name: 'NS 200', specs: '200cc | Petrol | Rs. 2000/day', img: '/assets/NS 200.webp' },
    { name: 'KTM Duke', specs: '390cc | Petrol | Rs. 3900/day', img: '/assets/KTM Duke.avif' },
    { name: 'Fz-V3', specs: '149cc | Petrol | Rs. 1500/day', img: '/assets/Fz-V3.jpg' }
  ];

  const locationOptions = [
    { value: 'kathmandu', text: 'Kathmandu' },
    { value: 'pokhara', text: 'Pokhara' },
    { value: 'chitwan', text: 'Chitwan' },
    { value: 'mustang', text: 'Mustang' },
    { value: 'namche', text: 'Namche' },
    { value: 'mugu', text: 'Mugu' }
  ];

  const terms = [
    'Eligibility: Minimum age 21 with a valid driver’s license. International renters require an IDP.',
    'Booking & Payment: Book via website or agents. Full payment due at booking (online accepted).',
    'Rental Period: Minimum 24 hours. Late returns incur hourly fees. Extensions need prior approval.',
    'Usage: Public roads only. No off-road, racing, or illegal use.',
    'Insurance & Liability: Basic insurance included. Renters liable for damage/theft; deposit required.',
    'Cancellation: Full refund 48+ hours prior; 50% charge within 48 hours; no refund for no-shows.',
    'Fuel Policy: Full tank provided and required on return, or a refueling fee applies.',
    'Breakdown Assistance: 24/7 roadside support. No self-repairs allowed.',
    'Agreement: Violation of terms may terminate rental and forfeit deposit.'
  ];

  return React.createElement(
    'main',
    { className: 'booking-container' },
    React.createElement(
      'section',
      { className: 'booking-hero' },
      React.createElement('h1', null, 'Ride the Ultimate Adventure'),
      React.createElement('p', null, 'Explore Nepal with Hamro Bike – your journey starts here!')
    ),
    React.createElement(
      'section',
      { className: 'bike-container', id: 'booking' },
      bikes.map((bike, index) =>
        React.createElement(
          'div',
          { key: index, className: 'bike-card' },
          React.createElement('img', { src: bike.img, alt: bike.name }),
          React.createElement('h3', null, bike.name),
          React.createElement('p', null, bike.specs),
          React.createElement('button', { className: 'book-btn', onClick: handleBookClick }, 'Book Now')
        )
      )
    ),
    React.createElement(
      'div',
      { className: `popup-form ${isPopupOpen ? 'active' : ''}` },
      React.createElement(
        'div',
        { className: 'popup-content' },
        React.createElement('h2', null, 'Book Your Ride Now'),
        React.createElement('span', { className: 'close-btn', onClick: handleClosePopup }, '×'),
        React.createElement(
          'form',
          { onSubmit: handleSubmit },
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement('label', { htmlFor: 'pickup' }, 'Pick-up Location'),
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
            React.createElement('label', { htmlFor: 'dropoff' }, 'Drop-off Location'),
            React.createElement(
              'select',
              { id: 'dropoff', name: 'dropoff', required: true },
              React.createElement('option', { value: '', disabled: true, selected: true }, 'Select Drop-off Location'),
              locationOptions.map(opt =>
                React.createElement('option', { key: opt.value, value: opt.value }, opt.text)
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement('label', { htmlFor: 'pickup-date' }, 'Pick-up Date'),
            React.createElement('input', { type: 'date', id: 'pickup-date', name: 'pickup-date', min: '2025-04-05', required: true })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement('label', { htmlFor: 'dropoff-date' }, 'Drop-off Date'),
            React.createElement('input', { type: 'date', id: 'dropoff-date', name: 'dropoff-date', min: '2025-04-06', required: true })
          ),
          React.createElement(
            'button',
            { type: 'submit' },
            'Confirm Booking ',
            React.createElement('i', { className: 'fas fa-arrow-right' })
          )
        )
      )
    ),
    React.createElement(
      'section',
      { className: 'terms' },
      React.createElement('h2', null, 'Rental Terms & Conditions'),
      React.createElement(
        'ul',
        null,
        terms.map((term, index) =>
          React.createElement(
            'li',
            { key: index },
            React.createElement('strong', null, term.split(':')[0] + ':'),
            term.split(':').slice(1).join(':')
          )
        )
      )
    ),
  );
}

export default Booking;