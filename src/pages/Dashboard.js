import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ padding: "20px", flex: 1 }}>
          <h1>Dashboard</h1>
          <p>Welcome to your RewardTube Admin Panel.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
