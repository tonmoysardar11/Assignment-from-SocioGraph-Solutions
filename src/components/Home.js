import React, { useContext } from "react";
import { Puff } from "react-loader-spinner";
import { dataContext } from "../context/dataContext";
import Filters from "./Filters";

const Home = () => {
  const output = useContext(dataContext);
  const { data, pageno, nextpage, prevpage, loader, isfirst, islast } = output;

  return (
    <>
      {data.length > 0 ? (
        <section className="text-gray-600 body-font">
          <div className="flex justify-between p-5 mx-auto">
          <Filters/>
            <div className="flex flex-wrap w-full lg:w-4/5">
              {data?.map((element) => {
                return (
                  <div key={element.source_id} className="p-2 lg:w-1/4">
                    <div className="h-min bg-gray-200 p-4 rounded-lg overflow-hidden text-left relative flex flex-col justify-between">
                      <div className="w-full flex justify-between items-center">
                        <span className="text-sm title-font flex mb-2">
                          <p className="font-semibold text-gray-700 mr-2">
                            {" "}
                            Category:{" "}
                          </p>
                          {element.category ? element.category : "Unknown"}
                        </span>
                        <span className="text-sm title-font flex mb-2">
                          <p className="font-semibold text-gray-700 mr-2">
                            {" "}
                            Channel:{" "}
                          </p>
                          {element.channel
                            ? element.channel.charAt(0).toUpperCase() +
                              element.channel.slice(1)
                            : "Unknown"}
                        </span>
                      </div>
                      <span className="text-sm title-font flex my-2">
                        <p className="font-semibold text-gray-700 mr-2">
                          {" "}
                          Details:{" "}
                        </p>
                        {element.request_description}
                      </span>
                      <span className="text-sm title-font flex my-2">
                        <p className="font-semibold text-gray-700 mr-2">
                          {" "}
                          Contact:{" "}
                        </p>
                        {element.contact_numbers.map((num) => {
                          return <p key={num}>{num}</p>;
                        })}
                      </span>
                      <span className="text-sm title-font flex my-2">
                        <p className="font-semibold text-gray-700 mr-2">
                          {" "}
                          State:{" "}
                        </p>
                        {element.state
                          ? element.state.charAt(0).toUpperCase() +
                            element.state.slice(1)
                          : "Unknown"}
                      </span>
                      <span className="text-sm title-font flex my-2">
                        <p className="font-semibold text-gray-700 mr-2">
                          {" "}
                          District:{" "}
                        </p>
                        {element.district
                          ? element.district.charAt(0).toUpperCase() +
                            element.district.slice(1)
                          : "Unknown"}
                      </span>
                      <span className="text-sm title-font flex my-2">
                        <p className="font-semibold text-gray-700 mr-2">
                          Source Time:
                        </p>
                        {element.source_time
                          ? element.source_time.slice(0, -6)
                          : "Unknown"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <Puff
            height="400"
            width="400"
            color="#4338CA"
            radius="100"
            wrapperStyle={{}}
            wrapperclassName=""
            visible={loader}
            ariaLabel="rings-loading"
          />
        </div>
      )}

      <footer className="fixed bottom-0 w-full z-20 bg-gray-900 body-font px-3 md:px-5 lg:px-10 xl:px-15">
        <div className="w-full mx-auto flex flex-wrap px-1 md:px-5 py-2 justify-between items-center">
          <button
            class="inline-flex items-center bg-gray-100 text-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 disabled:invisible"
            disabled={isfirst}
            onClick={prevpage}
          >
            &larr; Previous Page
          </button>
          <p className="font-semibold text-gray-200 mx-2">
            {data.length > 0
              ? `Page No ${pageno}`
              : "Please Wait While Loading"}
          </p>
          <button
            class="inline-flex items-center bg-gray-100 text-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 disabled:invisible"
            disabled={islast}
            onClick={nextpage}
          >
            Next Page &rarr;
          </button>
        </div>
      </footer>
    </>
  );
};

export default Home;
