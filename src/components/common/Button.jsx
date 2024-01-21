import React from "react";

const Button = ({ title, onclick, type, className = "" }) => {
  return (
    <button
      type={type}
      onClick={() => {
        onclick && onclick();
      }}
      className={`p-2 bg-blue-500 rounded-md font-medium text-white ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;