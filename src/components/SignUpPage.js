import React, { useState } from 'react';
import './SignUpPage.css';

function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [description, setDescription] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log('Signing up with:', {
      name,
      email,
      phoneNumber,
      selectedServices,
      description,
      password
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Logging in with email:', email, 'and password:', password);
  };

  const servicesOptions = [
    "Option 1",
    "Option 2",
    "Option 3",
    // Add more options...
  ];

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <label htmlFor="selectedServices">Services Needed:</label>
          <select
            id="selectedServices"
            name="selectedServices"
            multiple
            value={selectedServices}
            onChange={(e) => setSelectedServices(Array.from(e.target.selectedOptions, (option) => option.value))}
            required
          >
            {servicesOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          <label htmlFor="description">Description of Case:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="login-email">Email:</label>
          <input
            type="email"
            id="login-email"
            name="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="login-password">Password:</label>
          <input
            type="password"
            id="login-password"
            name="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
