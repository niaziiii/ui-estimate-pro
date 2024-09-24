import React from "react";
import dashboardImage from "../../../assets/images/dashboard/dashboard.png";
import margin from "../../../assets/images/dashboard/margin.png";
import cost from "../../../assets/images/dashboard/cost.png";
import Expenses from "../../../assets/images/dashboard/Expenses.png";

import { RxArrowTopRight } from "react-icons/rx";

export default function Overview() {
  const content = [
    {
      value: "90%",
      line: "Gross Margin",
      iconValue: "12.5%",
      icon: <RxArrowTopRight />,
      image: margin,
    },
    {
      value: "$65",
      line: "Cost Per Item",
      iconValue: "12.5%",
      icon: <RxArrowTopRight />,
      image: cost,
    },
    {
      value: "234k",
      line: "Operational Expenses",
      iconValue: "12.5%",
      icon: <RxArrowTopRight />,
      image: Expenses,
    },
  ];
  return (
    <div className="pt-[25px] pb-[35px]">
      <div className="flex flex-col lg:flex-row justify-between gap-x-[30px] ">
        <div className="overview flex-1">
          <h1 class="font-inter text-[20px] sm:text-[24px] font-semibold leading-[32px] mb-6">
            Overview
          </h1>
          <div className=" bg-white py-[25px] px-[20px]  rounded-[18px] w-full">
            <div className="flex justify-between items-center">
              <h1 class="font-inter text-[20px] font-semibold leading-[28px] ">
                Charts
              </h1>
              <button class="rounded-[11.17px] font-inter text-[14px] font-medium leading-[16px] text-center text-[#585C67] px-[15px] py-[12px]  border border-[#EBEBEB] transition-transform delay-300 hover:bg-[#003366] hover:text-white">
                View more
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 xl:grid-cols-3">
              {content.map((CrlElm, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center w-full"
                >
                  <div className="border h-full w-full md:max-w-[280px] mt-[25px] rounded-[18px] p-[20px]">
                    <div className="flex justify-between ">
                      <div className="content">
                        <h1 class="font-inter text-[36px] font-extrabold leading-[42px] text-[#2D3340]">
                          {CrlElm.value}
                        </h1>
                        <p class="font-inter text-[16px] font-medium leading-[20px] text-[#585C67] mb-10 mt-2">
                          {CrlElm.line}
                        </p>
                      </div>
                      <div className="flex  text-[#12B757] font-inter text-[14px] font-normal leading-[20px] text-left">
                        <p className="mt-[4px] font-bold">{CrlElm.icon}</p>
                        <p>{CrlElm.iconValue}</p>
                      </div>
                    </div>
                    <img src={CrlElm.image} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* //////////////////  Project */}

        <div className="overview mt-10 lg:mt-0 mx-4 lg:mx-0 w-[229px] h-[364px]">
          <h1 class="font-inter text-[24px] font-semibold leading-[32px] mb-6">
            Project
          </h1>
          <div className=" bg-white py-[5px] px-[2px] rounded-[18px] w-[239px] h-[312px]">
            <img src={dashboardImage} alt="" className=" " />
          </div>
        </div>
      </div>
    </div>
  );
}
