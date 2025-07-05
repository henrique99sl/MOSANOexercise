import React from "react";

export default function Spinner() {
  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <div style={{
        border: "4px solid #f3f3f3",
        borderTop: "4px solid blue",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        animation: "spin 1s linear infinite",
        margin: "0 auto"
      }}></div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
