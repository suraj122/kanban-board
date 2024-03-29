// Function to get group key for each ticket
const getGroupKey = (ticket, groupBy, data) => {
  switch (groupBy) {
    case "status":
      return ticket.status;
    case "user":
      const user = data?.users.find((user) => user.id === ticket.userId);
      return user ? user.name : "Unknown User";
    case "priority":
      return ticket.priority.toString();
    default:
      return "";
  }
};

export default getGroupKey;
