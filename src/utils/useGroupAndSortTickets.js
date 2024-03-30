import { useEffect, useState } from "react";
import useFetchData from "./useFetchData";

const useGroupTickets = (getGroupKey) => {
  const [groupedTickets, setGroupedTickets] = useState({});
  const [sortedTickets, setSortedTickets] = useState({});
  const [groupBy, setGroupBy] = useState(() => {
    // Load groupBy state from localStorage or set default value
    return localStorage.getItem("groupBy") || "status";
  });
  const [sortBy, setSortBy] = useState(() => {
    // Load sortBy state from localStorage or set default value
    return localStorage.getItem("sortBy") || "priority";
  });

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
          sorted[groupKey] = group.sort((a, b) => b.priority - a.priority);
        } else if (sortBy === "title") {
          sorted[groupKey] = group.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
        }
      });
      return sorted;
    };

    const updatedSortedTickets = sortTickets(groupedTickets);
    setSortedTickets(updatedSortedTickets);
  }, [sortBy, groupedTickets]);

  // Save groupBy and sortBy states to localStorage when they change
  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
  }, [groupBy, sortBy]);

  useEffect(() => {
    localStorage.setItem("sortBy", sortBy);
  }, [sortBy, groupBy]);

  return {
    groupedTickets,
    sortedTickets,
    groupBy,
    setGroupBy,
    sortBy,
    setSortBy,
  };
};

export default useGroupTickets;
