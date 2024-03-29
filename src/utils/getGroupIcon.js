import {
  FaRegCircle,
  FaUser,
  FaExclamationCircle,
  FaCheckCircle,
} from "react-icons/fa";
import { PiCircleHalfFill } from "react-icons/pi";

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

export default getGroupIcon;
