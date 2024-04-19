// SignUp.jsx
import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <form>
        <h1>Sign Up</h1>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" className="sign-up-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
