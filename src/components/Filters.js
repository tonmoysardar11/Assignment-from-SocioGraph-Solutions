import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { dataContext } from "../context/dataContext";
import Dropdown from "./Dropdown";

const Filters = () => {
  const [filter, setfilter] = useState(false);
  const output = useContext(dataContext);
  const { categorylist, channellist,statelist, setselectedcategory,
    setselectedchannel,
    setselectedstate } = output;

  const toggle = () => {
    setfilter(!filter);
  };

  const rectify=(arr)=>{
    const newArr=arr.filter((element)=>{
      return element!=='' && element!=='null'
    })
    return(newArr) 
  }
  

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
        <Dropdown name='Choose by Category' list={rectify(Object.keys(categorylist))} clickFunc={(item)=>setselectedcategory(item)}/>
        <Dropdown name='Choose by Channel' list={rectify(Object.keys(channellist))} clickFunc={(item)=>setselectedchannel(item)}/>
        <Dropdown name='Choose by State' list={rectify(Object.keys(statelist))} clickFunc={(item)=>setselectedstate(item)}/>
      </div>
    </aside>
  );
};

export default Filters;
