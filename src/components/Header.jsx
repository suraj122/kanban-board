import { useEffect, useRef, useState } from "react";
import FilterBy from "./FilterBy";
import { IoIosList, IoIosArrowDown } from "react-icons/io";

const Header = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  const [isFilterCardhidden, setIsFilterCardHidden] = useState(false);
  const filterCardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterCardRef.current &&
        !filterCardRef.current.contains(event.target)
      ) {
        setIsFilterCardHidden(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterCardRef]);

  return (
    <header className="header">
      <div className="container">
        <button onClick={() => setIsFilterCardHidden(!isFilterCardhidden)}>
          <IoIosList />
          <span>Display</span>
          <IoIosArrowDown />
        </button>
        <div
          ref={filterCardRef}
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
