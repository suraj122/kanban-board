import getGroupIcon from "../utils/getGroupIcon";
import TicketCard from "./TicketCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TicketList = ({ groupedTickets, groupBy }) => {
  return (
    <section className="ticket-wrapper">
      <div className="container">
        <div className="group-container">
          {Object.keys(groupedTickets).map((groupKey) => (
            <div key={groupKey} className="group">
              <h2>
                {getGroupIcon(groupKey, groupBy) && (
                  <FontAwesomeIcon
                    icon={getGroupIcon(groupKey, groupBy)}
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
