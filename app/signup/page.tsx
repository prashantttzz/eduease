import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col justify-between h-full p-5 md:p-3">
        <div className="flex flex-col mt-3 gap-5 md:gap-1 h-full">
      <h1 className=" w-[60%] md:w-1/2  font-bold text-3xl md:leading-6  md:text-lg">
        Create your PopX account
      </h1>
      <div className="mt-3 flex flex-col gap-5 md:gap-3">
        <div className="relative w-full">
          <label className=" absolute bg-gray-100 text-[#6C25FF] -top-3 md:-top-2 left-3 px-1 md:text-xs  z-10">
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            placeholder="Marry Doe"
            className="  w-full md:text-xs  rounded-sm  border border-gray-300  px-3  py-4 md:py-2   focus:outline-none "
          />
        </div>
        <div className="relative w-full">
          <label className=" absolute bg-gray-100 text-[#6C25FF] -top-3 md:-top-2 left-3 px-1 md:text-xs  z-10">
            Phone Number <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            placeholder="Marry Doe"
            className="  w-full md:text-xs  rounded-sm  border border-gray-300  px-3  py-4 md:py-2   focus:outline-none "
          />
        </div>
        <div className="relative w-full">
          <label className=" absolute bg-gray-100 text-[#6C25FF] -top-3 md:-top-2 left-3 px-1 md:text-xs  z-10">
            Email Address <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            placeholder="Marry Doe"
            className="  w-full md:text-xs  rounded-sm  border border-gray-300  px-3  py-4 md:py-2   focus:outline-none "
          />
        </div>
        <div className="relative w-full">
          <label className=" absolute bg-gray-100 text-[#6C25FF] -top-3 md:-top-2 left-3 px-1 md:text-xs z-10">
            Password <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            placeholder="Marry Doe"
            className="  w-full md:text-xs  rounded-sm  border border-gray-300  px-3  py-4 md:py-2   focus:outline-none "
          />
        </div>
        <div className="relative w-full">
          <label className=" absolute bg-gray-100 text-[#6C25FF] -top-3 md:-top-2 left-3 px-1 md:text-xs  z-10">
            Comapny Name
          </label>

          <input
            type="text"
            placeholder="Marry Doe"
            className="  w-full md:text-xs  rounded-sm  border border-gray-300  px-3  py-4 md:py-2   focus:outline-none "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            Are you an agency? <span className="text-red-500">*</span>
          </label>

          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="agency"
                value="yes"
                className="accent-purple-600"
              />
              <span className="text-sm">Yes</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="agency"
                value="no"
                className="accent-purple-600"
              />
              <span className="text-sm">No</span>
            </label>
          </div>
        </div>
      </div>
    </div>
      <button className="bg-[#6C25FF] md:text-xs p-3 md:p-2 rounded-sm text-white cursor-pointer">
        <Link href="/account"> Create Account</Link>{" "}
      </button>
    </div>
  );
};

export default SignUp;
