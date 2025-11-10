import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "12345") {
      navigate("/dashboard");
    } else {
      alert("Incorrect login details");
    }
  };

  return (
    <div style={styles.container}>
      <h2>RewardTube Admin Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: { display: "flex", flexDirection: "column", alignItems: "center", marginTop: "100px" },
  form: { display: "flex", flexDirection: "column", width: "250px", gap: "10px" },
  input: { padding: "10px", fontSize: "16px" },
  button: { padding: "10px", fontSize: "16px", backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer" },
};

export default Login;
