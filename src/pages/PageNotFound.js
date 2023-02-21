import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-center items-center">
      <div className="flex flex-col h-[200px] mt-[100px] ">
        <p className="text-[40px] font-semibold">Oops! Page Not found</p>
        <button
          onClick={() => navigate("/")}
          className="p-3 text-white bg-[#00B4AA] rounded-md"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
