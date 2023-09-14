import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { dataContext } from "../context/dataContext";
import Dropdown from "./Dropdown";

const Filters = () => {
  const [filter, setfilter] = useState(false);
  const output = useContext(dataContext);
  const {
    categorylist,
    channellist,
    statelist,
    setselectedcategory,
    setselectedchannel,
    setselectedstate,
    currentfilter,
    setcurrentfilter,
    setsortreverse,
  } = output;

  const toggle = () => {
    setfilter(!filter);
  };

  const rectify = (arr) => {
    const newArr = arr.filter((element) => {
      return element !== "" && element !== "null";
    });
    return newArr;
  };

  const setCategory = (item) => {
    setselectedcategory(item);
    setselectedchannel();
    setselectedstate();
  };
  const setChannel = (item) => {
    setselectedcategory();
    setselectedchannel(item);
    setselectedstate();
  };
  const setState = (item) => {
    setselectedcategory();
    setselectedchannel();
    setselectedstate(item);
  };

  const setSort = (item) => {
    setselectedcategory('');
    setselectedchannel('');
    setselectedstate('');
    item === "Earlier" ? setsortreverse(false) : setsortreverse(true);
  };

  const clearFilter = () => {
    setselectedcategory('');
    setselectedchannel('');
    setselectedstate('');
    setcurrentfilter('');
    setsortreverse('')
  };

  return (
    <aside className="sticky top-0 lg:top-6 flex flex-col justify-start items-center w-full lg:w-1/5 bg-white text-black min-h-min max-h-[87vh] z-30">
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
        <Dropdown
          name="Choose by Category"
          list={categorylist ? rectify(Object.keys(categorylist)) : ""}
          clickFunc={setCategory}
        />
        <Dropdown
          name="Choose by Channel"
          list={channellist ? rectify(Object.keys(channellist)) : ""}
          clickFunc={setChannel}
        />
        <Dropdown
          name="Choose by State"
          list={statelist ? rectify(Object.keys(statelist)) : ""}
          clickFunc={setState}
        />
        <Dropdown
          name="Sort By Time"
          list={["Earlier", "Later"]}
          clickFunc={setSort}
        />
      </div>
      {currentfilter ? (
        <div className="w-full flex justify-center items-center">
          <p>Selected: {currentfilter}</p>
          <button
            className="bg-red-600 rounded-full text-gray-100 mx-4 px-2 cursor-pointer"
            onClick={clearFilter}
          >
            Remove
          </button>
        </div>
      ) : (
        ""
      )}
    </aside>
  );
};

export default Filters;
