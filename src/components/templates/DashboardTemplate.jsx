import FilterBar from "../organisms/FilterBar";
import StatsBar from "../organisms/StatsBar";
import TaskForm from "../organisms/TaskForm";
import TaskList from "../organisms/TaskList";

export default function DashboardTemplate({
  tasks,
  addTask,
  updateTaskStatus,
  filter,
  setFilter,
  search,
  setSearch,
  stats,
  clearAllTasks,
}) {
  return (
    <div className="dashboard">
      <h1 className="header">React Task Manager</h1>
      <StatsBar stats={stats} clearAllTasks={clearAllTasks} />
      <FilterBar
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} />
    </div>
  );
}
