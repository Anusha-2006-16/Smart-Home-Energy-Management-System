import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const OtpForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const handleVerify = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8080/api/otp/verify?email=${email}&otp=${otp}`
      );

      setMessage(res.data);

      if (res.data === "OTP verified successfully") {
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }

    } catch (error) {
      console.error(error);
      setMessage("OTP verification failed.");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #1e3c72, #2a5298)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "12px",
          width: "350px",
          textAlign: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ marginBottom: "10px", color: "#333" }}>
          OTP Verification
        </h2>

        <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Enter OTP sent to <br />
          <strong>{email}</strong>
        </p>

        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
            textAlign: "center",
            letterSpacing: "4px",
          }}
        />

        <button
          onClick={handleVerify}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#2a5298",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Verify OTP
        </button>

        {message && (
          <p
            style={{
              marginTop: "15px",
              fontSize: "14px",
              color:
                message === "OTP verified successfully"
                  ? "green"
                  : "red",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default OtpForm;