import React from "react";
import "./signup.css";

function SignUp() {
  const onSubmit = () =>{
    alert("Reistration successfull")
  }
  return (
    <div className="main-container">
      <div className="signup-box">
        <form action="">
          <h1>SIGN UP</h1>

          <div className="input-box">
            <input type="text" placeholder="First Name" required />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirm your password" required />
          </div>

          <button type="submit" onClick={onSubmit}>Register</button>
          {/* <button type="submit" onClick={Popup}>Register</button> */}
          <div className="reg-link">
            <p>Already have an account?</p>
            <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
