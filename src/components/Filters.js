import React from "react";
import Dropdown from "./Dropdown";

const Filters = ({ value, changeHandler,region,setRegion }) => {
  return (
    <div className="flex items-center flex-col space-y-5 sm:space-y-0 sm:flex-row justify-between">
      <div className="flex items-center w-80 2xl:w-[28rem] sm:w-96 text-gray-900 shadow-md space-x-2 dark:text-lightelem bg-white rounded-sm 2xl:px-6 2xl:py-5 px-4 py-3 dark:bg-darkelem">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
        className="bg-transparent outline-none  "
          placeholder="Search for a country..."
          value={value}
          onChange={(e) => changeHandler(e.target.value)}
        />
      </div>
      <div>
          <Dropdown region={region} setRegion={setRegion}/>
      </div>
    </div>
  );
};

export default Filters;
