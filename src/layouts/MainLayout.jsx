import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar/SideBar";
import Header from "./Header/Header";

const MainLayout = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(!open);

  return (
    <div className="flex h-[100vh] overflow-hidden overflow-x-hidden">
      <SideBar open={open} toggle={setOpen} />
      <div className="w-full">
        <Header toggleSidebar={toggleSidebar} />
        <div
          onClick={() => setOpen(false)}
          className="my-1 pb-10 sm:pb-0 h-screen overflow-y-auto"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
