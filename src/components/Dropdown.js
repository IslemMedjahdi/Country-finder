import React, { useEffect, useRef, useState } from "react";

const Dropdown = React.memo(({ region, setRegion }) => {
  console.log("render dropdown");
  const [isOpen, setOpen] = useState(false);
  const buttonRef = useRef();
  const handleClickOutside = (e) => {
    if (buttonRef.current && !buttonRef.current.contains(e.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });
  return (
    <div className="relative text-left z-50">
      <div>
        <button
          aria-label="dropdown"
          ref={buttonRef}
          type="button"
          className="flex w-40 2xl:w-60 transition text-gray-800 items-center justify-center hover:opacity-90 dark:bg-darkelem bg-white shadow-md rounded-sm text-sm  2xl:px-5 2xl:py-3 px-3 py-2 dark:text-white  "
          id="options-menu"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          {region === "" ? "Filter by Region" : region}
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
      {isOpen ? (
        <div className="origin-top-right  text-gray-800 text-sm dark:text-darktext bg-white dark:bg-darkelem rounded-sm absolute right-0 mt-3 w-40 2xl:w-60  shadow-lg ring-1 ring-black ring-opacity-5">
          <div
            className="py-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div
              className="block hover:opacity-80 cursor-pointer px-3 py-2"
              role="menuitem"
              onClick={() => setRegion("")}
            >
              <span className="flex flex-col">
                <span>All</span>
              </span>
            </div>
            <div
              className="block hover:opacity-80 cursor-pointer px-3 py-2"
              role="menuitem"
              onClick={() => setRegion("Africa")}
            >
              <span className="flex flex-col">
                <span>Africa</span>
              </span>
            </div>
            <div
              className="block hover:opacity-80 cursor-pointer px-3 py-2"
              role="menuitem"
              onClick={() => setRegion("Americas")}
            >
              <span className="flex flex-col">
                <span>Americas</span>
              </span>
            </div>
            <div
              className="block hover:opacity-80 cursor-pointer px-3 py-2"
              role="menuitem"
              onClick={() => setRegion("Asia")}
            >
              <span className="flex flex-col">
                <span>Asia</span>
              </span>
            </div>
            <div
              className="block hover:opacity-80 cursor-pointer px-3 py-2"
              role="menuitem"
              onClick={() => setRegion("Europe")}
            >
              <span className="flex flex-col">
                <span>Europe</span>
              </span>
            </div>
            <div
              className="block hover:opacity-80 cursor-pointer px-3 py-2"
              role="menuitem"
              onClick={() => setRegion("Oceania")}
            >
              <span className="flex flex-col">
                <span>Oceania</span>
              </span>
            </div>
            <div
              className="block hover:opacity-80 cursor-pointer px-3 py-2"
              role="menuitem"
              onClick={() => setRegion("Polar")}
            >
              <span className="flex flex-col">
                <span>Polar</span>
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
});

export default Dropdown;
