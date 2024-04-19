import React from "react";
import SignIn from "./SignIn";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="sign-up-container">
        <div className="sign-up-header">
          <h1>Sign Up</h1>
          <p>Create your account now to get started.</p>
        </div>
        <div className="sign-in-link">
          <p>Already have an account?</p>
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
