import React from "react";
import {
  FaHome,
  FaFileAlt,
  FaUsers,
  FaCog,
  FaUserShield,
} from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { IconButton } from "@mui/material";

const Sidebar = ({ toggle, open }) => {
  return (
    <div
      className={`lg:flex flex-col fixed lg:relative top-0 left-0 z-20 h-[100vh] w-[260px] bg-white shadow-lg border-r transition-transform transform ${
        open ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="absolute top-1 right-1 text-2xl cursor-pointer lg:hidden">
        <IconButton onClick={() => toggle(false)}>
          <IoIosClose className="" />
        </IconButton>
      </div>
      <div className="flex py-7 items-center justify-center">
        <NavLink to="/dashboard">
          <img
            src={logo}
            alt="Project Estimate Pro"
            className="w-[175.22px] h-[35.48px]"
          />
        </NavLink>
      </div>

      <nav className="flex flex-col mt-4 pr-8 gap-y-[1px] h-full relative">
        <p className="pr-4 py-2 text-[16px] text-[#737780] font-[500] leading-[22px] pl-10">
          Menu
        </p>
        <NavLink
          to="/dashboard"
          onClick={() => toggle(false)}
          className={({ isActive }) =>
            `flex font-[500] text-[14px] leading-[20px] rounded-r-2xl border-l-2 items-center px-4 py-[15px] pl-6 hover:bg-gray-100 hover:text-[#003366] transition ${
              isActive
                ? "bg-gray-100 border-l-[#003366] text-[#003366]"
                : "text-[#737780] border-l-transparent"
            }`
          }
        >
          <FaHome className="w-5 h-5 mr-3" />
          Dashboard
        </NavLink>
        <NavLink
          to="/documents"
          onClick={() => toggle(false)}
          className={({ isActive }) =>
            `flex font-[500] text-[14px] border-l-2 leading-[20px] items-center px-4 py-[15px] rounded-r-2xl pl-6 hover:bg-gray-100 hover:text-[#003366] transition ${
              isActive
                ? "bg-gray-100 border-l-[#003366] text-[#003366]"
                : "text-[#737780] border-l-transparent"
            }`
          }
        >
          <FaFileAlt className="w-5 h-5 mr-3" />
          Documents
        </NavLink>
        <NavLink
          to="/resources"
          onClick={() => toggle(false)}
          className={({ isActive }) =>
            `flex font-[500] text-[14px] leading-[20px] items-center px-4 py-[15px] rounded-r-2xl pl-6 hover:bg-gray-100 hover:text-[#003366] transition ${
              isActive
                ? "bg-gray-100 border-l-[#003366] text-[#003366]"
                : "text-[#737780] border-l-transparent"
            }`
          }
        >
          <FaUsers className="w-5 h-5 mr-3" />
          Resources
        </NavLink>
        <NavLink
          to="/admin"
          onClick={() => toggle(false)}
          className={({ isActive }) =>
            `flex font-[500] text-[14px] leading-[20px] items-center px-4 py-[15px] rounded-r-2xl pl-6 hover:bg-gray-100 hover:text-[#003366] transition ${
              isActive
                ? "bg-gray-100 border-l-[#003366] text-[#003366]"
                : "text-[#737780] border-l-transparent"
            }`
          }
        >
          <FaUserShield className="w-5 h-5 mr-3" />
          Admin
        </NavLink>
        <NavLink
          to="/settings"
          onClick={() => toggle(false)}
          className={({ isActive }) =>
            `flex font-[500] text-[14px] leading-[20px] items-center px-4 py-[15px] pl-6 hover:bg-gray-100 hover:text-[#003366] transition ${
              isActive
                ? "bg-gray-100 border-l-[#003366] text-[#003366]"
                : "text-[#737780] border-l-transparent"
            }`
          }
        >
          <FaCog className="w-5 h-5 mr-3" />
          Settings
        </NavLink>

        <div className="absolute left-2 bottom-[120px] lg:bottom-4 w-[240px] bg-[#003366] text-white flex flex-col gap-y-[11px] px-[25px] py-[14px] rounded-[24px]">
          <h2 className="font-inter text-[20px] font-[600] leading-[28px]">
            Project Estimate Pro PEP
          </h2>
          <p className="text-[14px] font-[400] leading-[22px]">
            Ornare litora lectus pellentesque elementum consequat natoque
          </p>
          <button className="px-[28px] py-[10px] text-[14px] font-[500] text-black leading-[18px] rounded-[90px] bg-[#FFFFFF]">
            Upgrade to Pro
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
