
export default function TaskItem({ task, updateTaskStatus }) {
  const handleClick = () => updateTaskStatus(task.id);

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
      <span>{task.title}</span>
      <button className={getButtonClass()} onClick={handleClick}>
        {task.status === "done" ? "Reset" : "Next"}
      </button>
    </div>
  );
}
