import React, { useState } from 'react';
import './login.css';

export default function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/home";


  };

  return (
    <div className="main-container">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
          </div>

          <div className="input-box">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              required
            />
          </div>

          <div className="rem-for">
            <div>

            <input
              type="checkbox"
              id="showPasswordCheckbox"
              onChange={togglePasswordVisibility}
              />
            <label htmlFor="showPasswordCheckbox">Show Password</label>
              </div>
            <a href="https://www.google.com" target="home.js" rel="noopener noreferrer">
              Forgot password?
            </a>
          </div>

          <button type="submit">Login</button>

          <div className="reg-link">
            <p>Don't have an account?</p>
            <a href="/signin">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
}
