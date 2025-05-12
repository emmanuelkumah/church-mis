import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
ChevronDoubleLeftIcon;
type PaginateProps = {
  className?: string; // Optional className prop for styling
  currentPage?: number; // Optional currentPage prop for controlled pagination
  onPageChange?: (page: number) => void; // Callback for page change
  totalItems?: number; // Total number of items (replace with your data length)
};
const Paginate: React.FC<PaginateProps> = ({
  className,
  currentPage,
  onPageChange,
  totalItems = 10, // Total number of items (replace with your data length)
}) => {
  return (
    <div
      className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
      onClick={() => console.log("Pagination clicked")}
    >
      {/* Pagination controls */}
      <button
        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md px-4 py-2 cursor-pointer"
        disabled={currentPage === 1}
        onClick={() => console.log("Clicked on left arrow")}
      >
        <ChevronDoubleLeftIcon className="h-4 w-4" /> {/* Left arrow icon */}
      </button>
      <button
        onClick={() => console.log("Clicked on page number")}
        disabled={currentPage === totalItems}
        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md px-4 py-2"
      >
        <ChevronDoubleRightIcon className="h-4 w-4" /> {/* Right arrow icon */}
      </button>
    </div>
  );
};

export default Paginate;
