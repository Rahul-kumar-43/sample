import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

export default function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:5001/users', {
        params: { email: formData.username }
      });
      const user = response.data[0]; 

      if (user && user.password === formData.password) {
        alert("Login successful");
        window.location.href = "/home"; 
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="main-container">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>

          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="E-mail"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="rem-for">
            <div className="rem-for">
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
