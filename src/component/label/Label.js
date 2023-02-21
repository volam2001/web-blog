import React from "react";

const Label = ({ htmlFor = "", children }) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="font-semibold text-[18px] cursor-pointer"
      >
        {children}
      </label>
    </>
  );
};

export default Label;
