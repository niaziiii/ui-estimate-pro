import React from "react";
import SignupImage from "../../../assets/images/signup/Frame.png";

export default function Signup() {
  return (
    <div className="overflow-hidden flex justify-center items-center min-h-screen bg-[#EDF3FA]">
      <div className="pb-[115px] px-4 md:px-[70px] lg:px-[130px]">
        <div className="pt-[50px] lg:pt-[101px] gap-x-[24px] lg:gap-x-[48px] flex flex-col lg:flex-row items-center justify-center">
          {/* Image for larger screens */}
          <div className="w-full xl:w-[497px] mb-6 lg:mb-0">
            <img
              data-aos="fade-up"
              src={SignupImage}
              className="rounded-2xl w-full h-auto object-contain"
              alt="page img"
            />
          </div>

          {/* Form section */}
          <div
            className="w-full lg:w-[618px] bg-white p-6 lg:p-[42px] rounded-[1.5rem]"
            data-aos="fade-down"
          >
            <h2 className="font-inter text-[32px] lg:text-[42px] font-semibold leading-[36px] lg:leading-[46px] text-center text-[#2D3340]">
              Sign Up
            </h2>
            <form className="mt-[40px] lg:mt-[60px]">
              <div>
                <label className="font-inter text-[14px] lg:text-[16px] font-medium leading-[22px]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-4 py-3 rounded-lg font-inter text-[14px] lg:text-[16px] leading-[22px] text-[#A0A4AD] bg-white mt-2 border focus:border-[#003366] focus:outline-none"
                />
              </div>

              <div className="mt-[20px]">
                <label className="font-inter text-[14px] lg:text-[16px] font-medium leading-[22px]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-4 py-3 rounded-lg font-inter text-[14px] lg:text-[16px] leading-[22px] text-[#A0A4AD] bg-white mt-2 border focus:border-[#003366] focus:outline-none"
                />
              </div>

              <div className="mt-[20px]">
                <label className="font-inter text-[14px] lg:text-[16px] font-medium leading-[22px]">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg font-inter text-[14px] lg:text-[16px] leading-[22px] text-[#A0A4AD] bg-white mt-2 border focus:border-[#003366] focus:outline-none"
                />
              </div>

              <div className="mt-[20px]">
                <label className="font-inter text-[14px] lg:text-[16px] font-medium leading-[22px]">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Confirm Password"
                  className="w-full px-4 py-3 rounded-lg font-inter text-[14px] lg:text-[16px] leading-[22px] text-[#A0A4AD] bg-white mt-2 border focus:border-[#003366] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#003366] text-white font-semibold rounded-lg px-4 py-3 mt-6 transition-colors duration-300 hover:bg-[#2ECC71]"
              >
                Sign Up
              </button>
            </form>

            <div className="flex items-center gap-x-4 my-6">
              <div className="border-b border-[#EBEBEB] w-full"></div>
              <h1 className="text-sm">Or</h1>
              <div className="border-b border-[#EBEBEB] w-full"></div>
            </div>

            <div className="flex justify-center gap-2">
              <p>Already have an account?</p>
              <button className="font-inter text-[14px] font-semibold leading-[20px] text-[#26175A]">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
