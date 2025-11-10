import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <Link to="/dashboard" style={styles.link}>Dashboard</Link>
      <Link to="/users" style={styles.link}>Users</Link>
      <Link to="/settings" style={styles.link}>Settings</Link>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "18px",
  },
};

export default Sidebar;
