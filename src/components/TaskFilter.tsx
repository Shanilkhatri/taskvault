import { useTaskStore } from "../store/taskStore";

export default function TaskFilter() {
    const filter = useTaskStore((s) => s.filter);
    const setFilter = useTaskStore((s) => s.setFilter);
  
    const options: { label: string; value: typeof filter }[] = [
      { label: "All", value: "all" },
      { label: "Pending", value: "pending" },
      { label: "Completed", value: "completed" },
    ];
  
    return (
      <div className="flex gap-2 mt-4">
        {options.map((opt) => (
          <button
            key={opt.value}
            className={`px-3 py-1 rounded border ${
              filter === opt.value
                ? "bg-blue-600 border-blue-600"
                : "border-gray-600"
            }`}
            onClick={() => setFilter(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    );
  }
  