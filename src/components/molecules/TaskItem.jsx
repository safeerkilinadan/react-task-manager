import React from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

export default function TaskItem({ task, updateTaskStatus }) {
  const handleStatusChange = () => {
    const newStatus =
      task.status === "todo"
        ? "in-progress"
        : task.status === "in-progress"
        ? "done"
        : "todo";
    updateTaskStatus(task.id, newStatus);
  };

  // 🟣 Dynamic button style based on status
  const getButtonClass = () => {
    switch (task.status) {
      case "todo":
        return "btn-todo";
      case "in-progress":
        return "btn-progress";
      case "done":
        return "btn-done";
      default:
        return "";
    }
  };

  return (
    <div className={`task-item ${task.status}`}>
      <Text>{task.title}</Text>
      <Button
        label={task.status === "done" ? "Reset" : "Next"}
        onClick={handleStatusChange}
        className={getButtonClass()}
      />
    </div>
  );
}
