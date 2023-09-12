import React, { useState, useEffect } from "react";
import { primaryData } from "../const";

const Home = () => {
  const baseURL = "https://staging.iamdave.ai";
  const [data, setdata] = useState([]);
  const [pageno, setpageno] = useState(1);
  const [isfirst, setisfirst] = useState('');
  const [islast, setislast] = useState('');
  const [totalpage, settotalpage] = useState();
  const fetchInitialData = async () => {
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
    setdata(response.data)
    setisfirst(response.is_first)
    setislast(response.is_last)
    settotalpage(response.page_size)
    
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data?.map((element) => {
            return (
              <div key={element.source_id} className="p-2 lg:w-1/3">
                <div className="h-full bg-gray-200 p-4 rounded-lg overflow-hidden text-left relative">
                  <span className="text-sm title-font font-medium text-gray-600 mb-2">
                    <p className="font-semibold text-gray-700"> Category: </p>
                    {element.category ? element.category : "Unknown"}
                  </span>
                  <span className="text-sm title-font font-medium text-gray-600 mb-2">
                    <p className="font-semibold text-gray-700"> Channel: </p>
                    {element.channel ? element.channel : "Unknown"}
                  </span>
                  <span className="text-sm title-font font-medium text-gray-600 mb-2">
                    <p className="font-semibold text-gray-700"> Details: </p>
                    {element.request_description}
                  </span>
                  <span className="text-sm title-font font-medium text-gray-600 mb-2">
                    <p className="font-semibold text-gray-700"> Contact: </p>
                    {element.contact_numbers.map((num) => {
                      return <p key={num}>{num}</p>;
                    })}
                  </span>
                  <span className="text-sm title-font font-medium text-gray-600 mb-2">
                    <p className="font-semibold text-gray-700"> State: </p>
                    {element.state ? element.state : "Unknown"}
                  </span>
                  <span className="text-sm title-font font-medium text-gray-600 mb-2">
                    <p className="font-semibold text-gray-700"> District: </p>
                    {element.district ? element.district : "Unknown"}
                  </span>
                  <span className="text-sm title-font font-medium text-gray-600 mb-2">
                    <p className="font-semibold text-gray-700">
                      {" "}
                      Source Time:{" "}
                    </p>
                    {element.source_time ? element.source_time : "Unknown"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
