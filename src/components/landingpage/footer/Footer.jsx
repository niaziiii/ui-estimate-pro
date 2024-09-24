import React from "react";
import logo from "../../../assets/images/footerlogo/footorlogo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerData = [
    {
      title: (
        <img
          src={logo}
          alt="Project Estimate Pro Logo"
          className="w-32 h-auto mb-[30px]"
        />
      ),
      links: [
        { name: "Contact us", path: "/contact_us" },
        { name: "Templates", path: "/templates" },
        { name: "Enterprise", path: "/enterprise" },
        { name: "SMB", path: "/smb" },
        { name: "App marketplace", path: "/app_marketplace" },
      ],
    },
    {
      title: "MOC",
      links: [
        { name: "Docs", path: "/docs" },
        { name: "Integrations", path: "/integrations" },
        { name: "Automations", path: "/automations" },
        { name: "Dashboards", path: "/dashboard" },
        { name: "Gantt", path: "/gantt" },
      ],
    },
    {
      title: "Use cases",
      links: [
        { name: "Marketing", path: "/marketing" },
        { name: "Project management", path: "/project_management" },
        { name: "Sales", path: "/sales" },
        { name: "HR", path: "/hr" },
        { name: "Operations", path: "/operations" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About us", path: "/about_us" },
        { name: "Press", path: "/press" },
        { name: "Videos", path: "/videos" },
        { name: "Affiliates", path: "/affiliates" },
      ],
    },
  ];

  return (
    <div>
      <footer className="bg-[#003366] px-4 py-8 md:px-12 lg:px-[135px] lg:pt-[87px] lg:pb-[71px]">
        <div className="container mx-auto px-20 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-white">
          {footerData.map((column, index) => (
            <div key={index} className="flex flex-col gap-4">
              {column.title && (
                <div className={index === 0 ? "flex items-center" : ""}>
                  {typeof column.title === "string" ? (
                    <h3 className="font-inter text-[18px] font-medium leading-[32px]">
                      {column.title}
                    </h3>
                  ) : (
                    column.title
                  )}
                </div>
              )}
              <ul className="flex flex-col gap-4">
                {column.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="font-inter text-[16px] font-normal leading-[19.36px] text-left text-[#D2D3D6] cursor-pointer relative group inline-block"
                  >
                    <Link to={link.path} className="relative inline-block">
                      <p className="mb-2">{link.name}</p>
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="bg-[#001F3E] text-center py-5 font-roboto text-[16px] font-normal leading-[26px] text-white">
        <p>Copyright © 2024 . All Rights Reserved</p>
      </div>
    </div>
  );
}
