import React from "react";

export default function Card({ title, children }) {
  const container = {
    board: "1px solid #ccc",
    boardRadius: "5px",
    padding: "10px",
    margin: "10px 0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  return (
    <div style={container}>
      <h3 style={{ borderBottom: "1px solid #eee", paddingBottom: "5px" }}>{title}</h3>
      <but>{children}</but>
    </div>
  );
}
