const AdjustmentChoice = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  return (
    <>
      <div className="filter-option">
        <label htmlFor="group-by">Grouping</label>
        <select
          id="group-by"
          value={groupBy}
          onChange={(e) => setGroupBy(e.target.value)}
        >
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="filter-option">
        <label htmlFor="sort-by">Ordering</label>
        <select
          id="sort-by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </>
  );
};

export default AdjustmentChoice;
