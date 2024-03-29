import {
  faCheckCircle,
  faUser,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

const getGroupIcon = (groupKey, groupBy) => {
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

export default getGroupIcon;
