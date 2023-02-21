import React from "react";

const Button = ({ children }) => {
  return (
    <button className="w-full p-4 bg-[#00A7B4] text-[20px] text-white font-semibold">
      {children}
    </button>
  );
};

export default Button;
