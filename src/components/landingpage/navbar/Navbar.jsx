import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppSideBar from "./Sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const navbar = [
    {
      label: "About Us",
      path: "/aboutus",
    },
    {
      label: "Service",
      path: "/service",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Pages",
      path: "/pages",
    },
  ];

  return (
    <div>
      {menuOpen && (
        <AppSideBar
          navbar={navbar}
          setVisible={setMenuOpen}
          visible={menuOpen}
        />
      )}
      <div
        className="px-4 md:px-[70px] lg:px-[135px] py-4 lg:py-[20px]"
        style={{
          background: "linear-gradient(105.83deg, #ECF5FF 0%, #F4FCFF 101.46%)",
        }}
      >
        <div className="header-Content flex justify-between items-center">
          {/* Logo */}
          <div className="logo text-xl font-bold">
            <img src={logo} alt="" />
          </div>
          {/* Links */}
          <div className="links text-sm items-center gap-8 hidden lg:flex">
            {navbar.map((item, i) => (
              <NavLink
                className="text-[14px] lg:text-[16px] font-medium leading-[22px]"
                key={i}
                to={item.path}
              >
                <button className="relative p-2 group transition-all">
                  {item.label}
                  <span className="absolute ml-2 left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-[80%]"></span>
                </button>
              </NavLink>
            ))}
          </div>
          <div className="icons flex items-center text-xl font-bold cursor-pointer gap-2 lg:gap-5">
            {/* Hamburger Icon */}
            <div className="lg:hidden flex items-center">
              <RxHamburgerMenu
                className="text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            </div>
            {/* Icons and Search */}
            <Link to={"/login"}>
              <button className="py-1 px-6 lg:py-3 lg:px-10 text-[14px] font-medium bg-[#2ECC71] rounded-full text-white transition-colors duration-300 hover:bg-[#003366]">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
