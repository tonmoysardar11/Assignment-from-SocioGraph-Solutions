import React, { useState,useContext } from "react";
import { dataContext } from "../context/dataContext";

const Dropdown = ({ name, list, clickFunc }) => {
  const output = useContext(dataContext);
  const { setcurrentfilter } = output;

  const [isOpen, setIsOpen] = useState(false);
  

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const cleanString = (string) => {
    return string.includes("_")
      ? string
          .split("_")
          .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
          .join(" ")
      : string
          .split(" ")
          .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
          .join(" ");
  };

  return (
    <div className="relative inline-block text-center">
      <div className="">
        <button
          type="button"
          onClick={toggleDropdown}
          className="flex justify-center mx-auto my-5 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500"
        >
          {name}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 9.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414 1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top absolute top-15 mt-2 min-w-max w-44  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-40">
          <div
            className="py-1 overflow-y-auto max-h-80"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {list.map((element, index) => {
              return (
                <p
                  key={index}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                  role="menuitem"
                  onClick={() => {
                    clickFunc(element);
                    setcurrentfilter(cleanString(element));
                  }}
                >
                  {cleanString(element)}
                </p>
              );
            })}
          </div>
        </div>
      )}
     
    </div>
  );
};

export default Dropdown;
