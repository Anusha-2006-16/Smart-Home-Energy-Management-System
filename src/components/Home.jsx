import React, { useState } from "react";
import "./css/home.css";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

const Home = () => {
  const [devices, setDevices] = useState([
    { id: 1, name: "Air Conditioner", status: true, power: 2.5 },
    { id: 2, name: "Fan", status: false, power: 0.2 },
    { id: 3, name: "TV", status: true, power: 0.8 },
    { id: 4, name: "Refrigerator", status: true, power: 1.5 },
    { id: 5, name: "Lights", status: false, power: 0.1 }
  ]);

  // Toggle device ON/OFF
  const toggleDevice = (id) => {
    const updatedDevices = devices.map((device) =>
      device.id === id ? { ...device, status: !device.status } : device
    );
    setDevices(updatedDevices);
  };

  // Dashboard calculations
  const totalDevices = devices.length;
  const devicesOn = devices.filter((d) => d.status).length;
  const devicesOff = devices.filter((d) => !d.status).length;
  const totalEnergy = devices
    .filter((d) => d.status)
    .reduce((sum, d) => sum + d.power, 0);

  // Chart Data
  const deviceStatusData = [
    { name: "ON", value: devicesOn },
    { name: "OFF", value: devicesOff }
  ];

  const energyData = devices.map((d) => ({
    name: d.name,
    value: d.status ? d.power : 0
  }));

  const COLORS = ["#4CAF50", "#F44336", "#2196F3", "#FF9800", "#9C27B0"];

  return (
    <div className="home-container">
      <h1 className="welcome-text text-light">
        Smart Home Energy Management System ⚡
      </h1>

      <p className="home-description">
        Monitor your energy usage and control smart devices easily.
      </p>

      {/* Dashboard Cards */}
      <div className="summary-cards">
        <div className="card">
          <h3>Total Devices</h3>
          <p className="card-value text-dark">{totalDevices}</p>
        </div>
        <div className="card on-card">
          <h3>Devices ON</h3>
          <p className="card-value text-dark">{devicesOn}</p>
        </div>
        <div className="card off-card">
          <h3>Devices OFF</h3>
          <p className="card-value text-dark">{devicesOff}</p>
        </div>
        <div className="card energy-card">
          <h3>Total Energy Consumption</h3>
          <p className="card-value text-dark">{totalEnergy.toFixed(2)} kWh</p>
        </div>
      </div>

      {/* Charts Section */}
      <h2 className="device-title text-light">Statistics</h2>
      <div className="charts-container">
        {/* Pie Chart for Device Status */}
        <div className="chart">
          <h4 className="text-light">Device Status</h4>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={deviceStatusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {deviceStatusData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Dynamic Bar Chart for Energy Consumption */}
        <div className="chart">
          <h4 className="text-light">Energy Consumption per Device (kWh)</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={energyData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value">
                {energyData.map((entry, index) => (
                  <Cell
                    key={`cell-bar-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Device Controls Section */}
      <h2 className="device-title text-light">Device Controls</h2>
      <div className="device-list">
        {devices.map((device) => (
          <div className="device-card" key={device.id}>
            <div>
              <h4>{device.name}</h4>
              <p className="text-dark">{device.status ? "ON" : "OFF"}</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={device.status}
                onChange={() => toggleDevice(device.id)}
              />
              <span className="slider"></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;