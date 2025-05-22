// src/components/TaskList.tsx
import { useTaskStore } from "../store/taskStore";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const tasks = useTaskStore((s) => s.tasks);

  return (
    <div className="space-y-2 mt-4">
      {tasks.length === 0 ? (
        <p className="text-gray-400">No tasks yet.</p>
      ) : (
        tasks.map((t) => <TaskItem key={t.id} task={t} />)
      )}
    </div>
  );
}
