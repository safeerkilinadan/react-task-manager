import { useState } from "react";
import DashboardTemplate from "../templates/DashboardTemplate";
import useLocalStorage from "../../hooks/useLocalStoage";

export default function DashboardPage() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, status: "todo" };
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (id, newStatus) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status: newStatus } : t)));
  };

  const clearAllTasks = () => {
    if (window.confirm("Are you sure you want to clear all tasks?")) {
      setTasks([]);
      localStorage.removeItem("tasks");
    }
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter = filter === "all" || task.status === filter;
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === "done").length,
  };

  return (
    <DashboardTemplate
      tasks={filteredTasks}
      addTask={addTask}
      updateTaskStatus={updateTaskStatus}
      filter={filter}
      setFilter={setFilter}
      search={search}
      setSearch={setSearch}
      stats={stats}
      clearAllTasks={clearAllTasks}
    />
  );
}
