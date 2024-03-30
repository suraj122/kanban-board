import { useContext } from "react";
import { FaCircle } from "react-icons/fa6";
import TicketContext from "../utils/TicketContext";

const UserIcon = ({ userId }) => {
  const ticketData = useContext(TicketContext);
  const users = ticketData?.users;
  const createUserIcon = (userId) => {
    const userName = users?.find((user) => user.id === userId);
    // console.log(userName?.name);
    const name = userName?.name?.toUpperCase();
    const userIcon = name?.split(" ").map((word) => word.charAt(0));
    return userIcon;
  };
  const icon = createUserIcon(userId);
  return (
    <div className="user-icon">
      <span>{icon}</span>
      <FaCircle className="ticket-card-tag-icon" />
    </div>
  );
};

export default UserIcon;
