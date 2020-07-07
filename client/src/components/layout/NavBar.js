import React from "react";
import { Link } from "react-router-dom";

const navStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "left",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

export default function Header() {
  return (
    <div style={navStyle}>
      <h1>Google Books</h1>
      <Link style={linkStyle} to="/">
        Search
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/saved">
        Saved
      </Link>
    </div>
  );
}
