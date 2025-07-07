import React from "react";
import "./styles.css";

export default function Button({ children, variant = "default", onClick }) {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}
