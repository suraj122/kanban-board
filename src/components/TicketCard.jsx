import { FaCircle } from "react-icons/fa6";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsExclamationSquareFill } from "react-icons/bs";

import {
  MdSignalCellular1Bar,
  MdSignalCellular2Bar,
  MdSignalCellular4Bar,
} from "react-icons/md";
import UserIcon from "./UserIcon";

const TicketCard = ({ ticket }) => {
  const { id, title, tag, priority, userId } = ticket;

  const getPriorityIcon = (score) => {
    return score === 0 ? (
      <BiDotsHorizontalRounded />
    ) : score === 1 ? (
      <MdSignalCellular1Bar />
    ) : score === 2 ? (
      <MdSignalCellular2Bar />
    ) : score === 3 ? (
      <MdSignalCellular4Bar />
    ) : score === 4 ? (
      <BsExclamationSquareFill className="icon-urgent" />
    ) : null;
  };

  return (
    <article className="ticket-card">
      <header className="">
        <strong className="ticket-card-id">{id}</strong>
        <UserIcon userId={userId} id={id} />
      </header>

      <h2 className="ticket-card-title">{title}</h2>
      <footer className="ticket-card-footer">
        <span>{getPriorityIcon(priority)}</span>
        <div>
          <FaCircle className="ticket-card-tag-icon" />
          <span className="ticket-card-tag">{tag[0]}</span>
        </div>
      </footer>
    </article>
  );
};

export default TicketCard;
