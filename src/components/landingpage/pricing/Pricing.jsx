import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

export default function Pricing() {
  const [activeButton, setActiveButton] = useState("yearly");
  const [activePlan, setActivePlan] = useState("standard");

  return (
    <div className="py-20 lg:py-0 lg:pt-[246px] lg:pb-[140px] overflow-hidden">
      <div
        className="font-inter text-center px-4 md:px-[130px]"
        data-aos="fade-down"
      >
        <h1 className="text-[32px] md:text-[48px] font-semibold leading-[40px] md:leading-[56px]">
          Get our Tool
        </h1>
        <p className="text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[26px] text-[#3D424D] mt-[16px]">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos.
        </p>
        <div className="text-center border inline-block rounded-[2rem] py-1 px-4 mt-[36px] bg-[#F7F7F7]">
          <button
            className={`mr-4 py-2 px-4 rounded-[1rem] ${
              activeButton === "monthly"
                ? "bg-[#003366] text-white"
                : "bg-[#F7F7F7] text-[#003366]"
            }`}
            onClick={() => setActiveButton("monthly")}
          >
            Monthly
          </button>
          <button
            className={`py-2 px-4 rounded-[1rem] ${
              activeButton === "yearly"
                ? "bg-[#003366] text-white"
                : "bg-[#F7F7F7] text-[#003366]"
            }`}
            onClick={() => setActiveButton("yearly")}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-center sm:grid-cols-2 min-[900px]:grid-cols-3 gap-[30px] mt-[42px] max-w-[1200px] mx-auto px-4">
        {/* FREE Plan */}
        <div className="w-full flex items-center justify-center">
          <div
            className={`w-[302px] font-inter rounded-[1rem] p-[30px] cursor-pointer ${
              activePlan === "free"
                ? "bg-gradient-to-r from-[#003366] to-[#0066CC] text-white"
                : "bg-white text-[#3D424D]"
            } shadow-lg`}
            onClick={() => setActivePlan("free")}
          >
            <h5 className="text-[16px] font-medium leading-[20px]">Free</h5>
            <h1 className="text-[36px] font-semibold leading-[40px] mb-1">
              $0
              <span className="text-[18px] font-medium leading-[30px]">
                {" "}
                USD
              </span>
            </h1>
            <p className="text-[12px] font-normal leading-[18px] mb-3">
              Free for your whole team
            </p>
            <hr />
            <p className="text-[16px] font-medium leading-[16px] my-4">
              Including
            </p>
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center">
                <FaRegCheckCircle
                  className={`text-${
                    activePlan === "free" ? "white" : "#003366"
                  }`}
                />
                <p className="ml-4 text-base font-normal leading-6">
                  Gross Margin
                </p>
              </div>
              <div className="flex items-center">
                <FaRegCheckCircle
                  className={`text-${
                    activePlan === "free" ? "white" : "#003366"
                  }`}
                />
                <p className="ml-4 text-base font-normal leading-6">
                  Operational Expenses
                </p>
              </div>
              <div className="flex items-center">
                <RxCrossCircled className="text-red-400" />
                <p className="ml-4 text-base font-normal leading-6">
                  Financial Impact
                </p>
              </div>
              <div className="flex items-center">
                <RxCrossCircled className="text-red-400" />
                <p className="ml-4 text-base font-normal leading-6">
                  Document Management
                </p>
              </div>
            </div>
            <div className="mt-5">
              <button className="w-full border border-[#1FAFD0] p-2 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* STANDARD Plan */}
        <div className="w-full flex items-center justify-center">
          <div
            className={`w-[302px] font-inter rounded-[1rem] p-[30px] cursor-pointer ${
              activePlan === "standard"
                ? "bg-gradient-to-r from-[#003366] to-[#0066CC] text-white"
                : "bg-white text-[#3D424D]"
            } shadow-lg`}
            onClick={() => setActivePlan("standard")}
          >
            <h5 className="text-[16px] font-medium leading-[20px]">Standard</h5>
            <h1 className="text-[36px] font-semibold leading-[40px] mb-1">
              $6
              <span className="text-[18px] font-medium leading-[30px]">
                {" "}
                USD
              </span>
            </h1>
            <p className="text-[12px] font-normal leading-[18px] mb-3">
              Free for your whole team
            </p>
            <hr />
            <p className="text-[16px] font-medium leading-[16px] my-4">
              Including
            </p>
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center">
                <FaRegCheckCircle
                  className={`text-${
                    activePlan === "standard" ? "white" : "#003366"
                  }`}
                />
                <p className="ml-4 text-base font-normal leading-6">
                  Gross Margin
                </p>
              </div>
              <div className="flex items-center">
                <FaRegCheckCircle
                  className={`text-${
                    activePlan === "standard" ? "white" : "#003366"
                  }`}
                />
                <p className="ml-4 text-base font-normal leading-6">
                  Operational Expenses
                </p>
              </div>
              <div className="flex items-center">
                <FaRegCheckCircle
                  className={`text-${
                    activePlan === "standard" ? "white" : "#003366"
                  }`}
                />
                <p className="ml-4 text-base font-normal leading-6">
                  Financial Impact
                </p>
              </div>
              <div className="flex items-center">
                <FaRegCheckCircle
                  className={`text-${
                    activePlan === "standard" ? "white" : "#003366"
                  }`}
                />
                <p className="ml-4 text-base font-normal leading-6">
                  Document Management
                </p>
              </div>
            </div>
            <div className="mt-5">
              <button className="w-full border border-[#1FAFD0] p-2 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* PREMIUM Plan */}
        <div className="w-full flex items-center justify-center">
          <div
            className={`w-[302px] font-inter rounded-[1rem] p-[30px] cursor-pointer ${
              activePlan === "premium"
                ? "bg-gradient-to-r from-[#003366] to-[#0066CC] text-white"
                : "bg-white text-[#3D424D]"
            } shadow-lg`}
            onClick={() => setActivePlan("premium")}
          >
            <h5 className="text-[16px] font-medium leading-[20px]">Premium</h5>
            <h1 className="text-[36px] font-semibold leading-[40px] mb-1">
              $12
              <span className="text-[18px] font-medium leading-[30px]">
                {" "}
                USD
              </span>
            </h1>
            <p className="text-[12px] font-normal leading-[18px] mb-3">
              Free for your whole team
            </p>
            <hr />
            <p className="text-[16px] font-medium leading-[16px] my-4">
              Including
            </p>
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center">
                <FaRegCheckCircle
                  className={`text-${
                    activePlan === "premium" ? "white" : "#003366"
                  }`}
                />
                <p className="ml-4 text-base font-normal leading-6">
                  Gross Margin
                </p>
              </div>
              <div className="flex items-center">
                <FaRegCheckCircle
                  className={`text-${
                    activePlan === "premium" ? "white" : "#003366"
                  }`}
                />
                <p className="ml-4 text-base font-normal leading-6">
                  Operational Expenses
                </p>
              </div>
              <div className="flex items-center">
                <FaRegCheckCircle
                  className={`text-${
                    activePlan === "premium" ? "white" : "#003366"
                  }`}
                />
                <p className="ml-4 text-base font-normal leading-6">
                  Financial Impact
                </p>
              </div>
              <div className="flex items-center">
                <FaRegCheckCircle
                  className={`text-${
                    activePlan === "premium" ? "white" : "#003366"
                  }`}
                />
                <p className="ml-4 text-base font-normal leading-6">
                  Document Management
                </p>
              </div>
            </div>
            <div className="mt-5">
              <button className="w-full border border-[#1FAFD0] p-2 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
