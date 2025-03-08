import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useProductContext } from "../Contexts/ProductContext";

export default function Filters() {
  const { filters, selectedFilter, setSelectedFilter } = useProductContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleOptionSelect = (option) => {
    setSelectedFilter(option);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false); // Close dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="max-w-md mx-auto">
      <div className="ps-2 w-[230px] me-2">
        <div className=" w-full " ref={dropdownRef}>
          <div
            className="w-full border border-gray-300 h-42 font-base rounded cursor-pointer py-1 px-3 flex items-center justify-between"
            onClick={toggleDropdown}
          >
            <p className="font-medium ">
              <span className=" text-gray-400">Sort By: </span>
              {selectedFilter}
            </p>
            <IoIosArrowDown
              className={`${isDropdownOpen ? "rotate-180" : ""} text-gray-600`}
            />
          </div>

          {isDropdownOpen && (
            <ul className="mt-2 h-64 border bg-white rounded-b absolute overflow-x-auto font-base bg-white">
              {[
                "Relevance",
                "New Arrivals",
                "Price (High to Low)",
                "Price (Low to High)",
                "Ratings",
                "Discount",
              ].map((option) => (
                <li
                  key={option}
                  className={`ps-3 pe-6 h-12 w-[196px] text-gray-500 py-3 hover:bg-gray-100 font-semibold cursor-pointer ${
                    selectedFilter === option ? "bg-pink-200 text-gray-700" : ""
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-4 w-full pb-2 border border-gray-300 rounded-lg">
          <div className="mt-4 text-gray-800 ms-4">
            <span className="font-medium">FILTERS</span>
          </div>
          <div className="text-xs text-gray-400 ms-4 ">
            <span>1000+ Products</span>
          </div>
          <div className="px-4">
            <div className="border border-gray-300 my-2"></div>
          </div>
          <div className="">
            <ul>
              {filters.map((filter, index) => (
                <div key={filter._id}>
                  <div className="flex px-4 h-8 text-gray-800 justify-between items-center">
                    <li className={`font-normal`}>{filter.name}</li>
                    <span className="text-base text-gray-600">
                      <IoIosArrowDown className={` `} />
                    </span>
                  </div>
                  {/* Show border only if it's NOT the last filter */}
                  {index !== filters.length - 1 && (
                    <div className="px-4">
                      <div className="border border-gray-300 my-2"></div>
                    </div>
                  )}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
