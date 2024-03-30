import { PiCircleHalfFill } from "react-icons/pi";
import { FaPlus, FaCircleDot } from "react-icons/fa6";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsExclamationSquareFill } from "react-icons/bs";

import {
  MdSignalCellular1Bar,
  MdSignalCellular2Bar,
  MdSignalCellular4Bar,
  MdOutlinePendingActions,
} from "react-icons/md";
import UserIcon from "./UserIcon";
import { useContext } from "react";
import TicketContext from "../utils/TicketContext";

const GroupHeader = ({ groupKey, groupBy }) => {
  const data = useContext(TicketContext);
  const getGroupIcon = (groupKey, groupBy) => {
    switch (groupBy) {
      case "status":
        return groupKey === "Todo" ? (
          <FaCircleDot className="icon-todo" />
        ) : groupKey === "In progress" ? (
          <PiCircleHalfFill className="icon-in-progress" />
        ) : groupKey === "Backlog" ? (
          <MdOutlinePendingActions className="icon-backlog" />
        ) : null;
      case "user":
        const user = data?.users.find((user) => user.name === groupKey);
        return <UserIcon userId={user?.id} />;

      // return <UserIcon />;
      case "priority":
        return groupKey === "0" ? (
          <BiDotsHorizontalRounded />
        ) : groupKey === "1" ? (
          <MdSignalCellular1Bar />
        ) : groupKey === "2" ? (
          <MdSignalCellular2Bar />
        ) : groupKey === "3" ? (
          <MdSignalCellular4Bar />
        ) : groupKey === "4" ? (
          <BsExclamationSquareFill className="icon-urgent" />
        ) : null;
      default:
        return null;
    }
  };
  return (
    <header className="group-header">
      <div>
        <span className="group-icon">{getGroupIcon(groupKey, groupBy)}</span>
        <h2>{groupKey}</h2>
      </div>
      <div>
        <FaPlus />
        <BiDotsHorizontalRounded />
      </div>
    </header>
  );
};

export default GroupHeader;
