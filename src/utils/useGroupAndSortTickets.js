import { useEffect, useState } from "react";
import useFetchData from "./useFetchData";

const useGroupTickets = (getGroupKey) => {
  const [groupedTickets, setGroupedTickets] = useState({});
  const [groupBy, setGroupBy] = useState("status");
  const [sortBy, setSortBy] = useState("priority");

  const ticketData = useFetchData();

  useEffect(() => {
    // Function to group tickets based on selected option
    const groupTickets = () => {
      const grouped = {};
      ticketData?.tickets.forEach((ticket) => {
        const key = getGroupKey(ticket, groupBy, ticketData);
        if (!grouped[key]) {
          grouped[key] = [];
        }
        grouped[key].push(ticket);
      });
      setGroupedTickets(grouped);
    };

    groupTickets();
  }, [groupBy, ticketData]);

  useEffect(() => {
    // Function to sort tickets within each group
    const sortTickets = () => {
      const sorted = {};
      Object.keys(groupedTickets).forEach((groupKey) => {
        const group = groupedTickets[groupKey];
        if (sortBy === "priority") {
          sorted[groupKey] = group.sort((a, b) => a.priority - b.priority);
        } else if (sortBy === "title") {
          sorted[groupKey] = group.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
        }
      });
      setGroupedTickets(sorted);
    };

    sortTickets();
  }, [sortBy]);

  return { groupedTickets, groupBy, setGroupBy, sortBy, setSortBy };
};

export default useGroupTickets;
