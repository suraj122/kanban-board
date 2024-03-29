import { useState } from "react";
import FilterBy from "./FilterBy";
import { IoIosList, IoIosArrowDown } from "react-icons/io";

const Header = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  const [isFilterCardhidden, setIsFilterCardHidden] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <button onClick={() => setIsFilterCardHidden(!isFilterCardhidden)}>
          <IoIosList />
          <span>Display</span>
          <IoIosArrowDown />
        </button>
        <div
          className={`filter-card ${isFilterCardhidden ? "visible" : "hidden"}`}
        >
          <FilterBy
            groupBy={groupBy}
            setGroupBy={setGroupBy}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
