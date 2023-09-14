import React, { useContext } from "react";
import { Puff } from "react-loader-spinner";
import { dataContext } from "../context/dataContext";
import Filters from "./Filters";
import Footer from "../layout/Footer";

const Home = () => {
  const output = useContext(dataContext);
  const { data, loader } = output;

  return (
    <>
      {data.length > 0 ? (
        <section className="text-gray-600 body-font">
          <div className="flex justify-between p-5 mx-auto flex-col lg:flex-row">
            <Filters />
            <div className="flex flex-wrap pt-24 lg:pt-0 w-full lg:w-4/5">
              {data?.map((element) => {
                return (
                  <div key={element.source_id} className="p-2 lg:w-1/3">
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
                            ? element.channel.split('_').map((text)=>text.charAt(0).toUpperCase()+text.slice(1)).join(' ')
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
                          ? element.state.split(' ').map((text)=>text.charAt(0).toUpperCase()+text.slice(1)).join(' ')
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
      <Footer/>
    </>
  );
};

export default Home;
