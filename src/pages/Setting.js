import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Settings() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ padding: "20px", flex: 1 }}>
          <h1>Settings</h1>
          <p>Adjust admin preferences and controls.</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
