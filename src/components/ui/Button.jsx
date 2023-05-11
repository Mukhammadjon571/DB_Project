import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="text-4xl text-white w-[320px] h-20 bg-primary"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
