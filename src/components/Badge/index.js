import React from "react";

const Badge = ({ text, color }) => {
  return (
    <span
      style={{
        position: "relative",
        marginRight: 16,
        padding: "4px 16px",
        background: color.primary,
        fontSize: 12
      }}
    >
      <div
        style={{
          content: "",
          position: "absolute",
          bottom: 0,
          right: 0,
          background: color.secondary,
          height: 8,
          width: 8
        }}
      />
      <div
        style={{
          content: "",
          position: "absolute",
          bottom: 0,
          right: -8,
          height: 8,
          width: 8,
          background: color.primary
        }}
      />
      {text}
    </span>
  );
};

export default Badge;
