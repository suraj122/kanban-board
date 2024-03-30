// import getGroupIcon from "../utils/getGroupIcon";
import TicketCard from "./TicketCard";
import GroupHeader from "./GroupHeader";

const TicketList = ({ groupedTickets, groupBy }) => {
  return (
    <section className="ticket-wrapper">
      <div className="container">
        <div className="group-container">
          {Object.keys(groupedTickets).map((groupKey) => (
            <div key={groupKey} className="group">
              <GroupHeader groupKey={groupKey} groupBy={groupBy} />
              <div className="ticket-card-list">
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
