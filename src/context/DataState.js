import React, { useState, useEffect } from "react";
import { dataContext } from "./dataContext";

const DataState = ({ children }) => {
  const baseURL = "https://staging.iamdave.ai";
  const [data, setdata] = useState([]);
  const [pageno, setpageno] = useState(1);
  const [loader, setloader] = useState();
  const [isfirst, setisfirst] = useState("");
  const [islast, setislast] = useState("");
  const [categorylist, setcategorylist] = useState();
  const [channellist, setchannellist] = useState();
  const [statelist, setstatelist] = useState();
  const fetchInitialData = async () => {
    setdata([]);
    setloader(true);
    const fetchedPrimaryData = await fetch(
      `${baseURL}/list/supply?_page_number=${pageno}`,
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
    const responsePrimary = await fetchedPrimaryData.json();

    setdata(responsePrimary.data);
    setisfirst(responsePrimary.is_first);
    setislast(responsePrimary.is_last);
    setloader(false);
  };

  const fetchCategory = async () => {
    const fetchedCategoryList = await fetch(
      `${baseURL}/unique/supply/category`,
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
    const response = await fetchedCategoryList.json();
    setcategorylist(response.data)
  };
  const fetchChannel = async () => {
    const fetchedChannelList = await fetch(`${baseURL}/unique/supply/channel`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "X-I2CE-ENTERPRISE-ID": "dave_vs_covid",
        "X-I2CE-USER-ID": "ananth+covid@i2ce.in",
        "X-I2CE-API-KEY": "0349234-38472-1209-2837-3432434",
      },
    });
    const response = await fetchedChannelList.json();
setchannellist(response.data)
  };
  const fetchState = async () => {
    const fetchedStateList = await fetch(`${baseURL}/unique/supply/state`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "X-I2CE-ENTERPRISE-ID": "dave_vs_covid",
        "X-I2CE-USER-ID": "ananth+covid@i2ce.in",
        "X-I2CE-API-KEY": "0349234-38472-1209-2837-3432434",
      },
    });
    const response = await fetchedStateList.json();
    setstatelist(response.data)
  };
  useEffect(() => {
    fetchInitialData();
    fetchCategory();
    fetchChannel();
    fetchState();
  }, [pageno]);

  const nextpage = () => {
    setpageno(pageno + 1);
  };
  const prevpage = () => {
    setpageno(pageno - 1);
  };

  return (
    <dataContext.Provider
      value={{ data, pageno, nextpage, prevpage, loader, isfirst, islast,categorylist,channellist,statelist }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataState;
