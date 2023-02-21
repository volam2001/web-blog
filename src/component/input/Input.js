import React from "react";
import { useController } from "react-hook-form";
// import { useController } from "react-hook-form";
const Input = ({ name, type, control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <>
      <input
        id={name}
        className=" outline-none p-4 rounded-md text-[18px] bg-[#E7ECF3] focus:bg-white focus:border-2  focus: border-blue-600 "
        type={type}
        {...props}
        {...field}
      />
    </>
  );
};

export default Input;
