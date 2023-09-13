import React, { useContext } from "react";
import { dataContext } from "../context/dataContext";

const Footer = () => {
  const output = useContext(dataContext);
  const { data, pageno, nextpage, prevpage, isfirst, islast } = output;
  return (
    <footer className="fixed bottom-0 w-screen z-40 bg-gray-900 body-font px-3 md:px-5 lg:px-10 xl:px-15">
      <div className="w-full mx-auto flex px-1 md:px-5 py-2 justify-between items-center">
        <button
          className="inline-flex items-center bg-gray-100 text-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 disabled:invisible"
          disabled={isfirst}
          onClick={prevpage}
        >
          &larr; Previous Page
        </button>
        <p className="font-semibold text-gray-200 mx-2">
          {data.length > 0 ? `Page No ${pageno}` : "Loading"}
        </p>
        <button
          className="inline-flex items-center bg-gray-100 text-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 disabled:invisible"
          disabled={islast}
          onClick={nextpage}
        >
          Next Page &rarr;
        </button>
      </div>
    </footer>
  );
};

export default Footer;
