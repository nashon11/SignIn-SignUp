import React from 'react';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <form>
        <h1>Sign In</h1>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" className="sign-in-button">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
