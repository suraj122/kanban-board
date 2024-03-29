const AdjustmentChoice = () => {
  return (
    <div className="filter-card">
      <div className="filter-option">
        <label htmlFor="group-by">Grouping</label>
        <select id="group-by">
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="filter-option">
        <label htmlFor="sort-by">Ordering</label>
        <select id="sort-by">
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default AdjustmentChoice;
