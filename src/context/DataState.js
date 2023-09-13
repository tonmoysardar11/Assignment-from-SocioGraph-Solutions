import React,{useState,useEffect} from "react";
import { dataContext } from "./dataContext";

const DataState = ({ children }) => {
  const baseURL = "https://staging.iamdave.ai";
  const [data, setdata] = useState([]);
  const [pageno, setpageno] = useState(1);
  const [loader, setloader] = useState();
  const [isfirst, setisfirst] = useState("");
  const [islast, setislast] = useState("");
  const fetchInitialData = async () => {
    setdata([]);
    setloader(true);
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
    setloader(false);
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

  return <dataContext.Provider value={{data,pageno,nextpage,prevpage,loader,isfirst,islast}}>
    {children}
  </dataContext.Provider>;
};

export default DataState;
