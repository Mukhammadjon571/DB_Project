import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="text-2xl text-white w-[280px] h-12 bg-primary"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
