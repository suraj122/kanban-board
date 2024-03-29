import { useState } from "react";
import FilterBy from "./FilterBy";

const Header = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  const [isFilterCardhidden, setIsFilterCardHidden] = useState(false);
  return (
    <header className="header relative">
      <div className="container">
        <button onClick={() => setIsFilterCardHidden(!isFilterCardhidden)}>
          Display
        </button>
        <div className={isFilterCardhidden ? "visible" : "hidden"}>
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
