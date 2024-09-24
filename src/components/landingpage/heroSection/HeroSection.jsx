import React from "react";
import heroImage from "../../../assets/images/heroSection/heroImage.png";
import Donut from "../../../assets/images/heroSection/Donut.png";
import Line from "../../../assets/images/heroSection/Line.png";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="h-[100%] xl:h-[100vh] overflow-hidden">
      <Navbar />
      <div
        className=" flex justify-center h-full px-4 pr-0 lg:pl-[6rem] xl:pl-[8rem]"
        style={{
          background: "linear-gradient(105.83deg, #ECF5FF 0%, #F4FCFF 101.46%)",
        }}
      >
        <div className="flex flex-col lg:grid grid-cols-2 items-center gap-[20px] lg:gap-[97px] relative">
          <div
            className="px-4 md:px-[70px] lg:px-0 w-full lg:w-[500px] xl:max-w-[549px] xl:min-w-[549px] xl:w-[549px]"
            data-aos="fade-right"
          >
            <h1 className="font-inter text-[3rem] mt-12 md:mt-20 lg:mt-0 md:text-[4rem] lg:text-[5rem] font-bold leading-[3.5rem] md:leading-[4.5rem] lg:leading-[5.5rem] tracking-[-0.02em] text-[#373737] mb-[12px] sm:mb-[24px] md:mb-[30px] lg:mb-[36px]">
              Your Preferred Workspace
            </h1>

            <p className="font-inter text-[16px] font-medium leading-[26px] text-left mb-5 sm:mb-[60px] pr-10 md:pr-24 sm:pr-0">
              Simplify processes and provide teams with unobstructed vision so
              they can confidently make strategic decisions.
            </p>
            <div className="flex items-center justify-between">
              <Link to={"/signup"}>
                <button className="py-[14px] px-[42px] text-[16px] leading-[24px] font-medium bg-[#2ECC71] rounded-[3rem] text-white transition-colors duration-300 hover:bg-[#003366] ">
                  Get Started
                </button>
              </Link>
              <img
                src={Line}
                alt="Decorative Line"
                className="w-[30px] sm:w-[38px] h-auto"
                style={{ visibility: "visible", display: "block" }}
              />
            </div>
          </div>
          <div
            className="absolute  top-[29px] lg:top-[69px] right-3 md:left-[200px] min-[1100px]:left-[400px] xl:left-[559px] transform -translate-x-1/2 sm:translate-x-0"
            data-aos="fade-left"
          >
            <img src={Donut} alt="" className="sm:mx-0" />
          </div>

          <div
            className="flex justify-center items-center"
            data-aos="fade-left"
          >
            <img
              src={heroImage}
              className="lg:h-[538px] md:w-[657px] object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
