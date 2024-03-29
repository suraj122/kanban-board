import { useEffect, useState } from "react";
import { API_URL } from "./constant";

const useFetchData = () => {
  const [ticketData, setTicketData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();
      setTicketData(json);
    } catch (error) {
      console.log(error);
    }
  };
  return ticketData;
};

export default useFetchData;
