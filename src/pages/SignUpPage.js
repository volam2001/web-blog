import Input from "../component/input/Input";
import logo1 from "../assets/images/logo.png";
import Label from "../component/label/Label";
import { useForm } from "react-hook-form";
import Button from "../component/button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase-app/firebase-config";
import { addDoc, collection } from "firebase/firestore";

const schema = yup
  .object({
    fullname: yup
      .string()
      .required("Please enter your FullName")
      .max(10, "Must be 10 character"),
    email: yup.string().required("Please enter your Email"),
    password: yup.string().required("Please your Password"),
  })
  .required();
const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    const user = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    await updateProfile(auth.currentUser, {
      displayName: data.fullname,
    });
    const colRef = collection(db, "users");
    addDoc(colRef, {
      name: data.fullname,
      email: data.email,
      password: data.password,
    });
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  return (
    <div className="m-auto relative">
      <div className="w-[1000px] m-auto p-[20px]">
        <img className="w-[100px] m-auto" src={logo1} alt="" />

        <p className="text-center p-[10px] font-semibold text-[30px] text-[#2EBAC1]">
          Monkey Blogging
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-[50px] ">
          <div className="flex flex-col gap-[15px] w-[600px] m-auto ">
            <Label htmlFor="fullname">FullName</Label>
            <Input
              placeholder="Enter your name"
              name="fullname"
              control={control}
            />
            <p className="text-red-500 font-semibold">
              {errors.fullname?.message}
            </p>

            <Label htmlFor="email">Email address</Label>
            <Input
              name="email"
              placeholder="Enter your email"
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

            <Button type="submit">SignUp</Button>
            <p className="text-center text-[18px] ">
              Bạn đã có tài khoản?
              <Link to="/sign-in">
                <span className="text-blue-600">Đăng nhập</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
