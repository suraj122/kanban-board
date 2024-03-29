import Header from "./components/Header";
import TicketList from "./components/TicketList";

import getGroupKey from "./utils/getGroupKey";
import useGroupAndSortTickets from "./utils/useGroupAndSortTickets";

function App() {
  const { groupedTickets, groupBy, setGroupBy, sortBy, setSortBy } =
    useGroupAndSortTickets(getGroupKey);
  return (
    <>
      <Header
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <TicketList groupedTickets={groupedTickets} groupBy={groupBy} />
    </>
  );
}

export default App;
