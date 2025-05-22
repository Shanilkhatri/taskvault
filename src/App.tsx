import TaskForm from "./components/TaskForm";
import TaskList from "./components/Tasklist";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">TaskVault 🚀</h1>
      <TaskForm />
      <TaskList />
    </main>
  );
}
