import React from "react";

function Navbar() {
  return (
    <div style={styles.nav}>
      <h3>RewardTube Admin</h3>
    </div>
  );
}

const styles = {
  nav: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "15px",
    textAlign: "center",
    fontWeight: "bold",
  },
};

export default Navbar;
