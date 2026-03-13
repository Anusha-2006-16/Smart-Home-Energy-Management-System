import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8080/api/users/reset-password?email=${email}&otp=${otp}&newPassword=${newPassword}`
      );

      setMessage(res.data);

      if(res.data === "Password reset successful"){
        setTimeout(() => navigate("/login"), 1500);
      }

    } catch (error) {
      setMessage("Reset failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Reset Password</h2>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleReset}>Reset Password</button>

      <p>{message}</p>
    </div>
  );
};

export default ResetPassword;