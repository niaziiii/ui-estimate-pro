import React from "react";
import SigninImage from "../../assets/images/Signin/Signin.png";
import facebook from "../../assets/images/Signin/facebook.png";
import google from "../../assets/images/Signin/google.png";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="content">
          <div className="bg-[#EDF3FA] px-10 md:px-20 min-[1110px]:px-32 py-12 md:py-18 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
              <div className="w-full min-w-[1100px]:w-[497px] h-auto">
                <h1 className="font-inter text-[24px] md:text-[29px] font-bold leading-[34px] md:leading-[42px] text-center mb-8 md:mb-16">
                  Do you Need Project Management? Let’s Us Help!
                </h1>
                <img
                  src={SigninImage}
                  className="rounded-2xl  lg:w-full h-auto w-[450px] m-auto"
                  alt="page img"
                />
              </div>
              <div className="w-full bg-white px-6 md:px-16 py-8 md:py-16 rounded-[1.5rem]">
                <h2 className="font-inter text-[32px] md:text-[42px] font-semibold leading-[36px] md:leading-[46px] mb-12 md:mb-24 text-center text-[#2D3340]">
                  Sign In
                </h2>
                <form
                  className="mt-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    navigate("/dashboard");
                  }}
                >
                  <div className="mt-2">
                    <label className="font-inter text-[16px] font-medium leading-[22px]">
                      Email
                    </label>
                    <input
                      type="email"
                      name=""
                      id=""
                      required
                      placeholder="Enter Email"
                      className="w-full px-4 py-3 rounded-lg font-inter text-[16px] font-normal leading-[26px] text-[#A0A4AD] bg-white mt-2 border focus:border-[#003366] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="font-inter text-[16px] font-medium leading-[22px]">
                      Password
                    </label>
                    <input
                      type="password"
                      name=""
                      id=""
                      required
                      placeholder="Enter Password"
                      className="w-full px-4 py-3 rounded-lg font-inter text-[16px] font-normal leading-[26px] text-[#A0A4AD] bg-white mt-2 border focus:border-[#003366] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <Link to={"/forget-password"}>
                    <p className="text-[#F6220E] font-inter text-[14px] font-medium leading-[20px] text-right pt-2">
                      Forget Password?
                    </p>
                  </Link>

                  <button
                    type="submit"
                    className="w-full block bg-[#003366] text-white font-semibold rounded-lg px-4 py-3 mt-6 transition-colors duration-300 hover:bg-[#2ECC71]"
                  >
                    Sign In
                  </button>
                </form>
                <div className="flex items-center gap-x-5 my-5">
                  <div className="border-b border-[#EBEBEB] w-full"> </div>
                  <h1>Or</h1>
                  <div className="border-b border-[#EBEBEB] w-full"> </div>
                </div>

                <div className="flex justify-center bg-[#F7F7F7] py-3 rounded-lg mb-4">
                  <img src={facebook} alt="" className="pr-3 " />
                  <button className="font-inter text-[16px] font-normal leading-[26px]">
                    Continue with Facebook
                  </button>
                </div>

                <div className="flex justify-center bg-[#F7F7F7] py-3 rounded-lg mb-7">
                  <img src={google} alt="" className=" pr-3 " />
                  <button className="font-inter text-[16px] font-normal leading-[26px]">
                    Continue with Google
                  </button>
                </div>

                <div className="flex justify-center gap-2">
                  <p>Don’t have an account?</p>
                  <Link to={"/signup"}>
                    <button className="font-inter text-[14px] font-semibold leading-[20px] text-[#26175A]">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
