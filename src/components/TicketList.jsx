import TicketCard from "./TicketCard";
import useFetchData from "../utils/useFetchData";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faUser,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

const TicketList = () => {
  const [groupedTickets, setGroupedTickets] = useState({});
  const [groupBy, setGroupBy] = useState("status");
  const [sortBy, setSortBy] = useState("priority");

  const ticketData = useFetchData();

  useEffect(() => {
    // Function to group tickets based on selected option
    const groupTickets = () => {
      const grouped = {};
      ticketData?.tickets.forEach((ticket) => {
        const key = getGroupKey(ticket);
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

  // Function to get group key for each ticket
  const getGroupKey = (ticket) => {
    switch (groupBy) {
      case "status":
        return ticket.status;
      case "user":
        const user = ticketData?.users.find(
          (user) => user.id === ticket.userId
        );
        return user ? user.name : "Unknown User";
      case "priority":
        return ticket.priority.toString();
      default:
        return "";
    }
  };

  // Function to get icon for each group
  const getGroupIcon = (groupKey) => {
    switch (groupBy) {
      case "status":
        return groupKey === "Todo"
          ? faCheckCircle
          : groupKey === "In progress"
          ? faExclamationCircle
          : null;
      case "user":
        return faUser;
      case "priority":
        return groupKey === "0"
          ? faCheckCircle
          : groupKey === "1"
          ? faExclamationCircle
          : null;
      default:
        return null;
    }
  };

  return (
    <section className="ticket-wrapper">
      <div className="container">
        <div className="filters">
          <label htmlFor="group-by">Group by:</label>
          <select
            id="group-by"
            value={groupBy}
            onChange={(e) => setGroupBy(e.target.value)}
          >
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>

          <label htmlFor="sort-by">Sort by:</label>
          <select
            id="sort-by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
        <div className="group-container">
          {Object.keys(groupedTickets).map((groupKey) => (
            <div key={groupKey} className="group">
              <h2>
                {getGroupIcon(groupKey) && (
                  <FontAwesomeIcon
                    icon={getGroupIcon(groupKey)}
                    className="group-icon"
                  />
                )}
                {groupKey}
              </h2>
              <div className="card-container">
                {groupedTickets[groupKey].map((ticket) => (
                  <TicketCard key={ticket.id} ticket={ticket} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketList;
