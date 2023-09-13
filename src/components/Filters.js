import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Filters = () => {
  const [filter, setfilter] = useState(false);
  const toggle = () => {
    setfilter(!filter);
  };
  return (
    <aside className="sticky top-0 lg:top-16 flex flex-col w-full lg:w-1/5 bg-white text-black shadow-md shadow-gray-300 md:p-3 h-auto lg:h-96">
      <div className="p-3 text-2xl font-semibold flex justify-between items-center">
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
            className="mx-3 lg:hidden block text-xl duration-200"
          />
        )}
      </div>
      <div
        className={`${
          filter ? `flex` : `hidden`
        } lg:flex flex-col justify-center items-start py-3`}
      >
        Hello
      </div>
    </aside>
  );
};

export default Filters;
