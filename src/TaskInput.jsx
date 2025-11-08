import { useState } from "react";

export default function TaskInput({ addTask }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn-add" onClick={handleAdd}>Add Task</button>
    </div>
  );
}
