import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/login.css";
  import axios from "axios";
export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:8080/api/users/login",
      {
        email: formData.email,
        password: formData.password,
      }
    );

    alert(response.data);

    if (response.data === "Login Successful") {
      navigate("/"); 
    }

  } catch (error) {
    console.error(error);
    alert("Login failed. Please try again.");
  }
};

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group password-wrapper">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              color="black"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </span>
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>
<div style={{ textAlign: "right", marginBottom: "15px" }}>
  <Link
    to="/forgot-password"
    style={{
      fontSize: "14px",
      color: "#2a5298",
      textDecoration: "none",
      fontWeight: "500"
    }}
  >
    Forgot Password?
  </Link>
</div>
        <p className="switch-text">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}