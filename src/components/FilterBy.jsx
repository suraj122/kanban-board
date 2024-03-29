const AdjustmentChoice = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  return (
    <div className="filter-card">
      <div className="filters">
        <label htmlFor="group-by">Group by:</label>
        <select
          id="group-by"
          value={groupBy}
          onChange={(e) => setGroupBy(e.target.value)}
        >
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>

        <label htmlFor="sort-by">Sort by:</label>
        <select
          id="sort-by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default AdjustmentChoice;
