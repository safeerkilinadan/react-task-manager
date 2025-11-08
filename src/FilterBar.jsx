
export default function FilterBar({ filter, setFilter, search, setSearch }) {
  return (
    <div className="filter-bar">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
