export function TodoFilterForm({
  name,
  setName,
  filterHideCompleted,
  setFilterHideCompleted,
}) {
  return (
    <div className="filter-form">
      <div className="filter-form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <label>
        <input
          type="checkbox"
          checked={filterHideCompleted}
          onChange={(e) => setFilterHideCompleted(e.target.checked)}
        />
        Hide Completed
      </label>
    </div>
  );
}
