import { BrowserRouter, useSearchParams } from "react-router-dom";
import TaskList from "./components/Tasklist";
import TaskFilter from "./components/TaskFilter";
import AddTask from "./components/TaskForm";
import { useEffect } from "react";
import { useTaskStore } from "./store/taskStore";

const AppRoutes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "all";
  const setFilter = useTaskStore(state => state.setFilter);
  const currentFilter = useTaskStore(state => state.filter);

  // Sync URL param to Zustand
  useEffect(() => {
    if (filter !== currentFilter) {
      setFilter(filter as any);
    }
  }, [filter, currentFilter, setFilter]);

  // Sync Zustand to URL
  useEffect(() => {
    const current = searchParams.get("filter");
    if (current !== currentFilter) {
      setSearchParams({ filter: currentFilter });
    }
  }, [currentFilter]);

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">TaskVault 🚀</h1>
      <AddTask />
      <TaskFilter />
      <TaskList />
    </main>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
