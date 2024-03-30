import Header from "./components/Header";
import TicketList from "./components/TicketList";

import getGroupKey from "./utils/getGroupKey";
import TicketContext from "./utils/TicketContext";
import useFetchData from "./utils/useFetchData";
import useGroupAndSortTickets from "./utils/useGroupAndSortTickets";

function App() {
  const { groupedTickets, groupBy, setGroupBy, sortBy, setSortBy } =
    useGroupAndSortTickets(getGroupKey);

  const ticketData = useFetchData();
  return (
    <TicketContext.Provider value={ticketData}>
      <Header
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <TicketList groupedTickets={groupedTickets} groupBy={groupBy} />
    </TicketContext.Provider>
  );
}

export default App;
