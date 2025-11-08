import React, { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import FilterBar from "./FilterBar";
import StatsBar from "./StatsBar";
import "./styles.css";

export default function App() {
  // ✅ Initialize state from localStorage immediately
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // 💾 Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, status: "todo" };
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (id) => {
    setTasks((prev) =>
      prev.map((task) => {
        const newStatus =
          task.status === "todo"
            ? "in-progress"
            : task.status === "in-progress"
            ? "done"
            : "todo";
        return task.id === id ? { ...task, status: newStatus } : task;
      })
    );
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
    <div className="app">
      <h1 className="header">Simple Task Manager</h1>
      <StatsBar stats={stats} clearAllTasks={clearAllTasks} />
      <FilterBar
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />
      <TaskInput addTask={addTask} />
      <TaskList tasks={filteredTasks} updateTaskStatus={updateTaskStatus} />
    </div>
  );
}
