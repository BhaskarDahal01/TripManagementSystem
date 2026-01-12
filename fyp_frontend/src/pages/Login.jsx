import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <p>React Router is working!</p>

      {/* Button to open modal */}
      <button className="login-btn" onClick={() => setShowModal(true)}>
        Login
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            {/* Close button */}
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>

            <h3>Login</h3>

            <input type="email" placeholder="Enter Email" />
            <input type="password" placeholder="Enter Password" />

            <button className="submit-btn">Login</button>

            {/* Sign Up link at bottom */}
            <p className="signup-text">
              Don't have an account?{" "}
              <span
                className="signup-link"
                onClick={() => {
                  setShowModal(false);
                  alert("Redirect to Sign Up page"); // Replace with your SignUp routing
                }}
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
