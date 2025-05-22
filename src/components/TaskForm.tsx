// src/components/TaskForm.tsx
import { useState } from "react";
import { useTaskStore } from "../store/taskStore";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const addTask = useTaskStore((s) => s.addTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title.trim());
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Enter task"
        className="px-3 py-2 rounded bg-gray-800 text-white"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}
