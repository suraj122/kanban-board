// import getGroupIcon from "../utils/getGroupIcon";
import TicketCard from "./TicketCard";
import {
  FaRegCircle,
  FaUser,
  FaExclamationCircle,
  FaCheckCircle,
} from "react-icons/fa";
import { PiCircleHalfFill } from "react-icons/pi";

const TicketList = ({ groupedTickets, groupBy }) => {
  const getGroupIcon = (groupKey, groupBy) => {
    switch (groupBy) {
      case "status":
        return groupKey === "Todo" ? (
          <FaRegCircle />
        ) : groupKey === "In progress" ? (
          <PiCircleHalfFill />
        ) : null;
      case "user":
        return <FaUser />;
      case "priority":
        return groupKey === "0" ? (
          <FaCheckCircle />
        ) : groupKey === "1" ? (
          <FaExclamationCircle />
        ) : null;
      default:
        return null;
    }
  };

  return (
    <section className="ticket-wrapper">
      <div className="container">
        <div className="group-container">
          {Object.keys(groupedTickets).map((groupKey) => (
            <div key={groupKey} className="group">
              <h2>
                {getGroupIcon(groupKey, groupBy)}
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
