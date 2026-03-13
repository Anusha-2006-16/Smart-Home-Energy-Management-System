import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
   const handleSendOtp = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8080/api/users/forgot-password?email=${email}`
      );

      setMessage(res.data);

      if(res.data === "OTP sent to your email"){
        navigate("/reset-password", { state: { email } });
      }

    } catch (error) {
      setMessage("Something went wrong");
    }
  };
  return (
    
    <div>
       <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your registered email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
      />
      <br /><br />
      <button onClick={handleSendOtp}>Send OTP</button>
      <p>{message}</p>
    </div>
    </div>
  )
}
