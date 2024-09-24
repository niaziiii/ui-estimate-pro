import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { FaEnvelope, FaBell, FaCog, FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ toggleSidebar }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Handle Menu Open/Close
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="py-[22px] px-[10px] sm:px-[35px] flex justify-between items-center bg-white">
      <h1 className="leading-[32px] text-[20px] sm:text-[24px] font-[700]">
        Dashboard
      </h1>

      <div className="flex items-center space-x-0 sm:space-x-4">
        <IconButton>
          <FaEnvelope className="text-[#737780] text-lg sm:text-2xl" />
        </IconButton>
        <IconButton>
          <FaBell className="text-[#737780] text-lg sm:text-2xl" />
        </IconButton>
        <IconButton>
          <FaCog className="text-[#737780] text-lg sm:text-2xl" />
        </IconButton>
        <div className="lg:hidden">
          <IconButton onClick={toggleSidebar}>
            <RxHamburgerMenu className="text-[#737780] text-lg sm:text-2xl" />
          </IconButton>
        </div>
        <div className="h-6 w-[2px] bg-[#D2D3D6]"></div>
        <IconButton onClick={handleMenuOpen}>
          <FaUserCircle className="text-[#737780] sm:w-8 sm:h-8 w-5 h-5" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
