import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const handle = () => {
    navigate("/sign-up");
  };
  return (
    <>
      <div className="flex justify-between mx-[50px] mt-[40px]">
        <div className="flex items-center justify-center">
          <img className="w-[50px]  mr-[50px]" src={logo} alt="" />
          <ul className="flex">
            <li className="mr-[40px] font-medium text-[20px]">Home</li>
            <li className="mr-[40px] font-medium text-[20px]">Contact</li>
            <li className="mr-[40px] font-medium text-[20px]">Blog</li>
          </ul>
        </div>

        <div className="flex items-center justify-center ">
          <div className=" flex items-center w-[300px] h-[50px] border-[1px] border-stale-200 rounded-md">
            <input
              className="h-4/5 outline-none w-full mx-[10px] "
              placeholder="Search posts"
              type="text"
            />
            <i className=" mr-[10px] fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="ml-[30px]">
            <button
              onClick={handle}
              className=" bg-[#00B4AA] w-[160px] h-[50px]  text-[20px] text-white rounded-md "
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
