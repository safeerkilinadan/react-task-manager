import React from "react";

export default function StatsBar({ stats, clearAllTasks }) {
  return (
    <div className="stats-bar">
      <p>Total: {stats.total}</p>
      <p>Completed: {stats.completed}</p>
      <button className="btn-clear" onClick={clearAllTasks}>
        Clear All
      </button>
    </div>
  );
}
