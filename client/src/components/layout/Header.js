import React from "react";

const BannerStyle = {
  background: "#666666",
  color: "#fff",
  textAlign: "center",
  padding: "20px",
};

export default function Header() {
  return (
    <div style={BannerStyle}>
      <h1>(React) Google Books Search</h1>
      <h3>Search for and Save Books of Interest</h3>
    </div>
  );
}
