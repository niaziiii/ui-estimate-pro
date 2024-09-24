import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { IoDocumentText } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

const documents = [
  {
    id: 1,
    title: "Car Insurance File",
    filesCount: 6,
    size: "137 MB",
  },
  {
    id: 2,
    title: "Fire Insurance File",
    filesCount: 6,
    size: "137 MB",
  },
  {
    id: 3,
    title: "Marine Insurance",
    filesCount: 6,
    size: "137 MB",
  },
  {
    id: 4,
    title: "Insurance Doc File",
    filesCount: 6,
    size: "137 MB",
  },
];

const DocumentList = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedDoc, setSelectedDoc] = React.useState(null);

  const handleMenuOpen = (event, doc) => {
    setAnchorEl(event.currentTarget);
    setSelectedDoc(doc);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedDoc(null);
  };

  return (
    <div className="p-5 md:p-8 lg:p-10 rounded-2xl bg-white mt-10">
      <h3 className="text-[20px] sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
        Document
      </h3>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        data-aos="fade-left"
      >
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col justify-between relative"
          >
            <div className="flex justify-between items-center">
              <IoDocumentText className="text-4xl text-gray-800" />
              <BsThreeDotsVertical
                className="text-xl cursor-pointer text-gray-800"
                onClick={(e) => handleMenuOpen(e, doc)}
              />
            </div>

            <div className="mt-4">
              <h4 className="text-xl font-semibold text-gray-800">
                {doc.title}
              </h4>
              <div className="text-lg text-gray-600 mt-2 flex gap-x-2 items-center">
                <span>{doc.filesCount} Files</span>
                <span className="h-2 w-2 bg-gray-600 rounded-full opacity-30"></span>
                <span>{doc.size}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleMenuClose}>Download</MenuItem>
        <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
      </Menu>
    </div>
  );
};

export default DocumentList;
