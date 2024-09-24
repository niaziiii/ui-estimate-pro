import React from "react";
import { CiSearch } from "react-icons/ci";
import ManagementTable from "./ManagementTable";

export default function RecentDocument() {
  return (
    <div className="!px-3 md:p-[30px] rounded-[28px] bg-[#FFFFFF] mt-[5px] mb-[50px] flex flex-col w-full">
      <div className="flex flex-col md:flex-row items-center justify-between mb-[15px]">
        <h3 className="text-[20px] sm:text-[24px] mt-4 md:mt-0 leading-[32px] font-[600] text-[#2D3340] mb-[24px]">
          Recent Document
        </h3>
        <div className="flex items-center gap-x-[5px] border w-full max-w-[369px] rounded-[130px] overflow-hidden">
          <input
            placeholder="Search Now"
            className="border-none outline-none w-full py-[14px] pl-[30px]"
          />
          <div className="flex items-center justify-center w-[50px] cursor-pointer">
            <CiSearch className="text-xl text-[#9B9B9B]" />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto w-full p-2">
        <div className="lg:w-[700px] m-auto min-[1110px]:w-full">
          <ManagementTable />
        </div>
      </div>
    </div>
  );
}
