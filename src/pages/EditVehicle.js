import React, { useState } from 'react';

function EditVehicle() {
  const [formData, setFormData] = useState({
    model: '',
    engine: '',
    fuel: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Edited Vehicle Details:', formData);
    alert('Vehicle details updated successfully!');
  };

  return (
    <main className="container">
      <section className="edit-vehicle-form">
        <h2>Edit Vehicle Details</h2>
        <p className="owner-notice">This page is accessible only to the owner.</p>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="model">Vehicle Model</label>
            <input
              type="text"
              id="model"
              name="model"
              placeholder='Enter here new vehicle model'
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="engine">Engine Capacity (cc)</label>
            <input
              type="number"
              id="engine"
              name="engine"
              placeholder='Enter here your engine capacity.... '
              value={formData.engine}
              onChange={handleChange}
              min="120"
              max="250"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fuel">Fuel Type</label>
            <select id="fuel" name="fuel" value={formData.fuel} onChange={handleChange} required>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="electric">Electric</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">Rent Price (Rs. per day)</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder='Your new expected rent price ....'
              value={formData.price}
              onChange={handleChange}
              min="1000"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Upload New Image</label>
            <input type="file" id="image" name="image" accept="image/*" />
            <p className="current-image">
              Current: <a href="/photo/Bike1.jpg" target="_blank">Bike1.jpg</a>
            </p>
          </div>
          <div className="form-actions">
            <button type="submit" className="save-btn">
              Save Changes <i className="fas fa-save"></i>
            </button>
            <button type="button" className="cancel-btn" onClick={() => setFormData({})}>
              Cancel <i className="fas fa-times"></i>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default EditVehicle;