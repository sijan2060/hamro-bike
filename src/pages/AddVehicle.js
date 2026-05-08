import React, { useState } from 'react';

function AddVehicle() {
  const [formData, setFormData] = useState({
    userName: '',
    licenceNo: '',
    billBookNo: '',
    citizenshipNo: '',
    bikeModel: '',
    bikePrice: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Vehicle Submission:', {
      ...formData,
      userLicense: e.target['user-license'].files[0]?.name,
      bikeImage: e.target['bike-image'].files[0]?.name,
    });
    alert('Vehicle details submitted successfully!');
    setFormData({
      userName: '',
      licenceNo: '',
      billBookNo: '',
      citizenshipNo: '',
      bikeModel: '',
      bikePrice: '',
    });
    e.target.reset(); // Reset file inputs
  };

  return (
    <>
      <main className="container">
        <section className="submit-vehicle-form">
          <h2>Add Your Vehicle for Rent</h2>
          <p className="form-info">
            Interested in renting out your bike? Fill out the details below, and we'll get in touch!
          </p>
          <form id="submit-form" onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="user-name">Your Full Name</label>
              <input
                type="text"
                id="user-name"
                name="userName"
                placeholder="enter your name"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="licence-no">Licence No.</label>
              <input
                type="tel"
                id="licence-no"
                name="licenceNo"
                placeholder="00-00-00000000"
                pattern="[0-9]{10}"
                value={formData.licenceNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bill-book-no">Bill Book No.</label>
              <input
                type="tel"
                id="bill-book-no"
                name="billBookNo"
                placeholder="00000000"
                pattern="[0-9]{10}"
                value={formData.billBookNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="citizenship-no">Citizenship No.</label>
              <input
                type="tel"
                id="citizenship-no"
                name="citizenshipNo"
                placeholder="00-00-00-00000"
                pattern="[0-9]{10}"
                value={formData.citizenshipNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="user-license">Upload Your Driver's License</label>
              <input
                type="file"
                id="user-license"
                name="user-license"
                accept="image/*,application/pdf"
                required
              />
              <p className="file-note">Accepted formats: JPG, PNG, PDF</p>
            </div>
            <div className="form-group">
              <label htmlFor="bike-model">Bike Model</label>
              <input
                type="text"
                id="bike-model"
                name="bikeModel"
                placeholder="enter your bike model"
                value={formData.bikeModel}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bike-price">Expected Rent Price (Rs. per day)</label>
              <input
                type="number"
                id="bike-price"
                name="bikePrice"
                placeholder="your expected rent price "
                min="500"
                value={formData.bikePrice}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bike-image">Upload Bike Image</label>
              <input
                type="file"
                id="bike-image"
                name="bike-image"
                accept="image/*"
                required
              />
              <p className="file-note">Accepted formats: JPG, PNG</p>
            </div>
            <div className="form-actions">
              <button type="submit" className="save-btn">
                Submit Vehicle <i className="fas fa-plus"></i>
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => {
                  setFormData({
                    userName: '',
                    licenceNo: '',
                    billBookNo: '',
                    citizenshipNo: '',
                    bikeModel: '',
                    bikePrice: '',
                  });
                  document.getElementById('submit-form').reset();
                }}
              >
                Cancel <i className="fas fa-times"></i>
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default AddVehicle;