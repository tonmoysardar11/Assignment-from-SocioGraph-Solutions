import React, { useState, useEffect } from "react";
import { Puff } from "react-loader-spinner";

const Home = () => {
  const baseURL = "https://staging.iamdave.ai";
  const [data, setdata] = useState([]);
  const [pageno, setpageno] = useState(1);
  const [loader, setloader] = useState();
  const [isfirst, setisfirst] = useState("");
  const [islast, setislast] = useState("");
  const fetchInitialData = async () => {
    setdata([])
    setloader(true)
    const fetcheddata = await fetch(
      `${baseURL}//list/supply?_page_number=${pageno}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "X-I2CE-ENTERPRISE-ID": "dave_vs_covid",
          "X-I2CE-USER-ID": "ananth+covid@i2ce.in",
          "X-I2CE-API-KEY": "0349234-38472-1209-2837-3432434",
        },
      }
    );
    const response = await fetcheddata.json();
    setdata(response.data);
    setisfirst(response.is_first);
    setislast(response.is_last);
    setloader(false)
  };

  const nextpage = () => {
      setpageno(pageno + 1);
  };
  const prevpage = () => {
      setpageno(pageno - 1);
  };

  useEffect(() => {
    fetchInitialData();
  }, [pageno]);

  return (
    <>
      {data.length > 0 ? (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {data?.map((element) => {
                return (
                  <div key={element.source_id} className="p-2 lg:w-1/4">
                    <div className="h-full bg-gray-200 p-4 rounded-lg overflow-hidden text-left relative">
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
                          {element.channel ? element.channel : "Unknown"}
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
          {data.length>0?`Page No ${pageno}`:'Please Wait While Loading'}
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
