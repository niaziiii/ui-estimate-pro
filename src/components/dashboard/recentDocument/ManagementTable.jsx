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

const initialData = Array(80)
  .fill(0)
  .map((_, index) => ({
    id: `Car Insurance`,
    cost: `$${(2500 + index).toFixed(2)}`,
    Operational_Expenses: `$${(2000 + index).toFixed(2)}`,
    document: "Insurance Claim",
  }));

const ManagementTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortOption, setSortOption] = useState("id");

  const sortedData = [...initialData].sort((a, b) => {
    if (sortOption === "id") {
      return a.id.localeCompare(b.id);
    } else if (sortOption === "cost") {
      return (
        parseFloat(a.cost.replace("$", "")) -
        parseFloat(b.cost.replace("$", ""))
      );
    } else if (sortOption === "Operational_Expenses") {
      return (
        parseFloat(a.Operational_Expenses.replace("$", "")) -
        parseFloat(b.Operational_Expenses.replace("$", ""))
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
    <div className="p-0 bg-white overflow-hidden">
      <div className="overflow-x-auto rounded-2xl bg-white border">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-[#022866] text-white">
              <th className="py-3 px-6 text-left">
                <div className="flex items-center gap-x-4">
                  <p className="text-[18px] font-[500] leading-[26px]">
                    Project Name
                  </p>
                </div>
              </th>
              <th className="py-3 px-6 text-left">
                <div className="flex items-center gap-x-4">
                  <p className="w-[3px] rounded-md h-[18px] bg-[#FFFFFF66]"></p>
                  <p className="text-[18px] font-[500] leading-[26px]">Cost</p>
                </div>
              </th>
              <th className="py-3 px-6 flex justify-center">
                <div className="flex items-center gap-x-4">
                  <p className="w-[3px] rounded-md h-[18px] bg-[#FFFFFF66]"></p>
                  <p className="text-[18px] font-[500] leading-[26px]">
                    Operational Expenses
                  </p>
                </div>
              </th>
              <th className="py-3 px-6 text-left">
                <div className="flex items-center gap-x-4">
                  <p className="w-[3px] rounded-md h-[18px] bg-[#FFFFFF66]"></p>
                  <p className="text-[18px] font-[500] leading-[26px] pr-10 ">
                    Document
                  </p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr
                key={index}
                className={` border-b ${
                  index % 2 === 0 ? "bg-white" : "bg-[#F8F9FC]"
                }`}
              >
                <td className="py-3 justify-center h-full px-2 text-[16px] font-[600] leading-[22px] text-[#585C67]">
                  <div className="flex gap-x-3 ml-1">
                    <IoSwapVerticalOutline />
                    {item.id}
                  </div>
                </td>

                <td className="pl-6 text-[16px] font-[600] leading-[22px] text-[#585C67] text-center">
                  {item.cost}
                </td>
                <td className="pl-6 text-[16px] font-[600] leading-[22px] text-[#585C67] text-center">
                  {item.Operational_Expenses}
                </td>

                <td className="py-3 px-6">
                  <div className="flex items-center gap-x-10 ml-4">
                    <button className="bg-white active:bg-[#585C67] active:text-white border ml-2 justify-center flex gap-x-1 items-center rounded-[100px] text-[14px] font-[500] leading-[16px] py-[12px] px-[8px] text-[#585C67] w-[220px]">
                      <FaRegFilePdf className="text-sm" />
                      {item.document}
                    </button>
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
  );
};

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
    <div className="mt-7 flex-wrap flex justify-between items-center gap-y-4 px-4">
      <div className="flex flex-wrap gap-y-[10px] items-center gap-x-[16px]">
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
      <div className="flex items-center flex-wrap gap-y-2">
        <div className=" flex items-center gap-2 sm:ml-auto">
          <p className="text-[16px] font-[500] leading-[22px] text-center whitespace-nowrap">
            Sort view by
          </p>
          <div>
            <button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className="flex items-center gap-2 px-4 py-2 rounded-[100px] "
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
              <MenuItem
                onClick={() => {
                  onSortChange("Operational_Expenses");
                  handleClose();
                }}
              >
                Operational Expenses
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

export default ManagementTable;
