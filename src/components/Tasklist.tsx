// src/components/TaskList.tsx
import { useTaskStore } from "../store/taskStore";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const tasks = useTaskStore((s) => s.tasks);
  const filter = useTaskStore((s) => s.filter);

  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });
  return (
    <div className="space-y-2 mt-4">
      {filteredTasks.length === 0 ? (
        <p className="text-gray-400">No tasks yet.</p>
      ) : (
        filteredTasks.map((t) => <TaskItem key={t.id} task={t} />)
      )}
    </div>
  );
}
