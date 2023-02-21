import React, { useContext, useEffect } from "react";
import Label from "../component/label/Label";
import Input from "../component/input/Input";
import logo from "../assets/images/logo.png";
import { useForm } from "react-hook-form";
import Button from "../component/button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-app/firebase-config";
import { AuthContext } from "../contexts/AuthContext";
const schema = yup
  .object({
    email: yup.string().required("Please enter your Email"),
    password: yup.string().required("Please your Password"),
  })
  .required();
const SignInPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { userInfo } = useContext(AuthContext);
  // useEffect(() => {
  //   if (!userInfo?.email) navigate("/sign-up");
  //   else navigate("/");
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    navigate("/");
  };

  return (
    <div className="m-auto relative">
      <div className="w-[1000px] m-auto p-[20px]">
        <img className="w-[100px] m-auto" src={logo} alt="" />

        <p className="text-center p-[10px] font-semibold text-[30px] text-[#2EBAC1]">
          Monkey Blogging
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-[50px] ">
          <div className="flex flex-col gap-[15px] w-[600px] m-auto ">
            <Label htmlFor="email">Email Address</Label>
            <Input
              placeholder="Enter your Email"
              name="email"
              control={control}
            />
            <p className="text-red-500 font-semibold">
              {errors.email?.message}
            </p>
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              control={control}
            />
            <p className="text-red-500 font-semibold">
              {errors.password?.message}
            </p>

            <Button type="submit">SignIn</Button>
            <p className="text-center text-[18px] ">
              Bạn chưa có tài khoản?
              <Link to="/sign-up">
                <span className="text-blue-600">Đăng kí</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
