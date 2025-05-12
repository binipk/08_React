import React from "react";

export const GreetingWithDefault = ({ name = "손" }) => {
  return (
    <div style={{ background: "rgba(0,0,255, 0.2)", border: "1px solid #ddd", padding: "5px", margin: "5px 0" }}>
      <h2>안녕하세요 {name}님</h2>
    </div>
  );
};
