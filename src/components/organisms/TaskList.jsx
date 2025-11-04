import React from "react";
import TaskItem from "../molecules/TaskItem";

export default function TaskList({ tasks, updateTaskStatus }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} updateTaskStatus={updateTaskStatus} />
        ))
      )}
    </div>
  );
}
