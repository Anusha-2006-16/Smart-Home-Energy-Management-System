import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/register.css"
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    gender: "",
    phone: "",
    interest: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return false;
    }
    return true;
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
 
   try {
   const res = await axios.post("http://localhost:8080/api/users/register", {
  name: formData.name,
  email: formData.email,
  password: formData.password,
  address: formData.address,
  gender: formData.gender,
  phone: formData.phone,
  interest: formData.interest
});
    // message from backend: "User registered. OTP sent!"
    alert(res.data);
    
    //move to otp verification page (or step)
    navigate("/otp",{state:{email:formData.email}});

   } catch (error) {
     console.error(error);
    alert("Registration failed. Please try again.");
   }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      gender: "",
      phone: "",
      interest: "",
    });
  };

  return (
    <div className="register-wrapper">
      <div className="heading">
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.b7jJYCzP0fJuZXOhIvMy2gHaE8?w=1140&h=760&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="icon"
          className="icon"
        />
        <h1>Smart Home Energy Management System</h1>
      </div>

      <div className="signUpBody">
        <form className="signUpForm" onSubmit={handleSubmit}>
          <h1>Registration Form</h1>

          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            minLength="4"
            placeholder="Enter Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            placeholder="Enter a valid Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password:</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$"
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

          <label>Confirm Password:</label>
          <div className="password-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              color="black"
               pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              placeholder="Enter password again"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <span
              className="eye-icon"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              👁
            </span>
          </div>

          <label>Address:</label>
          <textarea
            name="address"
            minLength="5"
            maxLength="100"
            value={formData.address}
            onChange={handleChange}
          />

          <label>Gender:</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            />{" "}
            Female
          </div>

          <label>Ph No:</label>
          <input
            type="tel"
            name="phone"
            pattern="^[6-9]\d{9}$"
            placeholder="Enter mobile number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Primary Interest:</label>
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
          >
            <option value="">--Select an option--</option>
            <option value="energy_efficiency">Energy Efficiency</option>
            <option value="security">Security</option>
            <option value="comfort">Comfort</option>
            <option value="convenience">Convenience</option>
          </select>

          <button type="submit">Sign Up</button>
          <button type="button" onClick={resetForm}>
            Reset
          </button>
        </form>
      </div>

      <p style={{color:"white"}}>
        Already have an account? <a href="/login">Login Here</a>
      </p>
    </div>
  );
};

export default Register;
