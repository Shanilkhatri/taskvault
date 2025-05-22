// src/components/TaskItem.tsx
import type{ Task } from "../types/task";
import { useTaskStore } from "../store/taskStore";

export default function TaskItem({ task }: { task: Task }) {
  const toggle = useTaskStore((s) => s.toggleTask);
  const remove = useTaskStore((s) => s.deleteTask);

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded">
      <div
        onClick={() => toggle(task.id)}
        className={`cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
      >
        {task.title}
      </div>
      <button
        onClick={() => remove(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </div>
  );
}
