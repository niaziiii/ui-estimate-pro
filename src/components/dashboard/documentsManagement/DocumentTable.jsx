import React, { useState } from "react";
import { IoSwapVerticalOutline } from "react-icons/io5";
import { FaRegFilePdf } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "aos/dist/aos.css";

const initialData = Array(500)
  .fill(0)
  .map((_, index) => ({
    id: `#2150 ${555 + index}`,
    cost: `$${(2500 + index).toFixed(2)}`,
    status: "Who Approved It",
    document: "In Claim",
    button: "Save",
  }));

const DocumentTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortOption, setSortOption] = useState("id");

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleMenuClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const handleEdit = (index) => {
    console.log(`Edit row ${index}`);
    handleMenuClose();
  };

  const handleDelete = (index) => {
    console.log(`Delete row ${index}`);
    handleMenuClose();
  };

  const sortedData = [...initialData].sort((a, b) => {
    if (sortOption === "id") {
      return a.id.localeCompare(b.id);
    } else if (sortOption === "cost") {
      return (
        parseFloat(a.cost.replace("$", "")) -
        parseFloat(b.cost.replace("$", ""))
      );
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sortedData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (count) => {
    setItemsPerPage(count);
    setCurrentPage(1);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setCurrentPage(1);
  };

  return (
    <div className="p-0 bg-white w-full">
      <div className=" pb-5 overflow-hidden rounded-2xl bg-white border">
        <div className="overflow-x-auto">
          <table className="min-w-full overflow-y-auto bg-white">
            <thead>
              <tr className="bg-[#022866] text-white">
                <th className="py-3 px-6 text-left">
                  <div className="flex items-center gap-x-4">
                    <p className="text-[18px] font-[500] leading-[26px]">
                      Category ID
                    </p>
                  </div>
                </th>
                <th className="py-3 px-6 text-left">
                  <div className="flex items-center gap-x-4">
                    <p className="text-[18px] font-[500] leading-[26px]">
                      Cost
                    </p>
                  </div>
                </th>
                <th className="py-3 px-6 text-left">
                  <div className="flex items-center gap-x-4">
                    <p className="text-[18px] font-[500] leading-[26px]">
                      Status
                    </p>
                  </div>
                </th>
                <th className="py-3 px-6 text-left">
                  <div className="flex items-center gap-x-4">
                    <p className="text-[18px] font-[500] leading-[26px]">
                      Document
                    </p>
                  </div>
                </th>
                <th className="py-3 px-6 text-left">
                  <div className="flex items-center gap-x-4">
                    <p className="text-[18px] font-[500] leading-[26px] pr-10">
                      Action
                    </p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-white" : "bg-[#F8F9FC]"
                  }`}
                >
                  <td className="py-3 justify-center h-full px-2 text-[16px] font-[600] leading-[22px] text-[#585C67]">
                    <div className="flex gap-x-3 ml-1">
                      <IoSwapVerticalOutline />
                      {item.id}
                    </div>
                  </td>
                  <td className="pl-6 text-[16px] font-[600] leading-[22px] text-[#585C67]">
                    {item.cost}
                  </td>
                  <td className="py-3 px-6">
                    <select className="rounded-[100px] !min-w-[160px] text-[12px] font-[500] leading-[16px] py-[9px] px-[22px] bg-[#12B757]">
                      <option className="px-3" value="save">
                        {item.status}
                      </option>
                    </select>
                  </td>
                  <td className="py-0 px-6">
                    <button className="bg-white active:bg-[#585C67] active:text-white border ml-2 justify-center flex gap-x-1 items-center rounded-[100px] text-[14px] font-[500] leading-[16px] py-[12px] px-[8px] text-[#585C67] w-[119px]">
                      <FaRegFilePdf className="text-sm" />
                      {item.document}
                    </button>
                  </td>
                  <td className="py-3 px-6">
                    <div className="flex items-center gap-x-10 ml-4">
                      <select className="rounded-[100px] text-[12px] font-[500] leading-[16px] py-[9px] px-[22px] bg-[#EBEBEB]">
                        <option className="px-3" value="save">
                          Save
                        </option>
                        <option className="px-3" value="cancel">
                          Cancel
                        </option>
                      </select>
                      <HiOutlineDotsHorizontal
                        className="text-xl cursor-pointer"
                        onClick={(e) => handleMenuClick(e, index)}
                      />
                      <Menu
                        anchorEl={anchorEl}
                        open={selectedRow === index}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={() => handleEdit(index)}>
                          Edit
                        </MenuItem>
                        <MenuItem onClick={() => handleDelete(index)}>
                          Delete
                        </MenuItem>
                      </Menu>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Paginations
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
          itemsPerPage={itemsPerPage}
          sortOption={sortOption}
          onSortChange={handleSortChange}
        />
      </div>
    </div>
  );
};

export default DocumentTable;

const Paginations = ({
  currentPage,
  totalPages,
  onPageChange,
  onItemsPerPageChange,
  itemsPerPage,
  sortOption,
  onSortChange,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const maxPageButtons = 5;

  const getPageButtons = () => {
    const pages = [];

    if (totalPages <= maxPageButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(currentPage - 2, 1);
      const end = Math.min(currentPage + 2, totalPages);

      if (currentPage >= totalPages - 2) {
        for (
          let i = Math.max(totalPages - maxPageButtons + 2, 1);
          i <= totalPages;
          i++
        ) {
          pages.push(i);
        }
      } else {
        pages.push("...");
        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
        pages.push("...");
      }
    }
    return pages;
  };

  const pageButtons = getPageButtons();

  return (
    <div className="mt-7 flex flex-wrap w-full  items-center justify-between gap-y-4 px-4">
      <div className="flex flex-wrap gap-y-2 items-center gap-x-[16px]">
        <p className="text-[16px] font-[500] leading-[22px] text-center whitespace-nowrap">
          Total {totalPages * itemsPerPage} items
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <button
            className={`text-[#EBEBEB] w-[32px] flex items-center justify-center h-[26px] border rounded-[8px] ${
              currentPage === 1 ? "cursor-not-allowed" : ""
            }`}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          {pageButtons.map((page, index) => (
            <React.Fragment key={index}>
              {page === "..." ? (
                <span className="text-[#585C67] w-[32px] flex items-center justify-center h-[26px] border rounded-[8px]">
                  <HiOutlineDotsHorizontal />
                </span>
              ) : (
                <button
                  key={page}
                  className={`text-black w-[32px] flex items-center justify-center h-[26px] border rounded-[8px] ${
                    currentPage === page
                      ? "bg-[#003366] text-white"
                      : "text-[#585C67]"
                  }`}
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))}
          <button
            className={`text-[#EBEBEB] w-[32px] flex items-center justify-center h-[26px] border rounded-[8px] ${
              currentPage === totalPages ? "cursor-not-allowed" : ""
            }`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3 flex-wrap ">
        <div className=" flex items-center gap-2">
          <p className="text-[16px] font-[500] leading-[22px] text-center whitespace-nowrap">
            Sort view by
          </p>
          <div>
            <button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className="flex items-center gap-2"
            >
              <BsThreeDotsVertical />
            </button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  onSortChange("id");
                  handleClose();
                }}
              >
                ID
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onSortChange("cost");
                  handleClose();
                }}
              >
                Cost
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <button
              className={`text-[#585C67] w-[32px] flex items-center justify-center h-[26px] border rounded-[8px] ${
                itemsPerPage === 10 ? "bg-[#003366] text-white" : ""
              }`}
              onClick={() => onItemsPerPageChange(10)}
            >
              10
            </button>
            <button
              className={`text-[#585C67] w-[32px] flex items-center justify-center h-[26px] border rounded-[8px] ${
                itemsPerPage === 25 ? "bg-[#003366] text-white" : ""
              }`}
              onClick={() => onItemsPerPageChange(25)}
            >
              25
            </button>
            <button
              className={`text-[#585C67] w-[32px] flex items-center justify-center h-[26px] border rounded-[8px] ${
                itemsPerPage === 50 ? "bg-[#003366] text-white" : ""
              }`}
              onClick={() => onItemsPerPageChange(50)}
            >
              50
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
