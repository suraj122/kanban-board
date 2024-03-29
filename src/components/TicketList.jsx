import TicketCard from "./TicketCard";
import GroupHeader from "./GroupHeader";
import useFetchData from "../utils/useFetchData";
import { useEffect, useState } from "react";

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
        const key = ticket[groupBy];
        if (!grouped[key]) {
          grouped[key] = [];
        }
        grouped[key].push(ticket);
      });
      setGroupedTickets(grouped);
    };

    groupTickets();
  }, [groupBy, ticketData]);
  return (
    <section className="ticket-wrapper">
      <div className="container">
        {Object.keys(groupedTickets).map((groupKey) => (
          <div key={groupKey} className="group">
            <h2>{groupKey}</h2>
            <div className="card-container">
              {groupedTickets[groupKey].map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TicketList;
