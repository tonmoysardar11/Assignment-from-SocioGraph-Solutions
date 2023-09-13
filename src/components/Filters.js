import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { dataContext } from "../context/dataContext";

const Filters = () => {
  const [filter, setfilter] = useState(false);
  const output = useContext(dataContext);
  const { categorylist, channellist, statelist } = output;

  const toggle = () => {
    setfilter(!filter);
  };
  return (
    <aside className="sticky top-0 lg:top-6 flex flex-col w-full lg:w-1/5 bg-white text-black shadow-md shadow-gray-300 md:p-3 overflow-y-auto h-min lg:h-[87vh] z-30">
      <div className="px-3 py-2 text-2xl font-semibold flex justify-between items-center">
        <span className="ml-4 md:ml-0">Filters</span>
        {filter ? (
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggle}
            className="mx-3 lg:hidden block rotate-90 text-xl duration-200"
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggle}
            className="mx-3 lg:hidden block text-xl duration-200 text-gray-900"
          />
        )}
      </div>
      <div
        className={`${
          filter ? `flex` : `hidden`
        } lg:flex flex-col justify-center items-start py-3`}
      >
        <div className="px-10 lg:px-2">
          <div className="mx-1">
            <p className=" w-full justify-center rounded-md bg-white py-2 text-sm font-semibold text-gray-900 shadow-sm">
              Choose by Category
            </p>
            {Object.keys(categorylist).map((element, index) => {
              return (
                <div
                  key={index}
                  className="mb-[0.125rem] block min-h-[1.5rem]"
                  //   onClick={ascendingPrice}
                >
                  <input
                    className=""
                    type="checkbox"
                    name="sort"
                    // onChange={changeSort}
                    id="ascendingPrice"
                    value="ascendingPrice"
                    // checked={option === "ascendingPrice"}
                  />
                  <label
                    className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="ascendingPrice"
                  >
                    {element}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="px-10 lg:px-2">
          <div className="mx-1">
            <p className=" w-full justify-center rounded-md bg-white py-2 text-sm font-semibold text-gray-900 shadow-sm">
              Choose by Channel
            </p>
            {Object.keys(channellist).map((element, index) => {
              return (
                <div
                  key={index}
                  className="mb-[0.125rem] block min-h-[1.5rem]"
                  //   onClick={ascendingPrice}
                >
                  <input
                    className=""
                    type="checkbox"
                    name="sort"
                    // onChange={changeSort}
                    id="ascendingPrice"
                    value="ascendingPrice"
                    // checked={option === "ascendingPrice"}
                  />
                  <label
                    className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="ascendingPrice"
                  >
                    {element.split('_').map((text)=>text.charAt(0).toUpperCase()+text.slice(1)).join(' ')}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="px-10 lg:px-2">
          <div className="mx-1">
            <p className=" w-full justify-center rounded-md bg-white py-2 text-sm font-semibold text-gray-900 shadow-sm">
              Choose by State
            </p>
            {Object.keys(statelist).sort().map((element, index) => {
              return (
                <div
                  key={index}
                  className="mb-[0.125rem] block min-h-[1.5rem]"
                  //   onClick={ascendingPrice}
                >
                  <input
                    className=""
                    type="checkbox"
                    name="sort"
                    // onChange={changeSort}
                    id="ascendingPrice"
                    value="ascendingPrice"
                    // checked={option === "ascendingPrice"}
                  />
                  <label
                    className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="ascendingPrice"
                  >
                    {element===''?'Unknown':element==='null'?'Not Verified':element.split(' ').map((text)=>text.charAt(0).toUpperCase()+text.slice(1)).join(' ')}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Filters;
