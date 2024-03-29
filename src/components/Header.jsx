import { useState } from "react";
import FilterBy from "./FilterBy";

const Header = () => {
  const [isFilterCardhidden, setIsFilterCardHidden] = useState(false);
  return (
    <header className="header relative">
      <div className="container">
        <button onClick={() => setIsFilterCardHidden(!isFilterCardhidden)}>
          Display
        </button>
        <div className={isFilterCardhidden ? "visible" : "hidden"}>
          <FilterBy />
        </div>
      </div>
    </header>
  );
};

export default Header;
