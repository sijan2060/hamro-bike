import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function SignUp() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        alert('Account created successfully!');
    };

    const isLengthValid = password.length >= 8;
    const isUppercaseValid = /[A-Z]/.test(password);
    const isLowercaseValid = /[a-z]/.test(password);
    const isNumberValid = /[0-9]/.test(password);

    return (
        <main className="container">
            <div className="signup-container">
                <div className="signup-image">
                    <div className="overlay">
                        <h2>Join Hamro Bike</h2>
                        <p>Start your biking adventure today</p>
                    </div>
                </div>
                
                <div className="signup-form-container">
                    <div className="form-header">
                        <h1><i className="fas fa-user-plus"></i> Create Account</h1>
                        <p>Fill in your details below</p>
                    </div>
                    
                    <form className="signup-form" id="signupForm" onSubmit={handleSubmit} noValidate>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <div className="input-with-icon">
                                    <i className="fas fa-user"></i>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <div className="input-with-icon">
                                    <i className="fas fa-user"></i>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <div className="input-with-icon">
                                <i className="fas fa-envelope"></i>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <div className="input-with-icon">
                                <i className="fas fa-phone"></i>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone Number"
                                    pattern="[0-9]{10}"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-with-icon">
                                    <i className="fas fa-lock"></i>
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                    <i
                                        className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'} toggle-password`}
                                        onClick={togglePasswordVisibility}
                                    ></i>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <div className="input-with-icon">
                                    <i className="fas fa-lock"></i>
                                    <input
                                        type={confirmPasswordVisible ? 'text' : 'password'}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                        required
                                    />
                                    <i
                                        className={`fas ${confirmPasswordVisible ? 'fa-eye-slash' : 'fa-eye'} toggle-confirm-password`}
                                        onClick={toggleConfirmPasswordVisibility}
                                    ></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="password-requirements">
                            <p>Password must include:</p>
                            <ul>
                                <li id="length" className={isLengthValid ? 'valid' : ''}>
                                    <i className="fas fa-check-circle"></i> 8+ characters
                                </li>
                                <li id="uppercase" className={isUppercaseValid ? 'valid' : ''}>
                                    <i className="fas fa-check-circle"></i> Uppercase letter
                                </li>
                                <li id="lowercase" className={isLowercaseValid ? 'valid' : ''}>
                                    <i className="fas fa-check-circle"></i> Lowercase letter
                                </li>
                                <li id="number" className={isNumberValid ? 'valid' : ''}>
                                    <i className="fas fa-check-circle"></i> Number
                                </li>
                            </ul>
                        </div>
                        
                        <div className="terms-container">
                            <input type="checkbox" id="terms" name="terms" required />
                            <label htmlFor="terms">
                                I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
                            </label>
                        </div>
                        
                        <button type="submit" className="signup-btn">
                            Sign Up <i className="fas fa-arrow-right"></i>
                        </button>
                        
                        <div className="social-signup">
                            <p>Or sign up with</p>
                            <div className="social-buttons">
                                <button type="button" className="social-btn google">
                                    <i className="fab fa-google"></i>
                                </button>
                                <button type="button" className="social-btn facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                    
                    <div className="register-link">
                        <p>Already have an account? <Link to="/login">Log In</Link></p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SignUp;