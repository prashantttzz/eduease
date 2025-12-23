import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className="flex flex-col mt-3 gap-5 md:gap-1 p-5 md:p-3">
      <h1 className=" w-[70%] md:w-1/2  font-bold text-3xl md:leading-6  md:text-lg">
        Signin to your PopX account
      </h1>
      <p className="text-lg md:text-xs text-gray-500">
        Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.
      </p>
      <div className="mt-3 flex flex-col gap-5 md:gap-3">
        <div className="relative w-full">
          <label className=" absolute bg-gray-100 text-[#6C25FF] -top-3 md:-top-2 left-3 px-1 md:text-xs  z-10">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter email address"
            className="  w-full md:text-xs  rounded-md  border border-gray-300  px-3  py-4 md:py-2   focus:outline-none "
          />
        </div>
        <div className="relative w-full">
          <label className=" absolute bg-gray-100 text-[#6C25FF] -top-3 md:-top-2 left-3 px-1 md:text-xs  z-10">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            className="  w-full md:text-xs  rounded-md  border border-gray-300  px-3  py-4 md:py-2   focus:outline-none "
          />
        </div>
        <button className="bg-[#CBCBCB] md:text-xs p-3 md:p-2 rounded-sm text-white cursor-pointer">
<Link href="/account">          Login
</Link>        </button>
      </div>
    </div>
  );
};

export default SignIn;
