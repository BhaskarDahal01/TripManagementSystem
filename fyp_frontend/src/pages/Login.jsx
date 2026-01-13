import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [showModal, setShowModal] = useState(true); // OPEN DIRECTLY
  const [isSignup, setIsSignup] = useState(false);
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  let toastTimer;

  const showToast = (message) => {
    setToast(message);

    toastTimer = setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const closeToast = () => {
    clearTimeout(toastTimer);
    setToast(null);
  };

  const handleLogin = () => {
    showToast("Login successfully");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const handleSignup = () => {
    showToast("Account created successfully");
    setTimeout(() => {
      setIsSignup(false);
    }, 3000);
  };

  return (
    <>
      {/* BACKGROUND BLUR */}
      <div className="login-container blur" />

      {/* SUCCESS TOAST */}
      {toast && (
        <div className="toast">
          <span className="toast-close" onClick={closeToast}>
            &times;
          </span>
          {toast}
          <div className="toast-bar" />
        </div>
      )}

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            {!isSignup ? (
              <>
                <h3>Login</h3>

                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />

                <button className="submit-btn" onClick={handleLogin}>
                  Login
                </button>

                <p className="switch-text">Don’t have an account?</p>

                <button
                  className="switch-btn"
                  onClick={() => setIsSignup(true)}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <h3>Create Account</h3>

                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="date" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Mobile Number" />
                <input type="password" placeholder="Password" />

                <button className="submit-btn" onClick={handleSignup}>
                  Create Account
                </button>

                <p className="switch-text">Already have an account?</p>

                <button
                  className="switch-btn"
                  onClick={() => setIsSignup(false)}
                >
                  Back to Login
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
