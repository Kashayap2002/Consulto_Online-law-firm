import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Logging in with email:', email, 'and password:', password);
  };

  return (
    <div className="login-container">
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
          <div className="signup-link">
            <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
