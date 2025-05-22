import { useTaskStore } from "../store/taskStore";
import { useNavigate } from "react-router-dom";

const TaskFilter = () => {
  const filter = useTaskStore((state) => state.filter);
  const setFilter = useTaskStore((state) => state.setFilter);
  const navigate = useNavigate();

  const handleFilterChange = (newFilter: "all" | "pending" | "completed") => {
    setFilter(newFilter);
    navigate(`/?filter=${newFilter}`);
  };

  return (
    <div className="flex justify-center space-x-4 my-4">
      {["all", "pending", "completed"].map((f) => (
        <button
          key={f}
          onClick={() => handleFilterChange(f as any)}
          className={`px-3 py-1 rounded ${
            filter === f ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
