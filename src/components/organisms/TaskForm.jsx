import { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function TaskForm({ addTask }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  return (
    <div className="task-input">
      <Input
        placeholder="Enter new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button label="Add Task" onClick={handleAdd} />
    </div>
  );
}
