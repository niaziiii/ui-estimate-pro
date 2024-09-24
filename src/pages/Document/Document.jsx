import React from "react";
import RecentDocument from "../../components/dashboard/recentDocument/RecentDocument";
import Overview from "../../components/dashboard/overview/Overview";
import FileUpload from "../../components/dashboard/upload/FileUpload";

export default function Document() {
  return (
    <div
      className="px-[12px] md:px-[40px] pb-20 relative overflow-x-auto"
      data-aos="fade-left"
    >
      <Overview />
      <RecentDocument />
      <FileUpload />
    </div>
  );
}
